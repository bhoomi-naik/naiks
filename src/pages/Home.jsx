import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import logo from "../assets/logo.png";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Home() {

  const footerLink = {
    color: "var(--yellow)",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "500",
    transition: "opacity 0.3s ease",
  };

  const reelWrapper = {
    backgroundColor: "white",
    borderRadius: "24px",
    padding: "20px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
  };

  const reelFrame = {
    width: "100%",
    height: "480px",
    borderRadius: "20px",
    border: "none",
  };

  return (
    <>
      {/* ================= LOGO SECTION ================= */}
      <section
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "var(--cream)",
          textAlign: "center",
        }}
      >
        <img
          src={logo}
          alt="Naik's Kitchen Logo"
          style={{
            width: "min(80vw, 80vh)",
            maxWidth: "600px",
            height: "auto",
            opacity: 0,
            animation: "logoFade 2s ease forwards",
          }}
        />
      </section>

      <Navbar />
      <Hero />

      {/* ================= PRESS / ABOUT ================= */}
      <section
        id="about"
        style={{
          padding: "120px clamp(20px, 6vw, 100px)",
          backgroundColor: "var(--cream)",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            textAlign: "center",
            marginBottom: "60px",
            color: "var(--navy)",
          }}
        >
          Featured In Mid-Day
        </h2>

        <div
          style={{
            display: "flex",
            gap: "60px",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ flex: "1 1 400px", maxWidth: "500px" }}>
            <a
              href="https://www.mid-day.com/mumbai-guide/mumbai-food/article/net-gains-in-khotachiwadi-23330833"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/article.png"
                alt="Naik's featured in Mid-Day"
                style={{
                  width: "100%",
                  borderRadius: "16px",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
              />
            </a>
          </div>

          <div style={{ flex: "1 1 500px", maxWidth: "600px" }}>
            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.8",
                color: "#333",
                marginBottom: "30px",
              }}
            >
              Naiks was recently featured in <strong>Mid-Day</strong>,
              highlighting how Rajesh and Darshana Naik bring the legacy of the
              Anantashram menu to their intimate kitchen in Girgaon at the
              entrance of Khotachiwadi.
            </p>

            <a
              href="https://www.mid-day.com/mumbai-guide/mumbai-food/article/net-gains-in-khotachiwadi-23330833"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "14px 36px",
                backgroundColor: "var(--navy)",
                color: "white",
                borderRadius: "6px",
                textDecoration: "none",
                fontWeight: "600",
                display: "inline-block",
              }}
            >
              Read Full Article →
            </a>
          </div>
        </div>
      </section>

      {/* ================= MENU SECTION ================= */}
      <section
        id="menu"
        style={{
          padding: "120px clamp(16px, 6vw, 100px)",
          backgroundColor: "var(--cream)",
          scrollMarginTop: "90px",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            marginBottom: "60px",
            textAlign: "center",
            color: "var(--navy)",
          }}
        >
          Our Menu
        </h2>

        <div
          style={{
            display: "flex",
            gap: "60px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div style={{ flex: "1 1 400px", maxWidth: "650px" }}>
            <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
              Menu (English)
            </h3>
            <img
              src="/menu-en.jpg"
              alt="Naik's Kitchen Menu English"
              style={{
                width: "100%",
                borderRadius: "12px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
              }}
            />
          </div>

          <div style={{ flex: "1 1 400px", maxWidth: "650px" }}>
            <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
              मेनू (मराठी)
            </h3>
            <img
              src="/menu-mr.jpg"
              alt="Naik's Kitchen Menu Marathi"
              style={{
                width: "100%",
                borderRadius: "12px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
              }}
            />
          </div>
        </div>
      </section>

      {/* ================= INSTAGRAM SECTION ================= */}
      <section
        style={{
          padding: "120px clamp(20px, 6vw, 100px)",
          backgroundColor: "#f6f3ee",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "42px",
            marginBottom: "80px",
            color: "var(--navy)",
          }}
        >
          From Our Instagram
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "60px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <div style={reelWrapper}>
            <iframe
              src="https://www.instagram.com/reel/DT7KrLSCOcJ/embed"
              style={reelFrame}
              scrolling="no"
              allowTransparency="true"
            />
          </div>

          <div style={reelWrapper}>
            <iframe
              src="https://www.instagram.com/reel/DSNQo6UEquX/embed"
              style={reelFrame}
              scrolling="no"
              allowTransparency="true"
            />
          </div>

          <div style={reelWrapper}>
            <iframe
              src="https://www.instagram.com/reel/DVQtrJdiInZ/embed"
              style={reelFrame}
              scrolling="no"
              allowTransparency="true"
            />
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer
        style={{
          backgroundColor: "#081426",
          color: "white",
          padding: "40px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div style={{ fontSize: "14px", opacity: 0.8 }}>
            © {new Date().getFullYear()} Naik’s. All Rights Reserved.
            <br />
            Designed with passion in Girgaon,Mumbai.
          </div>

          <div style={{ display: "flex", gap: "20px" }}>
            <a href="https://wa.me/919221179999" target="_blank" rel="noopener noreferrer" style={footerLink}>
              WhatsApp
            </a>
            <a href="https://www.instagram.com/naiks.in/" target="_blank" rel="noopener noreferrer" style={footerLink}>
              Instagram
            </a>
            <a href="https://www.facebook.com/NaiksGirgaon" target="_blank" rel="noopener noreferrer" style={footerLink}>
              Facebook
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}