import { supabase } from "@/app/lib/supabase";

export default async function Home() {
  const { data, error } = await supabase
    .from("experiments")
    .select("*");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold">
        Judgement Market
      </h1>

      <pre className="bg-black text-green-400 p-4 rounded text-sm">
        {JSON.stringify({ data, error }, null, 2)}
      </pre>
    </main>
  );
}