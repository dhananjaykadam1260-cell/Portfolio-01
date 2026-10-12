import React, { useState } from "react";

import "./App.css";



const skills = [

  { title: "Programming", items: ["Java", "Advanced Java", "JavaScript", "SQL"] },

  { title: "Frontend", items: ["React.js", "HTML5", "CSS3", "Bootstrap"] },

  { title: "Backend & Database", items: ["Spring Boot", "REST APIs", "MySQL"] },

  {

    title: "Testing",

    items: [

      "Manual Testing",

      "Functional Testing",

      "Regression Testing",

      "Smoke Testing",

      "Sanity Testing",

      "Integration Testing",

      "System Testing",

      "Test Case Design",

      "Bug Reporting",

      "SDLC",

      "STLC",

    ],

  },

  { title: "Testing Tools", items: ["Selenium WebDriver", "TestNG", "Postman", "JMeter"] },

  { title: "Microsoft & Tools", items: ["Git", "GitHub", "VS Code", "Eclipse", "MS Excel"] },

];



const projects = [

  {

    title: "Learning Management System",

    type: "Academic Project",

    description:

      "A web-based platform designed to manage courses and student enrollment with dedicated admin and student dashboards.",

    features: [

      "Secure login authentication",

      "Admin and student dashboards",

      "Course management and student enrollment",

      "REST API integration and MySQL CRUD operations",

    ],

    stack: ["Java", "Spring Boot", "React.js", "MySQL"],

    icon: "▤",

  },

  {

    title: "Airline Reservation System",

    type: "Academic Project",

    description:

      "A reservation application that supports flight discovery and ticket management through a responsive interface and RESTful backend.",

    features: [

      "Flight search and ticket booking",

      "Ticket cancellation",

      "User authentication and database integration",

      "MVC architecture and RESTful APIs",

    ],

    stack: ["Spring Boot", "React.js", "REST APIs", "MySQL"],

    icon: "✈",

    plane: true,

  },

  {
    title: "Movie Ticket Booking Website",
    type: "Academic Project",
    description:
      "A web-based application for browsing movies, checking showtimes, selecting seats, and managing movie ticket bookings.",
    features: [
      "Movie listings and showtime selection",
      "Seat selection and ticket booking",
      "User login and authentication",
      "REST API integration and MySQL database operations",
      "Booking details and ticket management",
    ],
    stack: ["Java", "Spring Boot", "React.js", "MySQL"],
    icon: "🎬",
  },
];



function SectionHeading({ eyebrow, title, text }) {

  return (

    <div className="section-heading">

      <span className="eyebrow">{eyebrow}</span>

      <h2>{title}</h2>

      {text && <p>{text}</p>}

    </div>

  );

}



function App() {

  const [menuOpen, setMenuOpen] = useState(false);



  const closeMenu = () => setMenuOpen(false);



  return (

    <div className="portfolio">

      <header className="site-header">

        <nav className="nav container" aria-label="Main navigation">

          <a className="brand" href="#home" onClick={closeMenu} aria-label="Gayatri Shitole home">

            <span className="brand-mark">G</span>

            <span>gayatri<span className="brand-dot">.</span></span>

          </a>



          <button

            className="menu-toggle"

            type="button"

            aria-label="Toggle navigation"

            aria-expanded={menuOpen}

            onClick={() => setMenuOpen((open) => !open)}

          >

            <span />

            <span />

            <span />

          </button>



          <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>

            <a href="#about" onClick={closeMenu}>About</a>

            <a href="#skills" onClick={closeMenu}>Skills</a>

            <a href="#experience" onClick={closeMenu}>Experience</a>

            <a href="#projects" onClick={closeMenu}>Projects</a>

            <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <span>↗</span></a>

          </div>

        </nav>

      </header>



      <main>

        <section className="hero container" id="home">

          <div className="hero-copy">

            <div className="availability"><span className="availability-dot" /> JAVA FULL STACK DEVELOPER</div>

            <h1>Hi, I'm <span className="gradient-text">Gayatri</span><br />Shitole<span className="accent">.</span></h1>

            <p className="hero-lead">

              I build thoughtful web experiences with clean code, reliable APIs, and a focus on solving real problems.

            </p>

            <p className="hero-sub">

              BCA graduate · Java · Spring Boot · React.js

            </p>

            <div className="hero-actions">

              <a className="button button-primary" href="#projects">Explore my work <span>↘</span></a>

              <a className="button button-secondary" href="#contact">Get in touch <span>↗</span></a>
              <a
                className="button button-secondary"
                href="https://drive.google.com/file/d/1azWxbZEAVOV-aZZa1TE6XIvJuaM-478H/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                View Resume <span>↗</span>
              </a>

            </div>

            <div className="hero-socials">

              <a href="mailto:gayatrishitole9696@gmail.com">Email <span>↗</span></a>

              <span className="social-divider">/</span>

              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>

            </div>

          </div>



          <div className="hero-art" aria-label="Developer introduction graphic">

            <div className="orbit orbit-one" />

            <div className="orbit orbit-two" />

            <div className="hero-glow" />

            <div className="code-card">

              <div className="code-card-top"><span /><span /><span /><small>developer.java</small></div>

              <div className="code-lines">

                <p><i>01</i> <b className="code-purple">public class</b> <b className="code-yellow">Developer</b> {"{"}</p>

                <p><i>02</i> &nbsp; <b className="code-purple">String</b> name = <b className="code-green">"Gayatri"</b>;</p>

                <p><i>03</i> &nbsp; <b className="code-purple">String</b> focus = <b className="code-green">"Full Stack"</b>;</p>

                <p><i>04</i> &nbsp; <b className="code-purple">boolean</b> learning = <b className="code-orange">true</b>;</p>

                <p><i>05</i> &nbsp; <b className="code-purple">void</b> build() {"{"}</p>

                <p><i>06</i> &nbsp;&nbsp; create(); <span className="cursor">|</span></p>

                <p><i>07</i> &nbsp; {"}"}</p>

                <p><i>08</i> {"}"}</p>

              </div>

              <div className="code-card-bottom"><span className="status-pulse" /> Always learning, always building</div>

            </div>

            <div className="floating-tag tag-react"><span>⚛</span> React.js</div>

            <div className="floating-tag tag-java"><span>☕</span> Java</div>

            <div className="floating-tag tag-spring"><span>✳</span> Spring Boot</div>

            <div className="hero-stamp"><span>BUILD</span><b>✳</b><span>LEARN</span></div>

          </div>

          <a className="scroll-cue" href="#about"><span className="scroll-line" /> SCROLL TO EXPLORE</a>

        </section>



        <section className="intro-strip">

          <div className="container intro-strip-inner">

            <span>CURIOUS BY NATURE</span><b>✳</b>

            <span>BUILT WITH PURPOSE</span><b>✳</b>

            <span>ALWAYS IMPROVING</span><b>✳</b>

            <span>OPEN TO OPPORTUNITIES</span>

          </div>

        </section>



        <section className="section container about-section" id="about">

          <div className="about-label"><span>GET TO KNOW ME</span></div>

          <div className="about-content">

            <SectionHeading eyebrow="A LITTLE ABOUT ME" title={<>Turning ideas into <span className="gradient-text">useful software.</span></>} />

            <div className="about-columns">

              <p className="about-main">

                I'm Gayatri Dattatray Shitole, a BCA graduate with hands-on experience in Java full stack development. I enjoy building web applications that connect intuitive frontends with dependable backend services.

              </p>

              <div className="about-detail">

                <p>During my internship at HefShine Institute, I worked with Spring Boot, React.js, MySQL, REST APIs, and Git. I also have a foundation in software testing, from test case design to functional and regression testing.</p>

                <a className="text-link" href="#experience">More about my journey <span>↘</span></a>

              </div>

            </div>

            <div className="stats-grid">

              <div className="stat"><strong>2025</strong><span>BCA Graduate</span></div>

              <div className="stat"><strong>2025–26</strong><span>Full Stack Internship</span></div>

              <div className="stat"><strong>03</strong><span>Featured Projects</span></div>

              <div className="stat"><strong>Java + React</strong><span>Core Stack</span></div>

            </div>

          </div>

        </section>



        <section className="section skills-section" id="skills">

          <div className="container">

            <SectionHeading

              eyebrow="MY TOOLKIT"

              title={<>Skills I bring to the <span className="gradient-text">table.</span></>}

              text="A mix of development, database, and testing skills to help build and deliver dependable applications."

            />

            <div className="skills-grid">

              {skills.map((group) => (

                <article className="skill-card" key={group.title}>

                  <h3>{group.title}</h3>

                  <div className="skill-tags">

                    {group.items.map((item) => <span className="skill-tag" key={item}>{item}</span>)}

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>



        <section className="section container experience-section" id="experience">

          <SectionHeading

            eyebrow="EXPERIENCE"

            title={<>Where I've <span className="gradient-text">grown.</span></>}

            text="Learning through practical work, collaboration, and solving application-level challenges."

          />

          <div className="timeline">

            <div className="timeline-marker"><span /></div>

            <article className="experience-card">

              <div className="experience-top">

                <div><span className="experience-type">INTERNSHIP</span><h3>Java Full Stack Developer Intern</h3><p className="company">HefShine Institute · Pune, Maharashtra</p></div>

                <span className="experience-date">May 2025 — May 2026</span>

              </div>

              <ul className="detail-list">

                <li>Developed Java-based web applications using Spring Boot, React.js, and MySQL.</li>

                <li>Built REST APIs and integrated backend services with frontend applications.</li>

                <li>Worked on database design, CRUD operations, debugging, and application testing.</li>

                <li>Used Git and GitHub for version control and supported responsive UI development.</li>

              </ul>

              <div className="experience-stack">{["Java", "Spring Boot", "React.js", "MySQL", "Git", "REST APIs"].map((item) => <span key={item}>{item}</span>)}</div>

            </article>

          </div>

        </section>



        <section className="section projects-section" id="projects">

          <div className="container">

            <div className="projects-heading">

              <SectionHeading

                eyebrow="SELECTED WORK"

                title={<>Projects with a <span className="gradient-text">purpose.</span></>}

                text="A look at applications I've built using Java full stack technologies."

              />

            </div>

            <div className="projects-grid">

              {projects.map((project) => (

                <article className="project-card" key={project.title}>

                  <div className="project-visual">

                    <span className="project-visual-index">PROJECT</span>

                    <div className={`project-symbol ${project.plane ? "plane-symbol" : ""}`}>{project.icon}</div>

                    <div className="project-visual-caption"><span>JAVA FULL STACK</span><span>✳</span></div>

                  </div>

                  <div className="project-body">

                    <div className="project-meta"><span>{project.type}</span></div>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <ul className="project-features">{project.features.map((feature) => <li key={feature}><span>↗</span>{feature}</li>)}</ul>

                    <div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>

                  </div>

                </article>

              ))}

            </div>

            <p className="projects-note"><span>✳</span> These projects were developed as part of academic work.</p>

          </div>

        </section>



        <section className="section container education-section" id="education">

          <SectionHeading eyebrow="EDUCATION" title={<>The foundation <span className="gradient-text">behind the code.</span></>} />

          <div className="education-list">

            <article className="education-item">

              <div className="education-year">2025</div>

              <div className="education-info"><h3>Bachelor of Computer Applications (BCA)</h3><p>Savitribai Phule Pune University · Pune, Maharashtra</p></div>

              <div className="education-score"><strong>70.05%</strong><span>Final score</span></div>

            </article>

            <article className="education-item">

              <div className="education-year">2022</div>

              <div className="education-info"><h3>Higher Secondary Certificate (HSC)</h3><p>Gopinath Vidyalaya Varvand · Maharashtra</p></div>

              <div className="education-score"><strong>70.00%</strong><span>Final score</span></div>

            </article>

          </div>

        </section>



        <section className="contact-section" id="contact">

          <div className="container contact-inner">

            <div className="contact-copy">

              <span className="eyebrow">WHAT'S NEXT?</span>

              <h2>Let's build something <span className="gradient-text">meaningful.</span></h2>

              <p>I'm interested in opportunities where I can keep learning, contribute to a team, and turn ideas into working software.</p>

              <a className="button button-primary" href="https://wa.me/918010468727?text=Hello%20Gayatri%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect." target="_blank" rel="noreferrer">Start a conversation <span>↗</span></a>

            </div>

            <div className="contact-links">

              <a href="mailto:gayatrishitole9696@gmail.com"><span className="contact-link-icon">✉</span><span><small>EMAIL ME AT</small><strong>gayatrishitole9696@gmail.com</strong></span><span className="contact-link-arrow">↗</span></a>

              <a href="tel:+918010468727"><span className="contact-link-icon">↗</span><span><small>GIVE ME A CALL</small><strong>+91 8010468727</strong></span><span className="contact-link-arrow">↗</span></a>

              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><span className="contact-link-icon">in</span><span><small>CONNECT ON</small><strong>LinkedIn</strong></span><span className="contact-link-arrow">↗</span></a>

            </div>

          </div>

        </section>

      </main>



      <footer className="site-footer">

        <div className="container footer-inner">

          <a className="brand footer-brand" href="#home"><span className="brand-mark">G</span><span>gayatri<span className="brand-dot">.</span></span></a>

          <span>Designed with curiosity and built with React.</span>

          <a className="back-top" href="#home">BACK TO TOP ↑</a>

          <span className="copyright">© {new Date().getFullYear()} Gayatri Shitole</span>

        </div>

      </footer>

    </div>

  );

}



export default App;