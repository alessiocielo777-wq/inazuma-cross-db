import PlayerStats from "@/components/PlayerStats";
import PlayerPassives from "@/components/PlayerPassives";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

/*test*/

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
                <Link
                    href="/players"
                    className="text-orange-400 hover:text-orange-300 font-bold"
                >
                    ← Torna ai Personaggi
                </Link>
            </header>

            <section className="max-w-6xl mx-auto p-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <div className="aspect-square bg-slate-800 rounded-xl overflow-hidden">
                            {player.image_url ? (
                                <img
                                    src={player.image_url}
                                    alt={player.name}
                                    className="w-full h-full object-contain"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                    Nessuna immagine
                                </div>
                            )}
                        </div>

                        <div className="mt-4 flex justify-center">
                            <img
                                src={teamLogo(player.team)}
                                alt={player.team}
                                className="w-20 h-20 object-contain"
                            />
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <div className="flex items-center">
                            <h1 className="text-5xl font-bold text-orange-400">
                                {player.name}
                            </h1>

                            <div className="ml-6 mt-2 flex items-center gap-1">
                                {Array.from({ length: Number(player.rarity || 3) }).map(
                                    (_, i) => (
                                        <img
                                            key={i}
                                            src="/icons/star.png"
                                            alt="Star"
                                            className="w-7 h-7"
                                        />
                                    )
                                )}
                            </div>
                        </div>

                        <p className="text-slate-400 mt-2">{player.description}</p>

                        <div className="mt-8 grid md:grid-cols-2 gap-4">
                            <PlayerStats player={player} />
                            <PlayerPassives player={player} />
                        </div>

                        <div className="grid md:grid-cols-3 gap-4 mt-8">
                            <div className="bg-slate-900 border border-slate-500/80 p-4 rounded-xl">
                                <p className="text-white font-bold mb-3">Ruolo</p>
                                <img
                                    src={roleIcon(player.role)}
                                    alt={player.role}
                                    className="h-7 object-contain"
                                />
                            </div>

                            <div className="bg-slate-900 border border-slate-500/80 p-4 rounded-xl">
                                <p className="text-white font-bold mb-3">Elemento</p>
                                <div className="flex items-center gap-2">
                                    <img
                                        src={elementIcon(player.element)}
                                        alt={player.element}
                                        className="w-5 h-5 object-contain"
                                    />
                                    <span className="font-bold text-lg">{player.element}</span>
                                </div>
                            </div>

                            <div className="bg-slate-900 border border-slate-500/80 p-4 rounded-xl">
                                <p className="text-white font-bold mb-3">Tier</p>
                                <p className="text-2xl font-black text-orange-400">
                                    {player.tier}
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 bg-slate-900 border border-slate-500/80 rounded-3xl p-6">
                            <h2 className="text-2xl font-black text-white text-center mb-6">
                                Tecniche
                            </h2>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-slate-900 border-2 border-orange-500 rounded-xl p-4 flex items-center justify-between gap-4 min-h-[82px]">
                                    {player.tecnica_1 ? (
                                        <>
                                            <div className="flex items-center gap-4">
                                                <img
                                                    src={techniqueIcon(player.tecnica_1_tipo)}
                                                    alt={player.tecnica_1_tipo}
                                                    className="w-10 h-10 object-contain"
                                                />

                                                <span className="font-black text-lg text-white">
                                                    {player.tecnica_1}
                                                </span>
                                            </div>

                                            <div className="bg-cyan-500/20 border border-cyan-400 rounded-lg w-16 h-16 flex flex-col items-center justify-center">
                                                <span className="text-cyan-300 text-xs font-bold">
                                                    TP
                                                </span>

                                                <span className="text-cyan-300 text-xl font-black leading-none">
                                                    {player.tecnica_tp_1}
                                                </span>
                                            </div>
                                        </>
                                    ) : null}
                                </div>

                                <div className="bg-slate-900 border-2 border-orange-500 rounded-xl p-4 flex items-center justify-between gap-4 min-h-[82px]">
                                    {player.tecnica_2 ? (
                                        <>
                                            <div className="flex items-center gap-4">
                                                <img
                                                    src={techniqueIcon(player.tecnica_2_tipo)}
                                                    alt={player.tecnica_2_tipo}
                                                    className="w-10 h-10 object-contain"
                                                />

                                                <span className="font-black text-lg text-white">
                                                    {player.tecnica_2}
                                                </span>
                                            </div>

                                            <div className="bg-cyan-500/20 border border-cyan-400 rounded-lg w-16 h-16 flex flex-col items-center justify-center">
                                                <span className="text-cyan-300 text-xs font-bold">
                                                    TP
                                                </span>

                                                <span className="text-cyan-300 text-xl font-black leading-none">
                                                    {player.tecnica_tp_2}
                                                </span>
                                            </div>
                                        </>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

function roleIcon(role: string) {
    switch (role) {
        case "FW":
        case "Attaccante":
            return "/roles/fw.png";
        case "MF":
        case "Centrocampista":
            return "/roles/mf.png";
        case "DF":
        case "Difensore":
            return "/roles/df.png";
        case "GK":
        case "Portiere":
            return "/roles/gk.png";
        default:
            return "/roles/fw.png";
    }
}

function elementIcon(element: string) {
    switch (element) {
        case "Fuoco":
            return "/elements/fire.png";
        case "Montagna":
            return "/elements/mountain.png";
        case "Bosco":
            return "/elements/forest.png";
        case "Vento":
            return "/elements/wind.png";
        default:
            return "/elements/fire.png";
    }
}

function teamLogo(team: string) {
    switch (team) {
        case "Raimon":
            return "/teams/raimon.png";
        case "Raimon Japan":
            return "/teams/raimon-japan.png";
        case "Royal Academy":
            return "/teams/royal-academy.png";
        case "Zeus":
            return "/teams/zeus.png";
        case "Alius Academy":
            return "/teams/alius-academy.png";
        case "Kirkwood":
            return "/teams/kirkwood.png";
        case "Wild":
            return "/teams/wild.png";
        case "Shuriken":
            return "/teams/shuriken.png";
        case "Occult":
            return "/teams/occult.png";
        case "Otaku":
            return "/teams/otaku.png";
        case "Brainwashing":
            return "/teams/brainwashing.png";
        case "Japan National":
            return "/teams/japan-national.png";
        default:
            return "/teams/raimon.png";
    }
}

function techniqueIcon(type: string) {
    switch (type) {
        case "Tiro":
            return "/techniques/tiro.png";
        case "Dribble":
            return "/techniques/dribble.png";
        case "Blocco":
            return "/techniques/blocco.png";
        case "Catch":
            return "/techniques/catch.png";
        default:
            return "/techniques/tiro.png";
    }
}