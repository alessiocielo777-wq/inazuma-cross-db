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

                <div className="relative">
                    <button
                        onClick={() => setElement(element === "open" ? "" : "open")}
                        className="bg-slate-900 border border-slate-700 rounded-lg p-4 min-w-[180px] flex items-center justify-between"
                    >
                        <span>
                            {element && element !== "open" ? element : "Elemento"}
                        </span>
                        <span>⌄</span>
                    </button>

                    {element === "open" && (
                        <div className="absolute z-50 mt-2 w-[180px] bg-slate-900 border border-slate-700 rounded-lg overflow-hidden">
                            {[
                                ["", "Elemento", ""],
                                ["Fuoco", "Fuoco", "/elements/fire.png"],
                                ["Montagna", "Montagna", "/elements/mountain.png"],
                                ["Bosco", "Bosco", "/elements/forest.png"],
                                ["Vento", "Vento", "/elements/wind.png"],
                            ].map(([value, label, icon]) => (
                                <button
                                    key={label}
                                    onClick={() => setElement(value)}
                                    className="w-full flex items-center gap-2 px-4 py-3 hover:bg-orange-500 text-left"
                                >
                                    {icon && <img src={icon} alt={label} className="w-5 h-5" />}
                                    {label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <div className="relative">
                    <button
                        onClick={() => setRole(role === "open" ? "" : "open")}
                        className="bg-slate-900 border border-slate-700 rounded-lg p-4 min-w-[150px] flex items-center justify-between"
                    >
                        {role && role !== "open" ? (
                            <img
                                src={`/roles/${role.toLowerCase()}.png`}
                                alt={role}
                                className="h-5 object-contain"
                            />
                        ) : (
                            <span>Ruolo</span>
                        )}

                        <span>⌄</span>
                    </button>

                    {role === "open" && (
                        <div className="absolute z-50 mt-2 w-[150px] bg-slate-900 border border-slate-700 rounded-lg overflow-hidden">
                            {[
                                ["", "Ruolo", ""],
                                ["FW", "FW", "/roles/fw.png"],
                                ["MF", "MF", "/roles/mf.png"],
                                ["DF", "DF", "/roles/df.png"],
                                ["GK", "GK", "/roles/gk.png"],
                            ].map(([value, label, icon]) => (
                                <button
                                    key={label}
                                    onClick={() => setRole(value)}
                                    className="w-full flex items-center justify-center px-4 py-3 hover:bg-orange-500"
                                >
                                    {icon ? (
                                        <img
                                            src={icon}
                                            alt={label}
                                            className="h-5 object-contain"
                                        />
                                    ) : (
                                        <span>Ruolo</span>
                                    )}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <div className="relative">
                    <button
                        onClick={() => setTeam(team === "open" ? "" : "open")}
                        className="bg-slate-900 border border-slate-700 rounded-lg p-4 min-w-[220px] flex items-center justify-between"
                    >
                        {team && team !== "open" ? (
                            <div className="flex items-center gap-2">
                                <img
                                    src={teamLogo(team)}
                                    alt={team}
                                    className="w-6 h-6 object-contain"
                                />
                                <span>{team}</span>
                            </div>
                        ) : (
                            <span>Squadra</span>
                        )}

                        <span>⌄</span>
                    </button>

                    {team === "open" && (
                        <div className="absolute z-50 mt-2 w-[260px] bg-slate-900 border border-slate-700 rounded-lg overflow-hidden">
                            {[
                                ["", "Squadra", ""],
                                ["Raimon", "Raimon", "/teams/raimon.png"],
                                ["Raimon Japan", "Raimon Japan", "/teams/raimon-japan.png"],
                                ["Nazionale Japan", "Nazionale Japan", "/teams/japan-national.png"],
                                ["Royal Academy", "Royal Academy", "/teams/royal-academy.png"],
                                ["Inazuma KFC", "Inazuma KFC", "/teams/inazuma-kfc.png"],
                                ["Kirkwood", "Kirkwood", "/teams/kirkwood.png"],
                                ["Brainwashing", "Brainwashing", "/teams/brainwashing.png"],
                                ["Occult", "Occult", "/teams/inazuma-kfc.png"],
                                ["Otaku", "Otaku", "/teams/otaku.png"],
                                ["Shuriken", "Shuriken", "/teams/shuriken.png"],
                                ["Wild", "Wild", "/teams/wild.png"],
                            ].map(([value, label, icon]) => (
                                <button
                                    key={label}
                                    onClick={() => setTeam(value)}
                                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-orange-500 text-left"
                                >
                                    {icon ? (
                                        <>
                                            <img
                                                src={icon}
                                                alt={label}
                                                className="w-6 h-6 object-contain flex-shrink-0"
                                            />
                                            <span className="whitespace-nowrap">
                                                {label}
                                            </span>
                                        </>
                                    ) : (
                                        <span>Squadra</span>
                                    )}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <div className="relative">
                    <button
                        onClick={() => setRarity(rarity === "open" ? "" : "open")}
                        className="bg-slate-900 border border-slate-700 rounded-lg p-4 min-w-[150px] flex items-center justify-between"
                    >
                        {rarity && rarity !== "open" ? (
                            <div className="flex items-center gap-1">
                                {Array.from({ length: Number(rarity) }).map((_, i) => (
                                    <img
                                        key={i}
                                        src="/icons/star.png"
                                        alt="Star"
                                        className="w-4 h-4"
                                    />
                                ))}
                            </div>
                        ) : (
                            <span>Rarità</span>
                        )}

                        <span>⌄</span>
                    </button>

                    {rarity === "open" && (
                        <div className="absolute z-50 mt-2 w-[180px] bg-slate-900 border border-slate-700 rounded-lg overflow-hidden">
                            {[
                                ["1", 1],
                                ["2", 2],
                                ["3", 3],
                            ].map(([value, stars]) => (
                                <button
                                    key={String(value)}
                                    onClick={() => setRarity(String(value))}
                                    className="w-full flex items-center gap-1 px-4 py-3 hover:bg-orange-500"
                                >
                                    {Array.from({ length: Number(stars) }).map((_, i) => (
                                        <img
                                            key={i}
                                            src="/icons/star.png"
                                            alt="Star"
                                            className="w-4 h-4"
                                        />
                                    ))}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

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
                                <div className="flex gap-1">
                                    {Array.from({ length: player.rarity }).map((_, i) => (
                                        <img
                                            key={i}
                                            src="/icons/star.png"
                                            alt="Star"
                                            className="w-4 h-4"
                                        />
                                    ))}
                                </div>

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

    case "Inazuma KFC":
      return "/teams/inazuma-kfc.png";

    case "Brainwashing":
      return "/teams/brainwashing.png";

    case "Japan National":
      return "/teams/japan-national.png";

    default:
      return "/teams/raimon.png";
  }
}