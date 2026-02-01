export default function Hero() {
  return (
    <section
      style={{
        display: "flex",
        minHeight: "90vh",
        width: "100%",
        flexWrap: "wrap",
      }}
    >
      {/* LEFT – Text (smaller) */}
      <div
        style={{
          flex: "0 1 40%",
          padding: "clamp(32px, 6vw, 80px)",
          backgroundColor: "var(--cream)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1
  style={{
    fontSize: "clamp(48px, 6vw, 72px)",
    marginBottom: "20px",
    color: "var(--navy)",
    letterSpacing: "2px",
    opacity: 0,
    animation: "fadeUp 1.2s ease forwards",
  }}
>
  NAIKS
</h1>


        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.6",
            maxWidth: "420px",
            marginBottom: "32px",
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
          }}
        >
          Explore Our Menu
        </button>
      </div>

      {/* RIGHT – Image (dominant) */}
      <div
        style={{
          flex: "1 1 60%",
          minHeight: "500px",
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
