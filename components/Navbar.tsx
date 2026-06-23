export default function Navbar({
    showLogo = true,
    active = "home",
}: {
    showLogo?: boolean;
    active?: string;
}) {
    return (
        <nav className="home-nav">
            <div className="home-nav-inner">
                {showLogo && (
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
                )}

                <div className="home-menu">
                    <a href="/" className={active === "home" ? "active" : ""}>
                        🏠 Home
                    </a>

                    <a
                        href="/players"
                        className={active === "players" ? "active" : ""}
                    >
                        👤 Personaggi
                    </a>
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
    );
}

