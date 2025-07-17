import React, { useRef, useState, useEffect } from "react";
import profileImg from "../assets/portfolio_welcome_page.jpg";
import profileImg2 from "../assets/formal_pic.jpg";
import OCPJSE17 from "../assets/OCPJSE17.jpg";
import APEX24CDOCP from "../assets/APEX24CDOCP.jpg";
import JAVASE17 from "../assets/JAVASE17.png";
import APEX from "../assets/APEX.png";
import NVIDIA from "../assets/NVIDIA.png";
import intership from "../assets/internship.png";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown, FaFacebook, FaTwitter, FaInstagram, FaJava, FaReact, FaNodeJs, FaDocker, FaGit, FaAws, FaLinux, FaHtml5, FaCss3Alt, FaDatabase, FaTools } from "react-icons/fa";
import { SiCplusplus, SiPhp, SiJavascript, SiExpress, SiMongodb, SiMysql, SiFlutter, SiFirebase } from "react-icons/si";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const skillsRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (!skillsRef.current) return;
      const rect = skillsRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        skillsRef.current.classList.add('skill-bar-animate');
        window.removeEventListener('scroll', handleScroll);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Contact form handler for backend email
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      from_name: e.target.from_name.value,
      from_email: e.target.from_email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    try {
      const response = await fetch('https://portfolio-2-9d4p.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Email sent successfully!');
        e.target.reset();
      } else {
        alert('Failed to send email. Please try again later.');
      }
    } catch (error) {
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="home-container full-width">
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-center-content">
          <div className="hero-left">
            <h1 className="hero-name-main">SHANDEEP</h1>
            <h2 className="hero-title-main">Software Developer / Web Developer</h2>
            <p className="hero-intro">I create beautiful and interactive websites with modern technologies.<br/>Welcome to my portfolio!</p>
            <div className="hero-socials">
              <a href="https://github.com/ShandeepSugumar" target="_blank" rel="noopener noreferrer" className="hero-social-icon facebook"><FaGithub /></a>
              <a href="https://linkedin.com/in/shandeep-sugumar-bb5203220" target="_blank" rel="noopener noreferrer" className="hero-social-icon linkedin"><FaLinkedin /></a>
              <a href="mailto:shandeepgeek@gmail.com" className="hero-social-icon instagram"><FaEnvelope /></a>
            </div>
            <div className="scroll-down-indicator">
              <FaArrowDown />
            </div>
          </div>
          <div className="hero-img-wrapper">
            <img src={profileImg} alt="Profile" className="hero-profile-img" />
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-card-modern">
          <div className="about-img-wrapper">
            <img src={profileImg2} alt="Profile" className="about-profile-img" />
          </div>
          <div className="about-content">
            <h2 className="about-title">About Me</h2>
            <p className="about-summary">
              I'm Shandeep Sugumar, a dedicated Full-Stack Developer with a strong command of Java, JavaFX, Node.js, MongoDB, Flutter, and Firebase, along with a solid grasp of DevOps practices. I enjoy building robust, scalable applications and optimizing the development process using tools like Docker, Jenkins, and Kubernetes for CI/CD and container orchestration.<br/>
              With multiple successful projects under my belt—ranging from mobile shopping applications to interactive Java-based games—I've developed a deep understanding of both front-end and back-end development. I strive to create seamless user experiences with clean, maintainable code.<br/>
              I hold certifications from Oracle as a Java SE 17 Developer and Oracle APEX Cloud Developer, reflecting my ability to design, build, and deploy enterprise-level applications. These programs have strengthened my object-oriented design principles, API handling, and secure database management skills.
            </p>
            <h1>Career Goal:</h1>
            <p>My goal is to work in a challenging and innovative environment where I can contribute to meaningful projects, continue learning emerging technologies, and grow into a lead role where I can mentor others while delivering impactful software solutions.</p>
            <div className="about-skills-badges">
              <span className="badge">Problem Solver</span>
              <span className="badge">Team Player</span>
              <span className="badge">UI/UX Enthusiast</span>
              <span className="badge">Quick Learner</span>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-marquee">
          <div className="skills-icon-row marquee-content">
            {/* First row of unique skill icons, duplicated for infinite loop */}
            <div className="skill-logo"><FaNodeJs color="#3C873A" /></div>
            <div className="skill-logo"><SiMongodb color="#47A248" /></div>
            <div className="skill-logo"><SiMysql color="#4479A1" /></div>
            <div className="skill-logo"><SiPhp color="#777BB4" /></div>
            <div className="skill-logo"><SiCplusplus color="#00599C" /></div>
            <div className="skill-logo"><span style={{color:'#21A366', fontSize:'2.2rem'}}>&lt;/&gt;</span></div>
            <div className="skill-logo"><FaJava color="#f89820" /></div>
            <div className="skill-logo"><span style={{color:'#3776AB', fontSize:'2.2rem'}}>&#128013;</span></div>
            <div className="skill-logo"><SiJavascript color="#F7DF1E" /></div>
            <div className="skill-logo"><FaReact color="#61DAFB" /></div>
            <div className="skill-logo"><FaGit color="#F05032" /></div>
            {/* Duplicate for seamless loop */}
            <div className="skill-logo"><FaNodeJs color="#3C873A" /></div>
            <div className="skill-logo"><SiMongodb color="#47A248" /></div>
            <div className="skill-logo"><SiMysql color="#4479A1" /></div>
            <div className="skill-logo"><SiPhp color="#777BB4" /></div>
            <div className="skill-logo"><SiCplusplus color="#00599C" /></div>
            <div className="skill-logo"><span style={{color:'#21A366', fontSize:'2.2rem'}}>&lt;/&gt;</span></div>
            <div className="skill-logo"><FaJava color="#f89820" /></div>
            <div className="skill-logo"><span style={{color:'#3776AB', fontSize:'2.2rem'}}>&#128013;</span></div>
            <div className="skill-logo"><SiJavascript color="#F7DF1E" /></div>
            <div className="skill-logo"><FaReact color="#61DAFB" /></div>
            <div className="skill-logo"><FaGit color="#F05032" /></div>
          </div>
        </div>
        <div className="skills-marquee">
          <div className="skills-icon-row marquee-content-reverse">
            {/* Second row of unique skill icons, duplicated for infinite loop */}
            <div className="skill-logo"><FaAws color="#FF9900" /></div>
            <div className="skill-logo"><FaLinux color="#FCC624" /></div>
            <div className="skill-logo"><FaHtml5 color="#E34F26" /></div>
            <div className="skill-logo"><FaCss3Alt color="#1572B6" /></div>
            <div className="skill-logo"><FaDatabase color="#4DB33D" /></div>
            <div className="skill-logo"><SiFlutter color="#02569B" /></div>
            <div className="skill-logo"><SiFirebase color="#FFCA28" /></div>
            <div className="skill-logo"><FaDocker color="#2496ED" /></div>
            <div className="skill-logo"><FaTools color="#2196F3" /></div>
            {/* Duplicate for seamless loop */}
            <div className="skill-logo"><FaAws color="#FF9900" /></div>
            <div className="skill-logo"><FaLinux color="#FCC624" /></div>
            <div className="skill-logo"><FaHtml5 color="#E34F26" /></div>
            <div className="skill-logo"><FaCss3Alt color="#1572B6" /></div>
            <div className="skill-logo"><FaDatabase color="#4DB33D" /></div>
            <div className="skill-logo"><SiFlutter color="#02569B" /></div>
            <div className="skill-logo"><SiFirebase color="#FFCA28" /></div>
            <div className="skill-logo"><FaDocker color="#2496ED" /></div>
            <div className="skill-logo"><FaTools color="#2196F3" /></div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2 className="projects-title">Projects</h2>
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={2}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={5000}
          arrows={false}
          className="project-slider"
          responsive={[
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]}
        >
        <div>
                    <div className="project-card">
                      <h3>Mobile Application for Employment Tracking</h3>
                      <p>This is a Flutter-based mobile application developed for efficient employment tracking and management. It allows users to register, log in, update their profiles, and track job application status in real time. Admins can manage employee records, assign job roles, monitor progress, and handle approvals through a secure backend powered by Firebase. Key features include real-time updates, role-based access, push notifications, and a clean, responsive user interface designed for both job seekers and administrators.</p>
                      <div className="project-btn-row">
                        <a href="https://github.com/Shandeepsugumar/admin_ssm_consultancy.git" target="_blank" rel="noopener noreferrer" className="project-btn">GitHub (Admin)</a>
                        <a href="https://github.com/Shandeepsugumar/consultancy.git" target="_blank" rel="noopener noreferrer" className="project-btn">GitHub (User)</a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="project-card">
                      <h3>Online Learning Platform</h3>
                      <p>This project is a full-stack e-learning platform built using Bootstrap for the frontend, Node.js with Express for the backend, and MongoDB for data storage. It allows users to browse courses, register, log in, and track their learning progress, while admins can manage course content and user data. DevOps practices were integrated using Docker, Jenkins, and Kubernetes for automated deployment. A Dockerfile and Jenkinsfile were created to automate building, testing, and deploying the application on a local Ubuntu machine, showcasing end-to-end CI/CD and container orchestration.</p>
                      <a href="https://github.com/ShandeepSugumar/online-learning-platform.git" target="_blank" rel="noopener noreferrer" className="project-btn">GitHub</a>
                    </div>
                  </div>
                  <div>
                    <div className="project-card">
                      <h3>Mobile Shopping System using Java and JDBC</h3>
                      <p>This is a simple Java-based mobile shopping application that uses JDBC to interact with a MySQL database. The project allows users to browse mobile products, add items to a cart, and store purchase details in the database. It's a console-based application demonstrating core Java programming, database connectivity, and CRUD operations for a basic e-commerce workflow.</p>
                      <a href="https://github.com/ShandeepSugumar/Java-JDBC.git" target="_blank" rel="noopener noreferrer" className="project-btn">GitHub</a>
                    </div>
                  </div>
                  <div>
                    <div className="project-card">
                      <h3>Ping Pong Game using JavaFX</h3>
                      <p>This is a desktop-based Ping Pong game developed in Java using JavaFX for the graphical user interface. The project features smooth paddle and ball movement, collision detection, scoring logic, and basic game controls. It demonstrates the use of object-oriented programming, event handling, animation, and JavaFX components to create an interactive 2D arcade-style game.</p>
                      <a href="https://github.com/Shandeepsugumar/Ping-Pong-Game-using-Java.git" target="_blank" rel="noopener noreferrer" className="project-btn">GitHub</a>
                    </div>
                  </div>
                  <div>
                    <div className="project-card">
                      <h3>Podcast Streaming Web App</h3>
                      <p>A full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to search, stream, and save podcasts using real-time data from the iTunes API. The platform features a responsive user interface, seamless audio playback, and personalized functionality like saving favorite shows. The frontend is built with React and styled for a smooth user experience, while the backend securely handles API integration and data storage. The app is deployed on Vercel for fast and scalable access.</p>
                      <div className="project-btn-row">
                        <a href="https://github.com/ShandeepSugumar/Podcast.git" target="_blank" rel="noopener noreferrer" className="project-btn">GitHub</a>
                        <a href="https://podcast-orpin.vercel.app" target="_blank" rel="noopener noreferrer" className="project-btn live-demo-btn">
                          <span role="img" aria-label="rocket" style={{marginRight: '8px'}}>🚀</span>Live Demo
                        </a>
                      </div>
                    </div>
        </div>
        </Slider>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="certificates-section">
        <h2 className="certificates-title">Certificates</h2>
        <div className="certificates-slider">
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={2}
            slidesToScroll={1}
            arrows={true}
            className="certificates-carousel"
            autoplay={true}
            autoplaySpeed={3000}
            responsive={[
              {
                breakpoint: 900,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              }
            ]}
          >
            <div>
              <div className="certificate-card">
                <img src={OCPJSE17} alt="Oracle Certified Java SE 17 Developer" className="certificate-img" />
                <h3>Oracle Certified Java SE 17 Developer Global Certification</h3>
                <p>Issued by Oracle</p>
                <button className="certificate-btn" onClick={() => { setModalImg(JAVASE17); setModalOpen(true); }}>View Certificate</button>
              </div>
            </div>
            <div>
              <div className="certificate-card">
                <img src={APEX24CDOCP} alt="Oracle Certified APEX Cloud Developer" className="certificate-img" />
                <h3>Oracle Certified APEX Cloud Developer Global Certification</h3>
                <p>Issued by Oracle</p>
                <button className="certificate-btn" onClick={() => { setModalImg(APEX); setModalOpen(true); }}>View Certificate</button>
              </div>
            </div>
            <div>
              <div className="certificate-card">
                <img src={NVIDIA} alt="Nvidia certified Fundamentals of Deep Learning" className="certificate-img" />
                <h3>Nvidia certified Fundamentals of Deep Learning</h3>
                <p>Issued by NVIDIA</p>
                <button className="certificate-btn" onClick={() => { setModalImg(NVIDIA); setModalOpen(true); }}>View Certificate</button>
              </div>
            </div>
            <div>
              <div className="certificate-card">
                <img src={intership} alt="Web Development Internship" className="certificate-img" />
                <h3>Web Development Internship</h3>
                <p>Issued by CoderOne</p>
                <button className="certificate-btn" onClick={() => { setModalImg(intership); setModalOpen(true); }}>View Certificate</button>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="contact-section contact-modern">
        <div className="contact-card">
          <div className="contact-modern-container">
            {/* Left Side: Info */}
            <div className="contact-modern-left">
              <h2 className="contact-modern-title">Contact <span style={{ color: '#ff4081' }}>Me</span></h2>
              <h3 className="contact-modern-subtitle">Let's Work Together</h3>
              <p className="contact-modern-desc">
                Have a project in mind, hiring for a role, or just want to say hello? I'm always open to connecting with fellow developers, recruiters, and tech enthusiasts.<br />
                I'm currently open to work actively seeking full-time roles, internships, and freelance opportunities in software development, full-stack engineering, or DevOps. If you're looking for someone who's passionate about building clean, scalable applications and contributing to real-world solutions, let's connect!<br />
                Whether it's about job openings, collaborations, or tech discussions, feel free to reach out. I'll get back to you as soon as possible!
              </p>
              <div className="contact-modern-details">
                <div className="contact-modern-detail"><span className="contact-modern-icon">➤</span> <span style={{ color: '#ffd54f' }}>shandeepgeek@gmail.com</span></div>
                <div className="contact-modern-detail"><span className="contact-modern-icon">📞</span> <span style={{ color: '#ffd54f' }}>+91 7010161033</span></div>
              </div>
              <div className="contact-modern-socials">
                <a href="https://www.facebook.com/sugushandeep.sugushandeep/" className="contact-modern-social facebook"><span><FaFacebook /></span></a>
                <a href="https://x.com/shandeepgeek?t=JIwUbx-gpZ5b18sZxKKZng&s=09" className="contact-modern-social twitter"><span><FaTwitter /></span></a>
                <a href="https://www.instagram.com/shandeep._/?next=%2F&hl=en" className="contact-modern-social instagram"><span><FaInstagram /></span></a>
                <a href="https://www.linkedin.com/in/shandeep-sugumar-bb5203220/" className="contact-modern-social linkedin"><span><FaLinkedin /></span></a>
              </div>
            </div>
            {/* Right Side: Form */}
            <form className="contact-modern-form" onSubmit={handleContactSubmit}>
              <input type="text" name="from_name" placeholder="Enter Your Name" className="contact-modern-input" required />
              <input type="email" name="from_email" placeholder="Enter Your Email" className="contact-modern-input" required />
              <input type="text" name="subject" placeholder="Enter Your Subject" className="contact-modern-input" required />
              <textarea name="message" placeholder="Enter Your Message" className="contact-modern-textarea" required></textarea>
              <button type="submit" className="contact-modern-btn">Submit</button>
            </form>
          </div>
        </div>
      </section>
      <footer className="footer">© 2025 Shandeep Sugumar | Portfolio. All rights reserved.</footer>
    </div>
  );
}

export default Home;