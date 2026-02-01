import { useEffect, useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down → hide navbar
        setShow(false);
      } else {
        // scrolling up → show navbar
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      style={{
        padding: "20px clamp(24px, 6vw, 64px)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "var(--navy)",
        color: "white",
        position: "fixed",
        top: show ? "0" : "-90px",
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "top 0.4s ease",
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontWeight: "700",
          fontSize: "22px",
          color: "var(--yellow)",
        }}
      >
        Naiks
      </div>

      {/* Navigation Links */}
      <div style={{ display: "flex", gap: "32px", fontWeight: 500 }}>
        <a href="#menu" style={{ color: "white", textDecoration: "none" }}>
          Menu
        </a>

        <a href="#contact" style={{ color: "white", textDecoration: "none" }}>
          Contact
        </a>
      </div>
    </nav>
  );
}
