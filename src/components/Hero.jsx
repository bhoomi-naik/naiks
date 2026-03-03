export default function Hero() {
  return (
    <section
      style={{
        display: "flex",
        minHeight: "100vh",
        width: "100%",
        flexWrap: "wrap",
      }}
    >
      {/* LEFT – Text */}
      <div
        style={{
          flex: "1 1 500px",
          padding: "clamp(40px, 6vw, 100px)",
          backgroundColor: "#f6f3ee", // Beige
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(42px, 5vw, 72px)",
            marginBottom: "24px",
            backgroundColor: "#f6f3ee",
            letterSpacing: "3px",
            animation: "fadeUp 1.2s ease forwards",
          }}
        >
          NAIKS
        </h1>

        <p
          style={{
            fontSize: "clamp(16px, 2vw, 18px)",
            lineHeight: "1.6",
            maxWidth: "480px",
            marginBottom: "36px",
            color: "#444",
          }}
        >
          Savour the flavours of Goa at our cozy restaurant.
        </p>

        <button
          style={{
            width: "fit-content",
            padding: "14px 36px",
            fontSize: "16px",
            backgroundColor: "var(--yellow)",
            color: "var(--navy)",
            border: "none",
            borderRadius: "6px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "transform 0.2s ease",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          Explore Our Menu
        </button>
      </div>

      {/* RIGHT – Image */}
      <div
        style={{
          flex: "1 1 600px",
          minHeight: "400px",
        }}
      >
        <img
          src="/restaurant.jpeg"
          alt="Naik's Kitchen Restaurant"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </section>
  );
}