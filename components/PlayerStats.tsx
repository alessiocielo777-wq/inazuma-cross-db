export default function PlayerStats({ player }: any) {
  const stats = [
    ["tp", "TP", player.tp_lv1, player.tp_lv300],
    ["kick", "Kick", player.kick_lv1, player.kick_lv300],
    ["control", "Control", player.control_lv1, player.control_lv300],
    ["block", "Block", player.block_lv1, player.block_lv300],
    ["guard", "Guard", player.guard_lv1, player.guard_lv300],
    ["stamina", "Stamina", player.stamina_lv1, player.stamina_lv300],
  ];

  return (
    <div
      style={{
        width: "320px",
        padding: "14px",
        borderRadius: "18px",
        border: "2px solid #475569",
        background: "#0f172a",
        color: "white",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "22px",
          fontWeight: 900,
          marginBottom: "10px",
        }}
      >
        Statistiche
      </h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "separate",
          borderSpacing: "0 3px",
        }}
      >
        <thead>
          <tr>
            <th></th>
            <th></th>

            <th style={{ textAlign: "center" }}>
              <span
                style={{
                  border: "2px solid #f97316",
                  padding: "2px 8px",
                  borderRadius: "8px",
                  color: "#fb923c",
                  fontSize: "11px",
                  fontWeight: 700,
                }}
              >
                LV 1
              </span>
            </th>

            <th style={{ textAlign: "center" }}>
              <span
                style={{
                  border: "2px solid #64748b",
                  padding: "2px 8px",
                  borderRadius: "8px",
                  color: "white",
                  fontSize: "11px",
                  fontWeight: 700,
                }}
              >
                LV 300
              </span>
            </th>
          </tr>
        </thead>

        <tbody>
          {stats.map(([icon, label, lv1, lv300], index) => (
            <tr
              key={String(label)}
              style={{
                background: "transparent",
            }}
            >
              <td
                style={{
                  width: "28px",
                  padding: "3px",
                }}
              >
                <img
                  src={`/icons/${icon}.png`}
                  alt={String(label)}
                  style={{
                    width: "18px",
                    height: "18px",
                  }}
                />
              </td>

              <td
                style={{
                  fontSize: "15px",
                  fontWeight: 800,
                }}
              >
                {label}
              </td>

              <td
                style={{
                  fontSize: "15px",
                  fontWeight: 800,
                  textAlign: "center",
                }}
              >
                {lv1}
              </td>

              <td
                style={{
                  fontSize: "15px",
                  fontWeight: 800,
                  textAlign: "center",
                }}
              >
                {lv300}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}