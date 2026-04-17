import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

function createSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return null;
  }

  return createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false }
  });
}

function missingConfigResponse() {
  return NextResponse.json(
    { error: "Supabase environment variables are not configured." },
    { status: 500 }
  );
}

export async function GET() {
  const supabase = createSupabaseClient();
  if (!supabase) {
    return missingConfigResponse();
  }

  const { data, error } = await supabase
    .from("mga_talinghaga")
    .select("id, content, created_at")
    .order("created_at", { ascending: false })
    .limit(24);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ whispers: data ?? [] });
}

export async function POST(request: Request) {
  const supabase = createSupabaseClient();
  if (!supabase) {
    return missingConfigResponse();
  }

  const body = await request.json();
  const content = typeof body?.content === "string" ? body.content.trim() : "";

  if (!content) {
    return NextResponse.json({ error: "Confession cannot be empty." }, { status: 400 });
  }

  if (content.length > 1200) {
    return NextResponse.json({ error: "Confession must be under 1200 characters." }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("mga_talinghaga")
    .insert({ content })
    .select("id, content, created_at");

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ whisper: data?.[0] ?? null });
}
