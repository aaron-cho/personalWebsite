import Head from "next/head";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aaron Cho</title>
        <meta
          name="description"
          content="Welcome to my personal portfolio website."
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </Head>
      <header>
        <h1>Aaron Cho</h1>
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <a
          href="https://github.com/aaron-cho"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginLeft: "10px" }}
        >
          <i className="fab fa-github" style={{ fontSize: "24px" }}></i>
        </a>
        <a
          href="https://www.linkedin.com/in/aaroncho626/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginLeft: "10px" }}
        >
          <i className="fab fa-linkedin" style={{ fontSize: "24px" }}></i>
        </a>
      </header>
      <main style={{ padding: "0 20px" }}>
        <section id="about">
          <h2 style={{ marginTop: 0 }}>About Me</h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              marginTop: "10px",
            }}
          >
            <img
              src="/profile.jpg"
              alt="A brief description of the image"
              style={{
                width: "20%",
                maxWidth: "250px",
                borderRadius: "10px",
              }}
            />
            <p
              className="about-me"
              style={{
                fontSize: 18,
                width: "35%",
                maxWidth: "400px",
                lineHeight: 1.6,
                marginLeft: "20px",
              }}
            >
              Hey there 👋 I’m Aaron, a senior at Stanford University finishing
              up a B.S. in Symbolic Systems and an M.S. in Computer Science,
              both with a concentration in Human-Computer Interaction 👨‍💻 As a
              passionate and skilled full-stack developer, I specialize in
              creating seamless digital experiences through user-centered mobile
              applications, RESTful APIs, and web applications 🤓 In my free
              time, I love playing soccer and listening to classical music ⚽️🎻
              Thanks for stopping by!
            </p>
            <iframe
              src="https://drive.google.com/file/d/1vhPsJVZ4k1Aim0iZVvka9iQ3kJdAGcob/preview"
              width="40%"
              height="350"
              style={{
                border: "none",
                borderRadius: "8px",
                marginLeft: "20px",
              }}
            ></iframe>
          </div>
        </section>
        <section id="projects">
          <h2 style={{ marginTop: 0 }}>My Projects</h2>
          <div
            style={{
              display: "flex",
              // justifyContent: "space-between",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <div style={{ marginRight: "20px", flex: "1" }}>
              <h3 style={{ textDecoration: "underline" }}>DiarWe</h3>
              <p style={{ width: "90%" }}>
                Bridging generations through interactive journaling. Built with
                React Native and Supabase.
              </p>
              <iframe
                width="90%"
                height="315"
                src="https://youtube.com/embed/qro8K1gLR4g"
                allowFullScreen
                style={{ marginTop: "10px", borderRadius: "8px" }}
              ></iframe>
            </div>

            <div style={{ flex: "1" }}>
              <h3 style={{ textDecoration: "underline" }}>MealBuds</h3>
              <p style={{ width: "90%" }}>
                Meeting new Stanford students via meal-matching. Built with
                React Native and Firebase.
              </p>
              <iframe
                width="90%"
                height="315"
                src="https://www.youtube.com/embed/49_wBIw5pD0"
                allowFullScreen
                style={{ marginTop: "10px", borderRadius: "8px" }}
              ></iframe>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ marginRight: "20px", flex: "1" }}>
              <h3 style={{ textDecoration: "underline" }}>
                Job Application Page
              </h3>
              <p style={{ width: "90%" }}>
                With Greenhouse API integration. Built with Typescript and
                Next.js.
              </p>
              <div style={{ position: "relative" }}>
                <iframe
                  width="90%"
                  height="315"
                  src="https://greenhouse-integration-dtrx.vercel.app/apply"
                  allowFullScreen
                  style={{ marginTop: "10px", borderRadius: "8px" }}
                ></iframe>
                <a
                  href="https://greenhouse-integration-dtrx.vercel.app/apply"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 1,
                    display: "block",
                  }}
                ></a>
              </div>
            </div>

            <div style={{ flex: "1" }}>
              <h3 style={{ textDecoration: "underline" }}>
                Bay Area Restaurants Interactive Map
              </h3>
              <p style={{ width: "90%" }}>
                Data from Yelp API. Built with Javascript D3.
              </p>
              <div style={{ position: "relative" }}>
                <iframe
                  width="90%"
                  height="315"
                  src="https://observablehq.com/embed/0d37af62a52289cd"
                  allowFullScreen
                  style={{ marginTop: "10px", borderRadius: "8px" }}
                ></iframe>
                <a
                  href="https://observablehq.com/d/0d37af62a52289cd"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 1,
                    display: "block",
                  }}
                ></a>
              </div>
            </div>
          </div>
        </section>
        <section id="contact">
          <h2 style={{ marginTop: 0 }}>Contact Info</h2>
          <p>
            <strong>Email:</strong> aaron626@stanford.edu
          </p>
          <p>
            <strong>Phone Number:</strong> (626) 464-8098
          </p>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Aaron Cho. All rights reserved.</p>
      </footer>
    </div>
  );
}
