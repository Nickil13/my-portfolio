import React, {useState} from 'react';
import {social,skills} from "./assets/data"
import ProjectList from "./components/ProjectList";
import Navbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";

function App() {
  const [currentSection, setCurrentSection] = useState('');

  React.useEffect(()=>{
    document.addEventListener("scroll", handleSectionScroll);
    return () =>{
      document.removeEventListener("scroll", handleSectionScroll);
    }
  },[])

  const handleSectionScroll = () =>{
    const sections = document.querySelectorAll("section");
    var current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.getBoundingClientRect().height;
      
      if (window.pageYOffset >= sectionTop && window.pageYOffset < (sectionTop + sectionHeight)){
        current = section.getAttribute("id");
        setCurrentSection(`#${current}`);
      }
      
    })
  }

  return (
    <div className="app">
      <Navbar currentSection={currentSection}/>
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm <span>Nicki Lindstrom</span></h1>
          <h4>Full stack web developer</h4>
          <a href="#contact" className="btn-primary">Contact me</a>
        </div>
       
      </div>

      <main>
        
        {/* About Section */}
        <section className="about-section" id="about">
          <div className="about-content">
            <h2 className="section-title">A bit about me</h2>
              <div className="section-text">
                <p>I am a self-taught Web Developer who loves bringing ideas to life with code!</p>
                <p>I build responsive websites using React and the MERN stack.</p>
                <p>I also have a Bachelor of Arts in Linguistics and I am an avid gamer.</p>
              </div>
              <a className="btn-primary" href="/resources/lindstromn_resume.pdf" target="_blank">Resume</a>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills-section" id="skills">
          <h2 className="section-title">Skills</h2>
          <div className="skill-blocks">
            {/* Front end skill  tiles */}
            <div className="skill-block">
              <h3>Front end</h3>
              <ul className="skill-tiles">
                  {skills.filter((skill)=>skill.category.includes("front end")).map((skill, index)=>{
                    return(
                      <li key={index} className={`${skill.category.includes("styling") ? 'styling-skill-block' : 'frontend-skill-block'} skill-tile`}>
                        <span className="skill-tile-icon">{skill.icon}</span>
                        <span className="skill-tile-name">{skill.name}</span>
                      </li>
                    )
                  })}
              </ul>
            </div>

            {/* Back end skill tiles */}
            <div className="skill-block">
            <h3>Back end</h3>
            <ul className="skill-tiles">
                {skills.filter((skill)=>skill.category==="back end").map((skill, index)=>{
                  return(
                    <li key={index} className="skill-tile backend-skill-block">
                      <span className="skill-tile-icon">{skill.icon}</span>
                      <span className="skill-tile-name">{skill.name}</span>
                    </li>
                  )
                })}
            </ul>
          </div>
          </div>
        </section>

        <section className="projects-section" id="projects">
          <h2 className="section-title">Projects</h2>
          <p>Here are some personal projects I've completed.</p>
          <ProjectList/>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-content">
            <h2 className="section-title">Contact Me</h2>
            <p>If you want to get in touch, email me at <strong>lindstromn13@gmail.com</strong> or fill out the contact form!</p>
          </div>
          <ContactForm/>
        </section>
      </main>

      <footer>
        <span>Nicki Lindstrom</span>
        <ul className="footer-links">
          {social.map((link)=>{
            const{id,url,icon} = link;
            return(
              <li key={id} className="footer-link">
                <a href={url} target="_blank" rel="noreferrer">{icon}</a>
              </li>
            );
          })} 
        </ul> 
      </footer>
    </div>
  );
}


export default App;
