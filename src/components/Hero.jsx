import nameLogo from "../assets/name.png";

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
      {/* LEFT – Brand */}
      <div
        style={{
          flex: "1 1 500px",
          padding: "clamp(60px, 8vw, 120px)",
          backgroundColor: "#f6f3ee",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <img
          src={nameLogo}
          alt="Naik's"
          style={{
            width: "420px",
            maxWidth: "100%",
            height: "auto",
            marginBottom: "50px",
          }}
        />

        <p
          style={{
            fontSize: "clamp(18px, 2vw, 20px)",
            lineHeight: "1.8",
            maxWidth: "500px",
            color: "#3d3d3d",
            fontWeight: "400",
          }}
        >
          Savour the authentic flavours of Goa in our intimate heritage kitchen.
        </p>
      </div>

      {/* RIGHT – Image */}
      <div
        style={{
          flex: "1 1 600px",
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