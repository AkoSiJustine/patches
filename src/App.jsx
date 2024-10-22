import React from 'react';
import logo from './assets/jus.png'; // Import your logo
import profilePicture from './assets/pic2.jpg';
import project from './assets/proj1.jpg';
import project1 from './assets/proj2.PNG';
import profilePic from './assets/front.jpg';
import './App.css'; // Make sure to style accordingly in CSS

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav>
          <ul>
            <li><a href="#home"><b>HOME</b></a></li>
            <li><a href="#about-me"><b>ABOUT ME</b></a></li>
            <li><a href="#projects"><b>PROJECT</b></a></li>
            <li><a href="#contact"><b>CONTACT</b></a></li>
          </ul>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>JOHN JUSTINE PATCHES</h1>
          <h1>BSIT STUDENT<span className="typed-element"></span></h1>
          <p className="subtitle">AT WESTERN INSTITUTE OF TECHNOLOGY.</p>
        </div>
        <div className="hero-circles">
          <div className="circle circle-large">
            <img src={profilePic} alt="Profile" />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about-me" className="about-me-section">
        <div className="about-me-container">
          <div className="image-section">
            <img src={profilePicture} alt="Profile" />

          </div>
          <div className="text-section">
            <h2>JOHN JUSTINE PATCHES</h2>
            <h3>Web Designer</h3>
            <p>
              I pursue a Bachelor of Science in Information Technology
               (BSIT) because of my deep interest in technology and its
                impact on the world. I have always been fascinated by how
                computers work and how software is developed. BSIT offers
                me the opportunity to turn this passion into a career.
                The IT field is constantly evolving, providing countless career opportunities
                in areas such as software development, cybersecurity, and network management.
                I also value the problem-solving skills that the course develops, as I enjoy
                tackling technical challenges and finding innovative solutions.

            </p>
          </div>
      
        </div>
      </section>

      <section id="projects" className="projects-section">
  <h2>MY PROJECTS</h2>
  <div className="projects-grid">
    <div className="project-card">
      <div className="card-image">
        {/* Image for Project 1 */}
        <img src={project} alt="Project 1" />
      </div>
      <p>REACT</p>
    </div>
    <div className="project-card">
    <div className="card-image">
        {/* Image for Project 1 */}
        <img src={project1} alt="Project 1" />
      </div>
      <p>FIGMA</p>
    </div>
  </div>
</section>


      <section id="contact" className="contact">
        <h2>CONTACT ME</h2>
        <div className="contact-info">
          <div className="contact-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
            alt="Whatsapp" />
            <span>+639480988012</span>
          </div>
          <div className="contact-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"  
            alt="Email" />
            <span>justinepatches@gmail.com</span>
          </div>
          <div className="contact-item">
          <img 
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
          alt="Facebook Icon" 
        />
            <span>JOHN JUSTINE PATCHES</span>
          </div>
          <div className="contact-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" 
             alt="Username" />
            <span>JUST10</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
