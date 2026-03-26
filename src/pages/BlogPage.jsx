import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const posts = [
  {
    slug: "legacy-naiks",
    title: "The Legacy Lives On",
    date: "March 2026",
    image: "/thumbnail.png",
  }
];

export default function BlogPage() {
  return (
    <>
      <Navbar />

      <div style={{ padding: "100px 10%", background: "#faf7f2" }}>
        <h1 style={{ fontSize: "42px", marginBottom: "50px" }}>
          Our Blogs
        </h1>

        {posts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                display: "flex",                // 👈 IMPORTANT
                alignItems: "center",
                gap: "30px",
                background: "white",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                marginBottom: "30px",
                transition: "0.3s",
                cursor: "pointer",
                flexWrap: "wrap",               // 👈 mobile responsive
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.02)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              {/* LEFT IMAGE */}
              <img
                src={post.image}
                alt={post.title}
                style={{
                  width: "300px",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "16px 0 0 16px",
                }}
              />

              {/* RIGHT TEXT */}
              <div style={{ padding: "20px", flex: "1" }}>
                <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>
                  {post.title}
                </h2>

                <p style={{ color: "#999" }}>{post.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}