
import PlayerStats from "@/components/PlayerStats";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default async function PlayerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data: player } = await supabase
    .from("players")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!player) {
    return (
      <main className="min-h-screen bg-slate-950 text-white p-10">
        <h1>Personaggio non trovato</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800 p-6">
        <Link href="/" className="text-orange-400 hover:text-orange-300">
          ← Torna alla Home
        </Link>
      </header>

      <section className="max-w-6xl mx-auto p-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="aspect-square bg-slate-800 rounded-xl overflow-hidden">
            {player.image_url ? (
              <img
                src={player.image_url}
                alt={player.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                Nessuna immagine
              </div>
            )}
          </div>

          <div className="md:col-span-2">
            <h1 className="text-5xl font-bold text-orange-400">
              {player.name}
            </h1>

            <p className="text-slate-400 mt-2">
              {player.description}
            </p>

            <div className="mt-8">
              <PlayerStats player={player} />
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="bg-slate-900 p-4 rounded-xl">
                <p className="text-slate-400">Ruolo</p>
                <p className="text-xl font-bold">{player.role}</p>
              </div>

              <div className="bg-slate-900 p-4 rounded-xl">
                <p className="text-slate-400">Elemento</p>
                <p className="text-xl font-bold">{player.element}</p>
              </div>

              <div className="bg-slate-900 p-4 rounded-xl">
                <p className="text-slate-400">Tier</p>
                <p className="text-xl font-bold text-orange-400">
                  {player.tier}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}