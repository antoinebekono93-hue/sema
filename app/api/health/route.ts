import { NextResponse } from 'next/server';

export async function GET() {
  const dbUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL;

  if (!dbUrl) {
    return NextResponse.json({
      status: 'error',
      message: 'DATABASE_URL is NOT set',
      available_vars: Object.keys(process.env).filter(k => k.includes('POSTGRES') || k.includes('DATABASE') || k.includes('NEON'))
    });
  }

  try {
    const { neon } = await import('@neondatabase/serverless');
    const sql = neon(dbUrl);
    await sql`SELECT 1`;
    return NextResponse.json({ status: 'ok', message: 'Database connected successfully' });
  } catch (err: any) {
    return NextResponse.json({ status: 'error', message: err.message });
  }
}
