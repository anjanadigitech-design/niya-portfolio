import "./App.css";

function App() {
  return (
    <div>

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Niya.</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      {/* Home */}
      <section id="home" className="home">

        <div className="home-content">

          <p className="hello">Hello, I'm</p>

          <h1>Niya Fathima</h1>

          <h2>Digital Marketer & Graphic Designer</h2>

          <p>
            I help brands build a strong digital presence through creative
            designs, social media marketing and engaging digital strategies.
          </p>

          <div className="buttons">

            <a href="#projects" className="btn">
              View My Work
            </a>

            <a href="#contact" className="btn outline">
              Contact Me
            </a>

          </div>

        </div>


        <div className="profile">
          <div className="profile-circle">
            <img src="/assets/niya.jpg" alt="Niya Fathima" />
          </div>
        </div>

      </section>


      {/* About */}
      <section id="about" className="section">

        <h2 className="section-title">About Me</h2>

        <p className="about-text">

          I am Niya Fathima, a passionate Digital Marketer and Graphic
          Designer who enjoys combining creativity with digital marketing
          strategies. I create visually engaging designs and help businesses
          improve their online presence through social media and digital
          marketing.

        </p>

      </section>


      {/* Skills */}
      <section id="skills" className="section">

        <h2 className="section-title">My Skills</h2>

        <div className="skills-container">

          <div className="skill">Digital Marketing</div>

          <div className="skill">Social Media Marketing</div>

          <div className="skill">Graphic Designing</div>

          <div className="skill">Canva</div>

          <div className="skill">Adobe Photoshop</div>

          <div className="skill">Adobe Illustrator</div>

          <div className="skill">Content Creation</div>

          <div className="skill">Branding</div>

          <div className="skill">Instagram Marketing</div>

          <div className="skill">SEO</div>

        </div>

      </section>


      {/* Services */}
      <section id="services" className="section">

        <h2 className="section-title">My Services</h2>

        <div className="services-container">

          <div className="service-card">

            <div className="service-icon">📱</div>

            <h3>Social Media Marketing</h3>

            <p>
              Social media strategy, content planning and audience engagement
              to help brands grow online.
            </p>

          </div>


          <div className="service-card">

            <div className="service-icon">🎨</div>

            <h3>Graphic Design</h3>

            <p>
              Creative social media posts, posters, banners and promotional
              designs for brands and businesses.
            </p>

          </div>


          <div className="service-card">

            <div className="service-icon">📢</div>

            <h3>Digital Marketing</h3>

            <p>
              Digital marketing strategies designed to increase visibility,
              engagement and brand awareness.
            </p>

          </div>


          <div className="service-card">

            <div className="service-icon">✨</div>

            <h3>Branding</h3>

            <p>
              Creative branding solutions including visual identity,
              promotional materials and brand designs.
            </p>

          </div>

        </div>

      </section>


      {/* Projects */}
      <section id="projects" className="section">

        <h2 className="section-title">My Projects</h2>

        <div className="projects-container">


          <div className="project-card">

            <div className="project-image">
              📱
            </div>

            <h3>Social Media Campaign</h3>

            <p>
              Created social media content and marketing campaigns to improve
              brand awareness and audience engagement.
            </p>

            <span>Marketing</span>
            <span>Instagram</span>

          </div>


          <div className="project-card">

            <div className="project-image">
              🎨
            </div>

            <h3>Brand Identity Design</h3>

            <p>
              Designed creative brand visuals including promotional posts,
              banners and social media creatives.
            </p>

            <span>Branding</span>
            <span>Graphic Design</span>

          </div>


          <div className="project-card">

            <div className="project-image">
              📣
            </div>

            <h3>Digital Marketing Campaign</h3>

            <p>
              Planned and designed digital campaigns focused on improving
              online visibility and customer engagement.
            </p>

            <span>Digital Marketing</span>
            <span>Content</span>

          </div>


          <div className="project-card">

            <div className="project-image">
              🖌️
            </div>

            <h3>Creative Social Posts</h3>

            <p>
              Created visually appealing social media posts and promotional
              creatives for different business categories.
            </p>

            <span>Canva</span>
            <span>Design</span>

          </div>

        </div>

      </section>


      {/* Contact */}
      <section id="contact" className="section contact">

        <h2 className="section-title">Let's Work Together</h2>

        <p>
          Have a project or brand that needs creative digital marketing?
          Let's connect.
        </p>

        <div className="contact-links">

          <a href="mailto:niya@gmail.com">
            📧 Email
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            📸 Instagram
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            💼 LinkedIn
          </a>

        </div>

      </section>


      {/* Footer */}
      <footer>

        <p>
          © 2026 Niya Fathima. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;