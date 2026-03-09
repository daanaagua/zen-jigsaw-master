import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          background:
            "linear-gradient(160deg, #fbf7f1 0%, #efe5d2 48%, #e8dbc6 100%)",
          color: "#2b251e",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
            }}
          >
            <div
              style={{
                width: "68px",
                height: "68px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "999px",
                color: "#fff9f1",
                background: "linear-gradient(145deg, #536b4f, #c48366)",
                fontSize: "28px",
              }}
            >
              ZM
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "22px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#536b4f" }}>
                Calm browser puzzle
              </span>
              <span style={{ fontSize: "32px" }}>Zen Jigsaw Master Online</span>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "840px" }}>
          <div style={{ fontSize: "86px", lineHeight: 0.92 }}>Play Zen Jigsaw Master online</div>
          <div style={{ fontSize: "30px", lineHeight: 1.4, color: "#665a4c" }}>
            Fullscreen help, mobile tips, no-download access, and a softer landing page built to match the game.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
