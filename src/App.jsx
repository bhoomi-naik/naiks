import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import BlogPost from "./pages/BlogPost";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* 👇 THIS IS VERY IMPORTANT */}
      <Route path="/blog" element={<BlogPage />} />

      {/* 👇 THIS SHOULD BE BELOW */}
      <Route path="/blog/:slug" element={<BlogPost />} />

      <Route path="*" element={<Home />} />
    </Routes>
  );
}