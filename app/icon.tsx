import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid #000000",
        }}
      >
        <span
          style={{
            color: "#FFE600",
            fontSize: 22,
            fontWeight: 900,
            fontFamily: "serif",
            lineHeight: 1,
          }}
        >
          T
        </span>
      </div>
    ),
    { ...size }
  );
}
