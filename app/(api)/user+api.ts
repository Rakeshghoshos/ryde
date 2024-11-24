import { neon } from "@neondatabase/serverless";

export async function POST(req: Request) {
  try {
    const sql = neon(`${process.env.DATABASE_URL}`);
    const { name, email, clerkId } = await req.json();
    if (!name || !email || !clerkId)
      return new Response("Missing required fields", { status: 400 });

    const response = await sql`
        INSERT INTO users (name, email, clerk_id) VALUES (${name}, ${email}, ${clerkId})
    `;
    return new Response(JSON.stringify({ data: response }), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response("Internal Server Error", { status: 500 });
  }
}
