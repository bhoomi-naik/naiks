import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* Menu Section */}
<section
  id="menu"
  style={{
    padding: "100px clamp(16px, 6vw, 80px)",
    backgroundColor: "#fff",
     scrollMarginTop: "90px", 
  }}
>
  <h2
    style={{
      fontSize: "36px",
      marginBottom: "40px",
      textAlign: "center",
    }}
  >
    Our Menu
  </h2>

  <div
    style={{
      display: "flex",
      gap: "40px",
      alignItems: "flex-start",
      flexWrap: "wrap",
      justifyContent: "center",
    }}
  >
    {/* English Menu */}
    <div style={{ flex: "1 1 400px", maxWidth: "600px" }}>
      <h3 style={{ textAlign: "center", marginBottom: "16px" }}>
        Menu (English)
      </h3>
      <img
        src="/menu-en.jpg"
        alt="Naik's Kitchen Menu English"
        style={{
          width: "100%",
          borderRadius: "8px",
        }}
      />
    </div>

    {/* Marathi Menu */}
    <div style={{ flex: "1 1 400px", maxWidth: "600px" }}>
      <h3 style={{ textAlign: "center", marginBottom: "16px" }}>
        मेनू (मराठी)
      </h3>
      <img
        src="/menu-mr.jpg"
        alt="Naik's Kitchen Menu Marathi"
        style={{
          width: "100%",
          borderRadius: "8px",
        }}
      />
    </div>
  </div>
</section>

    </>
  );
}
