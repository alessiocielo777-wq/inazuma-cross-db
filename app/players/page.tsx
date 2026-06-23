import { supabase } from "@/lib/supabase";
import Navbar from "@/components/Navbar";
import PlayerGrid from "@/components/PlayerGrid";

export default async function PlayersPage() {
    const { data: players } = await supabase
        .from("players")
        .select("*")
        .order("id");

    return (
        <main className="min-h-screen bg-slate-950 text-white p-8">
            <Navbar
                showLogo={false}
                active="players"
            />
            <div className="max-w-7xl mx-auto pt-16"></div>
            {/* <a
                href="/"
                className="inline-flex items-center gap-2 text-orange-400 font-bold mb-6 hover:text-orange-300"
            >
                ← Torna alla Home
            </a> */}

            <h1>


            </h1>
            <section className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-black mb-2 text-orange-400">
                    PERSONAGGI
                </h1>

                <p className="text-slate-400 mb-6">
                    Tutti i personaggi giocabili di Inazuma Eleven Cross!
                </p>

                <PlayerGrid players={players ?? []} />
            </section>
        </main>
    );
}