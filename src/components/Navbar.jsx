import { useEffect, useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down → hide navbar
        setShow(false);
      } else {
        // Scrolling up → show navbar
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
        padding: "28px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "clamp(24px, 6vw, 60px)",
        position: "fixed",
        top: show ? "0" : "-100px",
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: "transparent",
        transition: "top 0.4s ease",
      }}
    >
      <a href="#about" style={linkStyle}>About Us</a>
      <a href="#menu" style={linkStyle}>Menu</a>
      <a href="#contact" style={linkStyle}>Contact</a>
    </nav>
  );
}

const linkStyle = {
  color: "var(--navy)",
  textDecoration: "none",
  fontSize: "clamp(14px, 2vw, 18px)",
  letterSpacing: "1px",
  fontWeight: 500,
};