import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #4f694d 0%, #c68769 100%)",
          borderRadius: 36,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: 132,
            height: 132,
            borderRadius: 34,
            background: "linear-gradient(180deg, #fbf5ea 0%, #f0e1cd 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 16px 44px rgba(43, 37, 30, 0.16)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              width: 88,
              height: 88,
              borderRadius: 999,
              border: "8px solid rgba(255, 248, 238, 0.9)",
              borderRightColor: "transparent",
              transform: "rotate(-16deg)",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 18,
                borderRadius: 999,
                border: "10px solid #4e644b",
                borderLeftColor: "transparent",
                borderBottomColor: "transparent",
                transform: "rotate(28deg)",
              }}
            />
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            top: 32,
            right: 30,
            width: 28,
            height: 28,
            borderRadius: 8,
            background: "#c68769",
            transform: "rotate(14deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 41,
            right: 39,
            width: 8,
            height: 8,
            borderRadius: 999,
            background: "#fff8ee",
          }}
        />
      </div>
    ),
    size,
  );
}
