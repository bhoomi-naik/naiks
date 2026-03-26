import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const location = useLocation();
  const navigate = useNavigate();

  // 🔥 SCROLL SHOW/HIDE
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // 🔥 SMART NAVIGATION FUNCTION
  const handleNavClick = (id) => {
    if (location.pathname === "/") {
      // Already on home → scroll
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // From another page → go home + scroll
      navigate(`/#${id}`);
    }
  };

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
      {/* 👇 UPDATED LINKS */}
      <span onClick={() => handleNavClick("about")} className="nav-link">
        About Us
      </span>

      <span onClick={() => handleNavClick("menu")} className="nav-link">
        Menu
      </span>

      <span onClick={() => handleNavClick("contact")} className="nav-link">
        Contact
      </span>

      <span onClick={() => navigate("/blog")} className="nav-link">
        Blogs
      </span>
    </nav>
  );
}