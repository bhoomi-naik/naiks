import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css"; // 👈 import CSS

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false); // hide
      } else {
        setShow(true); // show
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
      <Link to="/#about" className="nav-link">About Us</Link>
<Link to="/#menu" className="nav-link">Menu</Link>
<Link to="/#contact" className="nav-link">Contact</Link>
<Link to="/blog" className="nav-link">Blogs</Link>
    </nav>
  );
}