import { NextResponse } from 'next/server';
import { getAllBanners, addBanner, updateBanner, deleteBanner } from '@/lib/store';
import { isCurrentUserAdmin } from '@/lib/auth';

export async function GET() {
  try {
    const banners = await getAllBanners();
    return NextResponse.json(banners);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch banners' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const isAdmin = await isCurrentUserAdmin();
  if (!isAdmin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    if (!body.title || !body.imageUrl) {
      return NextResponse.json({ error: 'Title and image are required' }, { status: 400 });
    }

    const created = await addBanner({
      tagline: body.tagline || 'Artisanal Bakery & Confectionery',
      title: body.title,
      subtitle: body.subtitle || '',
      ctaText: body.ctaText || 'Explore Products',
      ctaLink: body.ctaLink || '#products',
      secondaryCtaText: body.secondaryCtaText || 'Contact Us',
      secondaryCtaLink: body.secondaryCtaLink || '#contact',
      imageUrl: body.imageUrl,
      badge: body.badge || 'Fresh Baked',
      isActive: body.isActive !== undefined ? body.isActive : true,
      order: body.order || 99,
    });

    return NextResponse.json(created, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Failed to create banner' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  const isAdmin = await isCurrentUserAdmin();
  if (!isAdmin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const id = body.id || body._id;
    if (!id) {
      return NextResponse.json({ error: 'Banner ID required' }, { status: 400 });
    }

    const updated = await updateBanner(id, body);
    if (!updated) {
      return NextResponse.json({ error: 'Banner not found' }, { status: 404 });
    }

    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: 'Failed to update banner' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const isAdmin = await isCurrentUserAdmin();
  if (!isAdmin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ error: 'Banner ID required' }, { status: 400 });
    }

    const deleted = await deleteBanner(id);
    if (!deleted) {
      return NextResponse.json({ error: 'Banner not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Banner deleted' });
  } catch {
    return NextResponse.json({ error: 'Failed to delete banner' }, { status: 500 });
  }
}
