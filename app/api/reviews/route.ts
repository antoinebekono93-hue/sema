import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

// GET all reviews
export async function GET() {
  try {
    // Attempt to fetch reviews. If table doesn't exist yet, this will throw an error that we catch.
    const { rows } = await sql`SELECT * FROM reviews ORDER BY created_at DESC;`;
    return NextResponse.json({ reviews: rows }, { status: 200 });
  } catch (error: any) {
    // If the table doesn't exist (relation "reviews" does not exist)
    if (error.message.includes('relation "reviews" does not exist')) {
      return NextResponse.json({ reviews: [] }, { status: 200 });
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST a new review
export async function POST(request: Request) {
  try {
    const { name, rating, text, appliance } = await request.json();

    if (!name || !rating || !text) {
      return NextResponse.json({ error: 'Name, rating, and text are required' }, { status: 400 });
    }

    // Automatically create the table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS reviews (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        rating INTEGER NOT NULL,
        text TEXT NOT NULL,
        appliance VARCHAR(255),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // Insert the new review
    const result = await sql`
      INSERT INTO reviews (name, rating, text, appliance)
      VALUES (${name}, ${rating}, ${text}, ${appliance || 'General Service'})
      RETURNING *;
    `;

    return NextResponse.json({ success: true, review: result.rows[0] }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
