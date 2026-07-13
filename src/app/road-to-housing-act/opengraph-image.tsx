import { ImageResponse } from "next/og";

export const alt = "21st Century ROAD to Housing Act Florida investor and developer guide from Seacoast";
export const size = { width: 1200, height: 630 };
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
          padding: "64px 72px",
          color: "#ffffff",
          background:
            "linear-gradient(135deg, #0E2150 0%, #1E3A7A 64%, #24407F 100%)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 16,
              height: 54,
              display: "flex",
              borderRadius: 8,
              background: "#E15A2B",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: 1.5,
            }}
          >
            SEACOAST BUILDING &amp; DESIGN
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              color: "#FF9468",
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            H.R. 6644 · Florida Guide
          </div>
          <div
            style={{
              display: "flex",
              maxWidth: 1020,
              fontSize: 60,
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: -1.5,
            }}
          >
            The 21st Century ROAD to Housing Act
          </div>
          <div
            style={{
              display: "flex",
              maxWidth: 1000,
              color: "rgba(255,255,255,.78)",
              fontSize: 27,
              lineHeight: 1.35,
            }}
          >
            What housing investors and developers should know about construction opportunities in Southwest Florida
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "rgba(255,255,255,.68)",
            fontSize: 22,
          }}
        >
          <div style={{ display: "flex" }}>Enacted July 11, 2026</div>
          <div style={{ display: "flex", color: "#FF9468", fontWeight: 700 }}>
            seacoastbd.com
          </div>
        </div>
      </div>
    ),
    size,
  );
}
