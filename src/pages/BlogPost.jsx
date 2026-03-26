import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const posts = [
  {
    slug: "legacy-naiks",
    date: "March 2026",
    title: "The Legacy Lives On: A Warm Welcome from Our Cosy Restaurant to Yours!",
    image: "/thumbnail.png",
    images: ["/blog1.png", "/blog2.png", "/blog3.png"],

    content: `Namaskar! We are Rajesh and Darshana Naik, and we are so excited to welcome you to Naik’s.
If you’ve lived in Mumbai or visited the lanes of Girgaon, you likely remember the name Anant Ashram. For decades, it was the gold standard for Goan and Gomantak seafood. When it closed in 2007, it left a void in the hearts (and stomachs) of many. As long-time family friends of the original owners, we felt a calling to bring those legendary flavors back to life.
Recently, we had the absolute honor of hosting the wonderful Kunal Vijayakar from Khaane Mein Kya Hai. It was a day filled with nostalgia, laughter, and, of course, plenty of "Gharguti" (home-style) cooking.
Bringing Back the Magic with Chef Vijay Mogarkar.  We didn't just want to recreate the menu; we wanted to recreate the soul of the food. That’s why we are so proud to have Chef Vijay in our restaurant. Vijay was the backbone of Anant Ashram for over 40 years, and today, he brings that same expertise and "Zinda Dil" (lively spirit) to every dish we serve at Naik’s.
What Makes Our Food Different?
At Naik’s, we believe in Gharguti style. This means:
* Hand-Ground Masalas: We prepare all our spice blends right here in our kitchen, just like we would at home.
* Traditional Recipes: Our dishes are rooted in the authentic Gomantak and Goan traditions we grew up with.
* Freshness First: From the daily catch to the hand-picked kokum, quality is our top priority.
Kunal’s Favorites (And Soon to Be Yours!)
Watching Kunal dive into our spread was a joy. Here are a few highlights from his visit that you simply must try when you visit us:
* Jawada (Dried Shrimp): Kunal loved the "salty crunch of the sea" in this traditional dry fish dish.
* Kombdi Wade: Our country chicken curry, served with our signature spicy, fluffy wades. It’s a Malvani classic for a reason!
* Sukke Kalva (Oysters): Sautéed with fresh coconut and kokum, this dish offers a delicate balance of flavors that Kunal described as "delicious and crunchy".
* Our Signature Solkadhi: No meal at Naik’s is complete without a glass of our Solkadhi the perfect refreshing finish to a spicy feast.
Join Us in Girgaon
We’ve worked hard to make NAIK’s feel like an extension of our own home. Whether you are coming to relive old memories of Anant Ashram or to create new ones with us, we can’t wait to serve you a plate full of love and heritage.
As Kunal says, this is "heritage flavors" at their best. Come visit us in Nikadwari Lane and taste the Naik Thali for yourself!
Eat well, stay happy, and we’ll see you soon!
— Rajesh & Darshana Naik
Watch the full feature of our restaurant here:

Video link: https://www.youtube.com/watch?v=9n2sXo7l8j8`
  }
];

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <Navbar />
        <div style={{ padding: "100px" }}>
          <h1>Post not found</h1>
          <Link to="/blog">← Back to Blog</Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section
        style={{
          display: "flex",
          gap: "60px",
          padding: "100px 10%",
          background: "#faf7f2",
          flexWrap: "wrap",
          alignItems: "flex-start",
        }}
      >
        {/* LEFT TEXT */}
        <div style={{ flex: "1 1 500px" }}>
          <h1
            style={{
              fontSize: "42px",
              marginBottom: "10px",
              color: "#0f172a",
            }}
          >
            {post.title}
          </h1>

          <p style={{ color: "#999", marginBottom: "30px" }}>
            {post.date}
          </p>

          <div
            style={{
              fontSize: "18px",
              lineHeight: "1.9",
              color: "#444",
              whiteSpace: "pre-line",
            }}
          >
            {post.content}
          </div>

          <div style={{ marginTop: "40px" }}>
            <Link
              to="/blog"
              style={{
                color: "#c89b63",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              ← Back to Blog
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div style={{ flex: "1 1 400px" }}>
          {/* MAIN IMAGE */}
          <img
            src={post.image}
            alt="Main"
            style={{
              width: "100%",
              borderRadius: "16px",
              marginBottom: "20px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
          />

          {/* STACKED IMAGES */}
          {post.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="extra"
              style={{
                width: "100%",
                borderRadius: "16px",
                marginBottom: "20px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
}