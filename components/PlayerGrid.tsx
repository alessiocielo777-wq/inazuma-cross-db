"use client";

import { useState } from "react";
import Link from "next/link";

export default function PlayerGrid({ players }: { players: any[] }) {
    const [search, setSearch] = useState("");
    const [element, setElement] = useState("");
    const [role, setRole] = useState("");
    const [team, setTeam] = useState("");
    const [rarity, setRarity] = useState("");
    const [tier, setTier] = useState("");


    const filteredPlayers = players.filter((player) => {
        const matchSearch = player.name
            ?.toLowerCase()
            .includes(search.toLowerCase());

        const matchElement = element ? player.element === element : true;
        const matchRole = role ? player.role === role : true;
        const matchTeam = team ? player.team === team : true;
        const matchRarity = rarity ? String(player.rarity) === rarity : true;
        const matchTier = tier ? player.tier === tier : true;

        return matchSearch && matchElement && matchRole && matchRarity && matchTier && matchTeam;
    });

    return (
        <>
            <div className="flex flex-wrap gap-4 mb-8">
                <input
                    type="text"
                    placeholder="Cerca personaggio..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-64 bg-slate-900 border border-slate-700 rounded-lg p-4 text-white placeholder:text-slate-500"
                />

                <select value={element} onChange={(e) => setElement(e.target.value)} className="bg-slate-900 border border-slate-700 rounded-lg p-4">
                    <option value="">Elemento</option>
                    <option value="Fuoco">Fuoco</option>
                    <option value="Montagna">Montagna</option>
                    <option value="Bosco">Bosco</option>
                    <option value="Vento">Vento</option>
                </select>

                <select value={role} onChange={(e) => setRole(e.target.value)} className="bg-slate-900 border border-slate-700 rounded-lg p-4">
                    <option value="">Ruolo</option>
                    <option value="Attaccante">FW</option>
                    <option value="Centrocampista">MF</option>
                    <option value="Difensore">DF</option>
                    <option value="Portiere">GK</option>
                </select>

                <select
                    value={team}
                    onChange={(e) => setTeam(e.target.value)}
                    className="bg-slate-900 border border-slate-700 rounded-lg p-4"
                >
                    <option value="">Squadra</option>
                    <option value="Raimon">Raimon</option>
                    <option value="Raimon Japan">Raimon Japan</option>
                    <option value="Royal Academy">Royal Academy</option>
                    <option value="Zeus">Zeus</option>
                    <option value="Alius Academy">Alius Academy</option>
                </select>

                <select value={rarity} onChange={(e) => setRarity(e.target.value)} className="bg-slate-900 border border-slate-700 rounded-lg p-4">
                    <option value="">Rarità</option>
                    <option value="1">★</option>
                    <option value="2">★★</option>
                    <option value="3">★★★</option>
                    <option value="4">★★★★</option>
                    <option value="5">★★★★★</option>
                </select>

                <select value={tier} onChange={(e) => setTier(e.target.value)} className="bg-slate-900 border border-slate-700 rounded-lg p-4">
                    <option value="">Tier List</option>
                    <option value="SS">SS</option>
                    <option value="S">S</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="B">C</option>
                    <option value="B">D</option>
                    <option value="B">E</option>
                </select>

                <button
                    onClick={() => {
                        setSearch("");
                        setElement("");
                        setRole("");
                        setTeam("");
                        setRarity("");
                        setTier("");
                    }}
                    className="bg-orange-500 hover:bg-orange-600 px-6 rounded-lg font-bold"
                >
                    Reset
                </button>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
                {filteredPlayers.map((player) => (
                    <Link
                        href={`/players/${player.slug}`}
                        key={player.id}
                        className="bg-slate-900 border border-slate-700 rounded overflow-hidden hover:border-orange-400 transition"
                    >
                        <div className="aspect-square bg-slate-800">
                            {player.image_url ? (
                                <img src={player.image_url} alt={player.name} className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-slate-500">
                                    Nessuna immagine
                                </div>
                            )}
                        </div>

                        <div className="p-3">
                            <h3 className="text-xl font-black text-white">{player.name}</h3>

                            <div className="flex items-center justify-between mt-2">
                                <div className="flex items-center gap-2">
                                    <span
                                        className="font-bold"
                                        style={{ color: roleColor(player.role) }}
                                    >
                                        {roleCode(player.role)}
                                    </span>

                                    <span>•</span>

                                    <img
                                        src={elementIcon(player.element)}
                                        alt={player.element}
                                        className="w-4 h-4"
                                    />

                                    <span>{player.element}</span>
                                </div>

                                <img
                                    src={teamLogo(player.team)}
                                    alt={player.team}
                                    className="w-8 h-8 object-contain"
                                />
                            </div>

                            {/* <div className="mt-3">
                                <img
                                    src={teamLogo(player.team)}
                                    alt={player.team}
                                    className="w-4 h-4 object-contain"
                                />
                            </div> */}

                            <div className="flex items-center justify-between mt-3">
                                <span className="text-yellow-400 text-sm">
                                    {"★".repeat(player.rarity ?? 5)}
                                </span>

                                <span className="text-3xl font-black text-orange-400">
                                    {player.tier}
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}

function roleCode(role: string) {
    if (role === "FW") return "FW";
    if (role === "MF") return "MF";
    if (role === "DF") return "DF";
    if (role === "GK") return "GK";
    return role;
}

function elementIcon(element: string) {
    switch (element?.toLowerCase()) {
        case "fuoco":
            return "/elements/fire.png";

        case "bosco":
            return "/elements/forest.png";

        case "montagna":
            return "/elements/mountain.png";

        case "vento":
            return "/elements/wind.png";

        default:
            return "/elements/fire.png";
    }
}


function roleColor(role: string) {
    if (role === "GK") return "#ffffff"; // GK bianco

    if (role === "FW") return "#ef4444"; // FW rosso

    if (role === "DF") return "#3b82f6"; // DF blu

    if (role === "MF") return "#f97316"; // MF arancio

    return "#ffffff";
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

        default:
            return "";
    }
}