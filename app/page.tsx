import { supabase } from "@/lib/supabase";
//import PlayerGrid from "@/components/PlayerGrid";

export default async function Home() {
  const { data: players } = await supabase
    .from("players")
    .select("*")
    .order("id");

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="home-nav">
        <div className="home-nav-inner">
          <a href="/">
            <img
              src="/logo.png"
              alt="Inazuma Cross"
              style={{
                width: "260px",
                position: "absolute",
                left: "10px",
                top: "5px",
                zIndex: 50,
              }}
            />
          </a>

          <div className="home-menu">
            <a className="active">🏠 Home</a>
            <a href="/players">👤 Personaggi</a>
            <a>📜 Missioni</a>
            <a>⚽ Tecniche</a>
            <a>👥 Squadre</a>
            <a>🏆 Tier List</a>
            <a>📖 Guide</a>

            <div className="nav-search">
              <input placeholder="Cerca..." />
            </div>
          </div>
        </div>
      </nav>

      <section className="home-full">
        <div className="hero-full">
          <div className="hero-text">
            <p className="text-xl font-bold text-slate-300">
              BENVENUTO NEL
            </p>

            <h2 className="text-5xl font-black leading-tight mt-4">
              DATABASE
              <br />
              <span className="text-orange-400">
                DI INAZUMA ELEVEN CROSS!
              </span>
            </h2>

            <p className="text-slate-300 mt-6 max-w-sm text-lg">
              Il database italiano per personaggi, statistiche, tecniche,
              squadre, missioni, tier liste e molto altro ancora.
            </p>

            <div className="mt-8 flex max-w-md">
              <input
                className="flex-1 rounded-l-xl bg-slate-900/90 border border-slate-700 p-4"
                placeholder="Cerca un personaggio, missione, tecnica..."
              />
              <button className="rounded-r-xl bg-orange-500 px-6 font-bold">
                Cerca
              </button>
            </div>
          </div>

          <aside className="hero-panels">
            <Panel title="Ultimi aggiornamenti">
              <Update text="Nuovo personaggio aggiunto" />
              <Update text="Statistiche LV1 / LV300" />
              <Update text="Pagina personaggio aggiornata" />
            </Panel>

            <Panel title="Guide in evidenza">
              <Update text="Come salire di livello velocemente" />
              <Update text="Migliori ruoli e posizioni" />
              <Update text="Migliori formazioni PvE e PvP" />
            </Panel>
          </aside>
        </div>

        <div className="stat-grid">
          <StatCard icon="👥" title="Personaggi" value={players?.length ?? 0} color="#0ea5e9" />
          <StatCard icon="🗺️" title="Missioni" value="0" color="#22c55e" />
          <StatCard icon="🔥" title="Tecniche" value="0" color="#7c3aed" />
          <StatCard icon="⚽" title="Squadre" value="0" color="#f97316" />
        </div>
      </section>

      {/* <section className="max-w-7xl mx-auto p-8">
        <h2 className="text-4xl font-black mb-6">Personaggi</h2>
        <PlayerGrid players={players ?? []} />
      </section> */}
    </main>
  );
}

function StatCard({
  icon,
  title,
  value,
  color,
}: {
  icon: string;
  title: string;
  value: any;
  color: string;
}) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-5 hover:border-orange-500 transition-all">
      <div className="flex items-center gap-4">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center text-2xl"
          style={{ background: color }}
        >
          {icon}
        </div>

        <div>
          <p className="text-sm font-black text-slate-300 uppercase">
            {title}
          </p>

          <p className="text-3xl font-black text-white">
            {value}
          </p>

          <p className="text-sm text-slate-400">
            visualizza tutti
          </p>
        </div>
      </div>
    </div>
  );
}

function Panel({ title, children }: any) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900/90 p-4 backdrop-blur">
      <h3 className="font-black text-orange-400 mb-3 uppercase text-lg">{title}</h3>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function Update({ text }: { text: string }) {
  return (
    <div className="border-b border-slate-800 pb-2 text-xs text-slate-300">
      {text}
    </div>
  );
}