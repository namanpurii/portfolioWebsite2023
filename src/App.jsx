import { useState } from "react";
import "./App.css";
import profilepic from "/namanpuri_profilepic.png?url";
import abtmePic from "/aboutme.png?url";
import experienceIcon from "/experience.png?url";
import educationIcon from "/education.png?url";
import arrowIcon from "/arrow.png?url";
import checkIcon from "/checkmark.png?url";
import emailIcon from "/email.png?url";

import { skillsData, links } from "./data";
import Project from "./components/Project";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">namanpuri.</div>
        <div>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">namanpuri.</div>
        <div className="hamburger-menu">
          <div
            className={"hamburger-icon " + (isOpen && "open")}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={"menu-links " + (isOpen && "open")}>
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={toggleMenu}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav>
      <section id="profile">
        <div className="section__pic-container">
          <img src={profilepic} alt="naman puri profile picture" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Naman Puri</h1>
          <p className="section__text__p2">FullStack Developer</p>
          <div className="btn-container">
            <button
              type="button"
              className="btn btn-color-2"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1_uKIynMgUA4muR_vZsZvQl1eUpbMkMxI/view?usp=sharing"
                );
              }}
            >
              Download CV
            </button>
            <button
              type="button"
              className="btn btn-color-1"
              onClick={() => {
                window.location.href = "#contact";
              }}
            >
              Contact Me
            </button>
          </div>
          <div id="socials-container">
            <img
              className="icon"
              src={links?.[1]?.logo}
              alt="link to naman puri's linkedin profile"
              onClick={() => {
                window.location.href = links?.[1]?.userUrl;
              }}
            />
            <img
              className="icon"
              src={links?.[0]?.logo}
              alt="link to naman puri's github profile"
              onClick={() => {
                window.location.href = links?.[0]?.userUrl;
              }}
            />
          </div>
        </div>
      </section>
      <section id="about">
        <p className="section__text__p1">Get to know more</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img className="about-pic" src={abtmePic} alt="about-me section" />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img
                  src={experienceIcon}
                  alt="experience-icon"
                  className="icon"
                />
                <h3>Experience</h3>
                <p style={{ marginTop: "1rem" }}>
                  ~ 1year <br />
                  Web Development
                </p>
              </div>
              <div className="details-container">
                <img
                  src={educationIcon}
                  alt="education-icon"
                  className="icon"
                />
                <h3>Education</h3>
                <p style={{ marginTop: "1rem" }}>
                  B. Tech
                  <br />
                  <i>Computer Science Engineering</i>
                  <br />
                  <span style={{ fontWeight: "600" }}>(2020-Present)</span>
                </p>
              </div>
            </div>
            <div className="text-container">
              <p style={{ textAlign: "justify" }}>
                I am a fourth-year <strong>B. Tech student</strong>,
                specializing in <strong>Computer Science Engineering</strong>.
                Diving into cutting-edge technologies, my focus lies in{" "}
                <strong>front-end development</strong>,{" "}
                <strong>software engineering</strong> and other{" "}
                <strong>core concepts</strong>. Passionate about creating
                seamless user experiences, with recent projects in{" "}
                <strong>MERN</strong> stack. Eager to apply my problem solving
                skills in a challenging environment, collaborating with industry
                experts to deliver <strong>innovative solutions.</strong>
              </p>
            </div>
          </div>
        </div>
        <img
          src={arrowIcon}
          alt="arrow icon"
          className="icon arrow"
          onClick={() => {
            window.location.href = "#experience";
          }}
        />
      </section>
      <section id="experience">
        <p className="section__text__p1">Explore my</p>
        <h1 className="title">Skills & Tools</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            {skillsData.map((skillsinfo, i) => {
              return (
                <div className="details-container" key={i}>
                  <h2 className="experience-sub-title">
                    {skillsinfo.category}
                  </h2>
                  <div className="article-container">
                    {skillsinfo.skills.map((info, id) => {
                      return (
                        <article key={id}>
                          <img
                            src={checkIcon}
                            alt="skills-icon"
                            className="icon"
                            style={{ cursor: "default" }}
                          />
                          <div>
                            <h3>{info.skill}</h3>
                            <p>{info.level}</p>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <img
          src={arrowIcon}
          alt="arrow icon"
          className="icon arrow"
          onClick={() => {
            window.location.href = "#projects";
          }}
        />
      </section>
      <section id="projects">
        <p className="section__text__p1">Browse my recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            {links?.[0]?.projectLinks.map((e, i) => {
              return (
                <Project
                  key={i}
                  projectInfo={e}
                  demoInfo={links?.[2]?.projectLinks[i]}
                />
              );
            })}
          </div>
        </div>
        <img
          src={arrowIcon}
          alt="arrow icon"
          className="icon arrow"
          onClick={() => {
            window.location.href = "#contact";
          }}
        />
      </section>
      <section id="contact">
        <p className="section__text__p1">Get in touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img
              src={emailIcon}
              alt="email icon"
              className="icon contact-icon email-icon"
            />
            <p>
              <a href="mailto:puri2001naman@gmail.com">puri2001naman@gmail.com</a>
            </p>
          </div>
          <div className="contact-info-container">
            <img
              className="icon contact-icon"
              src={links?.[1]?.logo}
              alt="link to naman puri's linkedin profile"
            />
            <p>
              <a href={links?.[1]?.userUrl}>Linkedin</a>
            </p>
          </div>
        </div>
      </section>
      <footer style={{display:"flex", alignItems:"center", gap: "0.5rem", justifyContent:"center", padding:"2rem 0", background: "lightgray", marginTop:"5rem"}}>
        <span>Naman Puri. Portfolio 2023</span>
      </footer>
    </>
  );
}

export default App;
