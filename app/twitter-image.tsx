import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function TwitterImage() {
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
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ fontSize: "22px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#536b4f" }}>
            Browser puzzle guide
          </div>
          <div style={{ fontSize: "84px", lineHeight: 0.94 }}>Zen Jigsaw Master</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "860px" }}>
          <div style={{ fontSize: "34px", lineHeight: 1.3, color: "#665a4c" }}>
            Play online with a calmer landing page, fullscreen help, mobile tips, and no-download access.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
