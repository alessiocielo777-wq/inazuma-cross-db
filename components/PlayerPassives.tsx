"use client";

import { useState } from "react";

export default function PlayerPassives({ player }: { player: any }) {
  const [open, setOpen] = useState<string | null>(null);

  const passives = [
    {
      key: "passiva_1",
      name: player.passiva_1,
      levels: [
        { title: "Giocatore Avanzato", description: player.giocatore_avanzato_1 },
        { title: "Giocatore Top", description: player.giocatore_top_1 },
        { title: "Giocatore Leggendario", description: player.giocatore_leggendario_1 },
      ],
    },
    {
      key: "passiva_2",
      name: player.passiva_2,
      levels: [
        { title: "Giocatore Avanzato", description: player.giocatore_avanzato_2 },
        { title: "Giocatore Top", description: player.giocatore_top_2 },
        { title: "Giocatore Leggendario", description: player.giocatore_leggendario_2 },
      ],
    },
  ];

  return (
    <div className="bg-slate-900 border border-slate-500/80 rounded-3xl p-6">
      <h2 className="text-2xl font-black text-white text-center mb-6">
        Passive Uniche
      </h2>

      <div className="space-y-4">
        {passives.map((passive) => (
          <div key={passive.key}>
            <button
              onClick={() => setOpen(open === passive.key ? null : passive.key)}
              className="w-full bg-slate-900 border-2 border-orange-500 rounded-xl p-4 flex items-center gap-3 hover:bg-slate-800 transition"
            >
              <div className="bg-orange-500 text-white rounded-lg w-10 h-10 flex items-center justify-center font-black">
                P
              </div>

              <span className="font-black text-lg text-white">
                {passive.name || "Nessuna passive"}
              </span>
            </button>

            {open === passive.key && (
              <div className="mt-3 bg-slate-950 border border-orange-500 rounded-xl overflow-hidden">
                {passive.levels.map((level, index) => (
                  <div
                    key={level.title}
                    className={`p-4 ${
                      index !== passive.levels.length - 1
                        ? "border-b border-slate-700"
                        : ""
                    }`}
                  >
                    <p className="text-orange-400 font-black">
                      {level.title}
                    </p>

                    <p className="text-white mt-1">
                      {level.description || "Descrizione non disponibile."}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}