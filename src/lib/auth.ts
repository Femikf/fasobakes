import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET || 'faso_bakes_secret_jwt_key_2026';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'faso@admin2026';
const COOKIE_NAME = 'faso_admin_token';

export interface AdminSession {
  role: 'admin';
  username: string;
}

export function verifyAdminPassword(password: string): boolean {
  return password === ADMIN_PASSWORD;
}

export function generateAdminToken(): string {
  return jwt.sign({ role: 'admin', username: 'fasoadmin' }, JWT_SECRET, {
    expiresIn: '7d',
  });
}

export function verifyAdminToken(token: string): AdminSession | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as AdminSession;
    if (decoded && decoded.role === 'admin') {
      return decoded;
    }
    return null;
  } catch {
    return null;
  }
}

export async function isCurrentUserAdmin(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return false;
  return verifyAdminToken(token) !== null;
}

export { COOKIE_NAME };
