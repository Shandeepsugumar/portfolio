import React, { useRef, useState, useEffect } from "react";
import profileImg from "../assets/portfolio_welcome_page.jpg";
import profileImg2 from "../assets/formal_pic.jpg";
import OCPJSE17 from "../assets/OCPJSE17.jpg";
import APEX24CDOCP from "../assets/APEX24CDOCP.jpg";
import OCI25GAIOCP from "../assets/OCI25GAIOCP.jpg";
import Oracle_Gen_AI from "../assets/Oracle_Gen_AI.png";
import JAVASE17 from "../assets/JAVASE17.png";
import APEX from "../assets/APEX.png";
import NVIDIA from "../assets/NVIDIA.png";
import intership from "../assets/internship.png";
import KEC_Hackthon from "../assets/KEC_Hackathon.jpg";
import Deloitte from "../assets/Deloitte.png";
import resumePDF from "../assets/shandeep (Resume).pdf";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown, FaFacebook, FaTwitter, FaInstagram, FaJava, FaReact, FaNodeJs, FaDocker, FaGit, FaAws, FaLinux, FaHtml5, FaCss3Alt, FaDatabase, FaTools, FaTrophy, FaMedal, FaAward, FaUsers } from "react-icons/fa";
import { SiCplusplus, SiPhp, SiJavascript, SiExpress, SiMongodb, SiMysql, SiFlutter, SiFirebase, SiBootstrap, SiAndroidstudio } from "react-icons/si";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const skillsRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);
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
      const response = await fetch('https://portfolio-915c.onrender.com/api/contact', {
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

  // Download CV handler
  const handleDownloadCV = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'shandeep (Resume).pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="home-container full-width">
      {/* Certificate Modal */}
      {modalOpen && (
        <div className="certificate-modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="certificate-modal-content" onClick={e => e.stopPropagation()}>
            <button className="certificate-modal-close" onClick={() => setModalOpen(false)}>&times;</button>
            <img src={modalImg} alt="Certificate" className="certificate-modal-img" />
          </div>
        </div>
      )}
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content-wrapper">
          <div className="hero-left">
            <h1 className="hero-name-main">SHANDEEP</h1>
            <h2 className="hero-title-main">Software Developer</h2>
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
            <div 
              className="hero-profile-img-container innovative-profile-card"
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                card.style.setProperty('--mouse-x', `${rotateY}deg`);
                card.style.setProperty('--mouse-y', `${rotateX}deg`);
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget;
                card.style.setProperty('--mouse-x', '0deg');
                card.style.setProperty('--mouse-y', '0deg');
              }}
            >
              <div className="innovative-profile-glow"></div>
              <img src={profileImg} alt="Profile" className="hero-profile-img" />
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="about-section">
        <div 
          className="about-card-modern innovative-about-card"
          onMouseMove={(e) => {
            const card = e.currentTarget;
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 15;
            const rotateY = (centerX - x) / 15;
            card.style.setProperty('--mouse-x', `${rotateY}deg`);
            card.style.setProperty('--mouse-y', `${rotateX}deg`);
          }}
          onMouseLeave={(e) => {
            const card = e.currentTarget;
            card.style.setProperty('--mouse-x', '0deg');
            card.style.setProperty('--mouse-y', '0deg');
          }}
        >
          <div className="innovative-about-glow"></div>
          <div className="about-img-wrapper">
            <img src={profileImg2} alt="Profile" className="about-profile-img" />
          </div>
          <div className="about-content">
            <h2 className="about-title">About Me</h2>
            {(() => {
              const tabs = [
                { key: 'bio', label: 'Bio' },
                { key: 'experience', label: 'Experience' },
                { key: 'interests', label: 'Interests' },
              ];
              const [activeAboutTab, setActiveAboutTab] = useState('bio');
              return (
                <div className="about-interactive">
                  <div className="about-tabs" role="tablist" aria-label="About Tabs">
                    {tabs.map(t => (
                      <button
                        key={t.key}
                        role="tab"
                        aria-selected={activeAboutTab === t.key}
                        className={`about-tab${activeAboutTab === t.key ? ' active' : ''}`}
                        onClick={() => setActiveAboutTab(t.key)}
                      >
                        {t.label}
                      </button>
                    ))}
                    <span className="about-tab-ink" data-active={activeAboutTab}></span>
                  </div>

                  <div className="about-panels">
                    {activeAboutTab === 'bio' && (
                      <div className="about-panel">
                        <p className="about-summary">
                          I'm Shandeep , a Software Developer experienced in Java, Node.js, MongoDB, Flutter, and Firebase, with solid DevOps exposure (Docker, Jenkins, Kubernetes). I love building robust apps and polished user experiences.
                        </p>
                        <div className="about-stats">
                          <div className="about-stat"><span className="about-stat-num">10+</span><span className="about-stat-label">Projects</span></div>
                          <div className="about-stat"><span className="about-stat-num">4</span><span className="about-stat-label">Certifications</span></div>
                          <div className="about-stat"><span className="about-stat-num">3</span><span className="about-stat-label">Domains</span></div>
                        </div>
                        <div className="about-actions">
                          <a href="#contact" className="about-btn primary">Contact Me</a>
                          <a href={resumePDF} onClick={handleDownloadCV} className="about-btn ghost" download="shandeep (Resume).pdf">Download CV</a>
                        </div>
                      </div>
                    )}
                    {activeAboutTab === 'experience' && (
                      <div className="about-panel">
                        <div className="about-timeline">
                          <div className="about-timeline-item">
                            <div className="dot"></div>
                            <div className="content">
                              <h4>Full-Stack Projects</h4>
                              <p>Built MERN web apps, JavaFX desktop apps, and Flutter mobile apps with CI/CD.</p>
                            </div>
                          </div>
                          <div className="about-timeline-item">
                            <div className="dot"></div>
                            <div className="content">
                              <h4>DevOps Practice</h4>
                              <p>Dockerized services, Jenkins pipelines, and K8s manifests for automated deployments.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {activeAboutTab === 'interests' && (
                      <div className="about-panel">
                        <div className="about-tags">
                          <span className="about-tag">Mobile App Building</span>
                          <span className="about-tag">Web Application Building</span>
                          <span className="about-tag">AI Models (ML & DL)</span>
                          <span className="about-tag">DevOps</span>
                        </div>
                        <p className="about-summary">I'm passionate about building mobile applications with Flutter, creating robust web applications using modern frameworks, developing AI models using Machine Learning and Deep Learning techniques, and implementing DevOps practices for efficient deployment and scaling.</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <h2 className="skills-title">Skills & Technologies</h2>
        {(() => {
          const skillCategories = [
            { key: 'all', label: 'All Skills' },
            { key: 'frontend', label: 'Frontend' },
            { key: 'backend', label: 'Backend' },
            { key: 'database', label: 'Database' },
            { key: 'devops', label: 'DevOps' },
            { key: 'mobile', label: 'Mobile' },
            { key: 'tools', label: 'Tools' },
          ];

          const allSkills = [
            { name: 'React', icon: <FaReact />, category: 'frontend', level: 90, color: '#61DAFB' },
            { name: 'JavaScript', icon: <SiJavascript />, category: 'frontend', level: 88, color: '#F7DF1E' },
            { name: 'HTML5', icon: <FaHtml5 />, category: 'frontend', level: 92, color: '#E34F26' },
            { name: 'CSS3', icon: <FaCss3Alt />, category: 'frontend', level: 90, color: '#1572B6' },
            { name: 'Bootstrap', icon: <SiBootstrap />, category: 'frontend', level: 85, color: '#7952B3' },
            { name: 'Node.js', icon: <FaNodeJs />, category: 'backend', level: 85, color: '#3C873A' },
            { name: 'Express', icon: <SiExpress />, category: 'backend', level: 82, color: '#000000' },
            { name: 'Java', icon: <FaJava />, category: 'backend', level: 88, color: '#f89820' },
            { name: 'PHP', icon: <SiPhp />, category: 'backend', level: 75, color: '#777BB4' },
            { name: 'C++', icon: <SiCplusplus />, category: 'backend', level: 70, color: '#00599C' },
            { name: 'MongoDB', icon: <SiMongodb />, category: 'database', level: 85, color: '#47A248' },
            { name: 'MySQL', icon: <SiMysql />, category: 'database', level: 83, color: '#4479A1' },
            { name: 'Firebase', icon: <SiFirebase />, category: 'database', level: 80, color: '#FFCA28' },
            { name: 'Docker', icon: <FaDocker />, category: 'devops', level: 80, color: '#2496ED' },
            { name: 'AWS', icon: <FaAws />, category: 'devops', level: 75, color: '#FF9900' },
            { name: 'Linux', icon: <FaLinux />, category: 'devops', level: 82, color: '#FCC624' },
            { name: 'Flutter', icon: <SiFlutter />, category: 'mobile', level: 85, color: '#02569B' },
            { name: 'Android Studio', icon: <SiAndroidstudio />, category: 'mobile', level: 80, color: '#3DDC84' },
            { name: 'Git', icon: <FaGit />, category: 'tools', level: 90, color: '#F05032' },
          ];

          const [activeCategory, setActiveCategory] = useState('all');
          const [searchQuery, setSearchQuery] = useState('');

          const filtered = allSkills.filter(s => {
            const matchesCategory = activeCategory === 'all' || s.category === activeCategory;
            const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
          });

          return (
            <div className="skills-interactive">
              <div className="skills-tabs" role="tablist" aria-label="Skill Categories">
                {skillCategories.map((cat) => (
                  <button
                    key={cat.key}
                    role="tab"
                    aria-selected={activeCategory === cat.key}
                    className={`skills-tab${activeCategory === cat.key ? ' active' : ''}`}
                    onClick={() => setActiveCategory(cat.key)}
                  >
                    {cat.label}
                  </button>
                ))}
                <span className="skills-tab-ink" data-active={activeCategory}></span>
              </div>

              <div className="skills-search-wrapper">
                <input
                  type="text"
                  placeholder="Search skills..."
                  className="skills-search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <span className="skills-count">{filtered.length} skill{filtered.length !== 1 ? 's' : ''}</span>
              </div>

              <div className="skills-keyboard innovative-skills-grid">
                {filtered.map((skill, index) => {
                  const handleMouseMove = (e) => {
                    const card = e.currentTarget;
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / 10;
                    const rotateY = (centerX - x) / 10;
                    card.style.setProperty('--mouse-x', `${rotateY}deg`);
                    card.style.setProperty('--mouse-y', `${rotateX}deg`);
                  };
                  
                  const handleMouseLeave = (e) => {
                    const card = e.currentTarget;
                    card.style.setProperty('--mouse-x', '0deg');
                    card.style.setProperty('--mouse-y', '0deg');
                  };

                  return (
                    <div 
                      className="skill-key innovative-skill-card"
                      key={skill.name}
                      title={skill.name}
                      style={{ 
                        '--skill-color': skill.color,
                        '--card-index': index
                      }}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="innovative-skill-glow"></div>
                      <div className="skill-key-icon" style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                      <div className="skill-key-label">{skill.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })()}
      </section>
      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2 className="projects-title">Projects</h2>

        {/* Interactive Tabs */}
        {(() => {
          const categories = [
            { key: 'Mobile', label: 'Mobile Apps' },
            { key: 'Web', label: 'Web Apps' },
            { key: 'Java', label: 'Java Apps' },
            { key: 'DevOps', label: 'DevOps' },
            { key: 'Research', label: 'Research' }
          ];

          const allProjects = [
            {
              id: 'p1',
              title: 'EASE - AI-Powered Waste Management',
              summary: 'Flutter mobile application with AI-powered waste segregation using Machine Learning and Deep Learning. Features intelligent waste classification, real-time image recognition, and smart categorization for efficient waste management.',
              hrefs: [{ href: 'https://github.com/Shandeepsugumar/EASE.git', label: 'GitHub' }],
              tags: ['Flutter', 'AI', 'ML', 'DL', 'Mobile'],
              category: 'Mobile',
              featured: true,
            },
            {
              id: 'p2',
              title: 'Mobile Application for Employment Tracking',
              summary: 'Flutter app with Firebase backend for employment tracking, role-based access, and push notifications.',
              hrefs: [{ href: 'https://github.com/Shandeepsugumar/SSM_Consultancy.git', label: 'GitHub' }],
              tags: ['Flutter', 'Firebase', 'Mobile'],
              category: 'Mobile',
              featured: true,
            },
            {
              id: 'p3',
              title: 'Notes & Tasks Mobile App',
              summary: 'Simple and intuitive Flutter mobile application for managing notes, tasks, and daily motivation. Features include note creation, task management, motivational quotes, and a clean user interface for productivity.',
              hrefs: [{ href: 'https://github.com/Shandeepsugumar/notes_for_Mobile_App.git', label: 'GitHub' }],
              tags: ['Flutter', 'Mobile', 'Productivity'],
              category: 'Mobile',
              featured: false,
            },
            {
              id: 'p9',
              title: 'Emotional Recognition Mobile App',
              summary: 'AI-powered Flutter mobile application featuring deep learning models for human emotion recognition. Developed three specialized models: speech emotion recognition (SER), heart rate-based emotion detection, and a fusion model with attention mechanism. The multimodal fusion model achieves 94% accuracy by combining physiological signals (heart rate) and vocal features through advanced attention-based fusion architecture. Includes real-time emotion detection, multi-modal emotion analysis, intelligent emotion classification, and cross-platform support for Android, iOS, and other platforms.',
              hrefs: [{ href: 'https://github.com/Shandeepsugumar/Emotional-Recognition.git', label: 'GitHub' }],
              tags: ['Flutter', 'ML', 'TensorFlow Lite', 'Mobile', 'AI', 'Deep Learning', 'Attention Mechanism'],
              category: 'Mobile',
              featured: false,
            },
            {
              id: 'p10',
              title: 'Enhanced Emotion Classification via Multimodal Fusion',
              summary: 'Research paper on emotion classification using multimodal fusion of physiological and vocal signals from daily-life wearables. Developed deep learning models for speech emotion recognition, heart rate-based emotion detection, and an attention-based fusion model achieving 94% accuracy. The research demonstrates novel fusion architecture combining physiological signals (PPG heart rate and EDA) with vocal features (MFCCs, prosodic features) through early, late, and hybrid fusion strategies. Includes comprehensive experimental results, performance metrics, and implementation details for real-world deployment.',
              hrefs: [{ href: 'https://github.com/Shandeepsugumar/Research_paper.git', label: 'GitHub' }],
              tags: ['Research', 'Deep Learning', 'Multimodal Fusion', 'Attention Mechanism', 'Python', 'TensorFlow'],
              category: 'Research',
              featured: true,
            },
            {
              id: 'p4',
              title: 'Online Learning Platform',
              summary: 'Bootstrap + Node + MongoDB e-learning platform with CI/CD using Docker, Jenkins, Kubernetes.',
              hrefs: [{ href: 'https://github.com/ShandeepSugumar/online-learning-platform.git', label: 'GitHub' }],
              tags: ['Node', 'MongoDB', 'Bootstrap', 'CI/CD'],
              category: 'Web',
              featured: true,
            },
            {
              id: 'p5',
              title: 'Podcast Streaming Web App',
              summary: 'MERN app integrating iTunes API with playback, favorites, and responsive UI.',
              hrefs: [
                { href: 'https://github.com/ShandeepSugumar/Podcast.git', label: 'GitHub' },
                { href: 'https://podcast-orpin.vercel.app', label: 'Live Demo', live: true },
              ],
              tags: ['React', 'Express', 'API'],
              category: 'Web',
              featured: false,
            },
            {
              id: 'p6',
              title: 'Mobile Shopping System (Java + JDBC)',
              summary: 'Console app demonstrating CRUD with MySQL using pure JDBC.',
              hrefs: [{ href: 'https://github.com/ShandeepSugumar/Java-JDBC.git', label: 'GitHub' }],
              tags: ['Java', 'MySQL', 'CLI'],
              category: 'Java',
              featured: false,
            },
            {
              id: 'p7',
              title: 'Ping Pong Game (JavaFX)',
              summary: 'Desktop arcade game with animation and collision detection.',
              hrefs: [{ href: 'https://github.com/ShandeepSugumar/Ping-Pong-Game-using-Java.git', label: 'GitHub' }],
              tags: ['JavaFX', 'Game'],
              category: 'Java',
              featured: true,
            },
            {
              id: 'p11',
              title: 'EB Bill Calculation System',
              summary: 'Java application for calculating Electricity Board (EB) bills with HTML-based user interface and JDBC for database connectivity. Features automated bill calculation based on consumption units, user-friendly HTML interface for input and display, database integration for storing customer data and billing records, and efficient bill computation with different tariff rates.',
              hrefs: [{ href: 'https://github.com/Shandeepsugumar/EB_Bill_Calculation.git', label: 'GitHub' }],
              tags: ['Java', 'JDBC', 'HTML', 'MySQL'],
              category: 'Java',
              featured: false,
            },
            {
              id: 'p8',
              title: 'CI/CD for Online Learning Platform',
              summary: 'Docker images, Jenkins pipelines, and Kubernetes manifests for automated deployments.',
              hrefs: [{ href: 'https://github.com/ShandeepSugumar/online-learning-platform.git', label: 'Repository' }],
              tags: ['Docker', 'Jenkins', 'K8s'],
              category: 'DevOps',
              featured: true,
            },
            {
              id: 'p12',
              title: 'Podcast App CI/CD Pipeline',
              summary: 'Complete CI/CD pipeline implementation for Podcast streaming application using Jenkins and Docker. Features automated build and deployment pipeline with Jenkinsfile, Docker containerization with Dockerfile, automated email notifications on pipeline triggers, localhost deployment using Docker images and containers, and seamless integration with MERN stack application for continuous integration and deployment.',
              hrefs: [
                { href: 'https://github.com/Shandeepsugumar/Podcast.git', label: 'GitHub' },
                { href: 'https://podcast-orpin.vercel.app', label: 'Live Demo', live: true },
              ],
              tags: ['Jenkins', 'Docker', 'CI/CD', 'DevOps', 'Pipeline'],
              category: 'DevOps',
              featured: true,
            },
          ];

          const [activeCategory, setActiveCategory] = useState('Mobile');
          const [showFeatured, setShowFeatured] = useState(false);
          const projectsGridRef = useRef(null);
          const [currentScrollIndex, setCurrentScrollIndex] = useState(0);
          
          // Ref callback to ensure scroll starts at 0
          const setGridRef = (element) => {
            projectsGridRef.current = element;
            if (element) {
              element.scrollLeft = 0;
              // Also set it after a microtask to ensure it sticks
              setTimeout(() => {
                if (element) element.scrollLeft = 0;
              }, 0);
            }
          };

          const filtered = allProjects.filter(p => p.category === activeCategory && (!showFeatured || p.featured));

          // Dynamically set card widths to ensure exactly 2 cards fit
          useEffect(() => {
            if (filtered.length < 3) return; // Only for scrollable grids
            
            const grid = projectsGridRef.current;
            if (!grid) return;
            
            const updateCardWidths = () => {
              const containerWidth = grid.clientWidth;
              const gap = 16; // 1rem = 16px (matches CSS gap)
              // Use 48% of container width per card instead of 50% for better fit
              const cardWidth = (containerWidth * 0.48) - (gap / 2);
              
              const cards = grid.querySelectorAll('.project-card');
              cards.forEach((card) => {
                card.style.width = `${cardWidth}px`;
                card.style.minWidth = `${cardWidth}px`;
                card.style.maxWidth = `${cardWidth}px`;
                card.style.flexBasis = `${cardWidth}px`;
              });
            };
            
            // Update on mount and resize
            updateCardWidths();
            
            const resizeObserver = new ResizeObserver(updateCardWidths);
            resizeObserver.observe(grid);
            
            // Also update after a short delay to ensure DOM is ready
            const timeoutId = setTimeout(updateCardWidths, 100);
            
            return () => {
              resizeObserver.disconnect();
              clearTimeout(timeoutId);
            };
          }, [filtered.length, activeCategory, showFeatured]);

          // Ensure scroll starts at 0 on initial load and when cards change
          // This ensures p1 and p2 are always shown by default
          useEffect(() => {
            const grid = projectsGridRef.current;
            if (!grid) return;
            
            // Force scroll to 0 immediately and multiple times to ensure it sticks
            const resetScroll = () => {
              if (grid) {
                grid.scrollLeft = 0;
                grid.scrollTo({ left: 0, behavior: 'instant' });
                setCurrentScrollIndex(0);
              }
            };
            
            // Reset immediately
            resetScroll();
            
            // Reset on next frame
            requestAnimationFrame(() => {
              resetScroll();
            });
            
            // Reset after multiple delays to ensure DOM is ready and cards are rendered
            const timeoutId1 = setTimeout(resetScroll, 50);
            const timeoutId2 = setTimeout(resetScroll, 150);
            const timeoutId3 = setTimeout(resetScroll, 300);
            const timeoutId4 = setTimeout(resetScroll, 500);
            const timeoutId5 = setTimeout(resetScroll, 800);
            const timeoutId6 = setTimeout(resetScroll, 1000);
            
            // Use MutationObserver to reset scroll when DOM changes (debounced)
            let resetTimeout;
            const observer = new MutationObserver(() => {
              clearTimeout(resetTimeout);
              resetTimeout = setTimeout(() => {
                resetScroll();
              }, 100);
            });
            
            observer.observe(grid, { childList: true });
            
            return () => {
              clearTimeout(timeoutId1);
              clearTimeout(timeoutId2);
              clearTimeout(timeoutId3);
              clearTimeout(timeoutId4);
              clearTimeout(timeoutId5);
              clearTimeout(timeoutId6);
              clearTimeout(resetTimeout);
              observer.disconnect();
            };
          }, [filtered.length, activeCategory, showFeatured]);

          // Disable auto-scroll - user will control navigation manually
          // Auto-scroll functionality disabled for manual control

          // Reset scroll when category or filter changes
          useEffect(() => {
            if (projectsGridRef.current) {
              const grid = projectsGridRef.current;
              
              // Reset immediately
              const resetScroll = () => {
                if (grid) {
                  grid.scrollLeft = 0;
                  grid.scrollTo({ left: 0, behavior: 'instant' });
                  setCurrentScrollIndex(0);
                }
              };
              
              resetScroll();
              
              // Use requestAnimationFrame to ensure DOM is ready
              requestAnimationFrame(() => {
                resetScroll();
              });
              
              // Multiple attempts to ensure scroll is reset after cards render
              const timeoutId1 = setTimeout(resetScroll, 100);
              const timeoutId2 = setTimeout(resetScroll, 300);
              const timeoutId3 = setTimeout(resetScroll, 500);
              const timeoutId4 = setTimeout(resetScroll, 800);
              const timeoutId5 = setTimeout(resetScroll, 1000);
              
              return () => {
                clearTimeout(timeoutId1);
                clearTimeout(timeoutId2);
                clearTimeout(timeoutId3);
                clearTimeout(timeoutId4);
                clearTimeout(timeoutId5);
              };
            }
          }, [activeCategory, showFeatured, filtered.length]);

          const handlePrev = () => {
            const grid = projectsGridRef.current;
            if (!grid) return;
            
            const firstCard = grid.querySelector('.project-card');
            if (!firstCard) return;
            
            const cardWidth = firstCard.offsetWidth;
            const gap = 16; // 1rem = 16px (matches CSS gap)
            const scrollAmount = cardWidth + gap;
            
            // Calculate max scroll position
            const maxScroll = grid.scrollWidth - grid.clientWidth;
            const currentScroll = grid.scrollLeft;
            
            // Move back by one card width
            const newScroll = Math.max(0, currentScroll - scrollAmount);
            grid.scrollTo({ left: newScroll, behavior: 'smooth' });
            
            // Update index based on scroll position
            const newIndex = Math.round(newScroll / scrollAmount);
            setCurrentScrollIndex(newIndex);
          };

          const handleNext = () => {
            const grid = projectsGridRef.current;
            if (!grid) return;
            
            const firstCard = grid.querySelector('.project-card');
            if (!firstCard) return;
            
            const cardWidth = firstCard.offsetWidth;
            const gap = 16; // 1rem = 16px (matches CSS gap)
            const scrollAmount = cardWidth + gap;
            
            // Calculate max scroll position
            const maxScroll = grid.scrollWidth - grid.clientWidth;
            const currentScroll = grid.scrollLeft;
            
            // Move forward by one card width
            const newScroll = Math.min(maxScroll, currentScroll + scrollAmount);
            grid.scrollTo({ left: newScroll, behavior: 'smooth' });
            
            // Update index based on scroll position
            const newIndex = Math.round(newScroll / scrollAmount);
            setCurrentScrollIndex(newIndex);
          };

          const showNavigation = filtered.length > 2;

          return (
            <div className="projects-interactive">
              <div className="projects-tabs" role="tablist" aria-label="Project Categories">
                {categories.map((c) => (
                  <button
                    key={c.key}
                    role="tab"
                    aria-selected={activeCategory === c.key}
                    className={`projects-tab${activeCategory === c.key ? ' active' : ''}`}
                    onClick={() => setActiveCategory(c.key)}
                  >
                    {c.label}
                  </button>
                ))}
                <span className="projects-tab-ink" data-active={activeCategory}></span>
              </div>

              <div className="projects-toolbar">
                <div className="projects-count">
                  {filtered.length} {showFeatured ? 'Featured' : ''} Project{filtered.length !== 1 ? 's' : ''}
                </div>
                <label className="projects-toggle">
                  <input type="checkbox" checked={showFeatured} onChange={(e) => setShowFeatured(e.target.checked)} />
                  <span>Show featured</span>
                </label>
              </div>

              <div className="projects-grid-wrapper">
                {showNavigation && (
                  <button 
                    className="projects-nav-btn projects-nav-prev"
                    onClick={handlePrev}
                    aria-label="Previous projects"
                  >
                    ‹
                  </button>
                )}
                <div 
                  className={`projects-grid${filtered.length >= 3 ? ' projects-grid-scroll' : ''}${activeCategory === 'Mobile' ? ' mobile-apps-grid' : ' innovative-projects-grid'}`}
                  ref={setGridRef}
                >
                  {filtered.length === 0 ? (
                    <div className="project-empty">No projects yet in this category.</div>
                  ) : (
                    filtered.map((p, index) => {
                      const handleMouseMove = (e) => {
                        const card = e.currentTarget;
                        const rect = card.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;
                        const centerX = rect.width / 2;
                        const centerY = rect.height / 2;
                        const rotateX = (y - centerY) / 10;
                        const rotateY = (centerX - x) / 10;
                        card.style.setProperty('--mouse-x', `${rotateY}deg`);
                        card.style.setProperty('--mouse-y', `${rotateX}deg`);
                      };
                      
                      const handleMouseLeave = (e) => {
                        const card = e.currentTarget;
                        card.style.setProperty('--mouse-x', '0deg');
                        card.style.setProperty('--mouse-y', '0deg');
                      };
                      
                      return (
                        <div 
                          className={`project-card project-card-neo${activeCategory === 'Mobile' ? ' mobile-app-card' : ' innovative-project-card'}`} 
                          key={p.id}
                          style={{'--card-index': index}}
                          onMouseMove={handleMouseMove}
                          onMouseLeave={handleMouseLeave}
                        >
                          {activeCategory === 'Mobile' ? (
                            <div className="mobile-card-glow"></div>
                          ) : (
                            <div className="innovative-card-glow"></div>
                          )}
                          <div className="project-card-header">
                            <h3>{p.title}</h3>
                            {p.featured && <span className="project-badge">Featured</span>}
                          </div>
                          <p className="project-summary">{p.summary}</p>
                          <div className="project-tags">
                            {p.tags.map((t) => (
                              <span className="project-tag" key={p.id + t}>{t}</span>
                            ))}
                          </div>
                          <div className="project-btn-row">
                            {p.hrefs.map((h) => (
                              <a key={h.href} href={h.href} target="_blank" rel="noopener noreferrer" className={`project-btn${h.live ? ' live-demo-btn' : ''}`}>
                                {h.live ? (<><span role="img" aria-label="rocket" style={{marginRight: '8px'}}>🚀</span>Live Demo</>) : h.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
                {showNavigation && (
                  <button 
                    className="projects-nav-btn projects-nav-next"
                    onClick={handleNext}
                    aria-label="Next projects"
                  >
                    ›
                  </button>
                )}
              </div>
            </div>
          );
        })()}
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="certificates-section">
        <h2 className="certificates-title">Certificates & Credentials</h2>
        {(() => {
          const certCategories = [
            { key: 'all', label: 'All Certificates' },
            { key: 'oracle', label: 'Oracle' },
            { key: 'nvidia', label: 'NVIDIA' },
            { key: 'deloitte', label: 'Deloitte' },
            { key: 'other', label: 'Other' },
          ];

          const allCertificates = [
            { 
              id: 'c1', 
              title: 'Oracle Certified Java SE 17 Developer', 
              issuer: 'Oracle', 
              category: 'oracle',
              thumbnail: OCPJSE17,
              fullImage: JAVASE17,
              type: 'Professional Certification',
              year: '2024',
            },
            { 
              id: 'c2', 
              title: 'Oracle Certified APEX Cloud Developer', 
              issuer: 'Oracle', 
              category: 'oracle',
              thumbnail: APEX24CDOCP,
              fullImage: APEX,
              type: 'Professional Certification',
              year: '2024',
            },
            { 
              id: 'c6', 
              title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional', 
              issuer: 'Oracle', 
              category: 'oracle',
              thumbnail: OCI25GAIOCP,
              fullImage: Oracle_Gen_AI,
              type: 'Professional Certification',
              year: '2025',
            },
            { 
              id: 'c3', 
              title: 'Fundamentals of Deep Learning', 
              issuer: 'NVIDIA', 
              category: 'nvidia',
              thumbnail: NVIDIA,
              fullImage: NVIDIA,
              type: 'Course Completion',
              year: '2024',
            },
            { 
              id: 'c4', 
              title: 'Technology Job Simulation', 
              issuer: 'Deloitte', 
              category: 'deloitte',
              thumbnail: Deloitte,
              fullImage: Deloitte,
              type: 'Job Simulation',
              year: '2024',
            },
            { 
              id: 'c5', 
              title: 'Web Development Internship', 
              issuer: 'CoderOne', 
              category: 'other',
              thumbnail: intership,
              fullImage: intership,
              type: 'Internship',
              year: '2023',
            },
          ];

          const [activeCertCategory, setActiveCertCategory] = useState('all');
          const [certSearchQuery, setCertSearchQuery] = useState('');
          const certificatesGridRef = useRef(null);
          const [currentCertScrollIndex, setCurrentCertScrollIndex] = useState(0);

          const filteredCerts = allCertificates.filter(c => {
            const matchesCategory = activeCertCategory === 'all' || c.category === activeCertCategory;
            const matchesSearch = c.title.toLowerCase().includes(certSearchQuery.toLowerCase()) || 
                                 c.issuer.toLowerCase().includes(certSearchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
          });

          const showCertNavigation = filteredCerts.length >= 3;

          const handleCertPrev = () => {
            const grid = certificatesGridRef.current;
            if (!grid) return;
            
            const firstCard = grid.querySelector('.certificate-card-modern');
            if (!firstCard) return;
            
            const cardWidth = firstCard.offsetWidth;
            const gap = 24; // 1.5rem = 24px
            const scrollAmount = cardWidth + gap;
            
            const maxScroll = grid.scrollWidth - grid.clientWidth;
            const currentScroll = grid.scrollLeft;
            const newScroll = Math.max(0, currentScroll - scrollAmount);
            grid.scrollTo({ left: newScroll, behavior: 'smooth' });
            
            const newIndex = Math.round(newScroll / scrollAmount);
            setCurrentCertScrollIndex(newIndex);
          };

          const handleCertNext = () => {
            const grid = certificatesGridRef.current;
            if (!grid) return;
            
            const firstCard = grid.querySelector('.certificate-card-modern');
            if (!firstCard) return;
            
            const cardWidth = firstCard.offsetWidth;
            const gap = 24; // 1.5rem = 24px
            const scrollAmount = cardWidth + gap;
            
            const maxScroll = grid.scrollWidth - grid.clientWidth;
            const currentScroll = grid.scrollLeft;
            const newScroll = Math.min(maxScroll, currentScroll + scrollAmount);
            grid.scrollTo({ left: newScroll, behavior: 'smooth' });
            
            const newIndex = Math.round(newScroll / scrollAmount);
            setCurrentCertScrollIndex(newIndex);
          };

          // Reset scroll when category or search changes
          useEffect(() => {
            if (certificatesGridRef.current) {
              certificatesGridRef.current.scrollLeft = 0;
              setCurrentCertScrollIndex(0);
            }
          }, [activeCertCategory, certSearchQuery, filteredCerts.length]);

          return (
            <div className="certificates-interactive">
              <div className="certificates-tabs" role="tablist" aria-label="Certificate Categories">
                {certCategories.map((cat) => (
                  <button
                    key={cat.key}
                    role="tab"
                    aria-selected={activeCertCategory === cat.key}
                    className={`certificates-tab${activeCertCategory === cat.key ? ' active' : ''}`}
                    onClick={() => setActiveCertCategory(cat.key)}
                  >
                    {cat.label}
                  </button>
                ))}
                <span className="certificates-tab-ink" data-active={activeCertCategory}></span>
              </div>

              <div className="certificates-search-wrapper">
                <input
                  type="text"
                  placeholder="Search certificates..."
                  className="certificates-search"
                  value={certSearchQuery}
                  onChange={(e) => setCertSearchQuery(e.target.value)}
                />
                <span className="certificates-count">{filteredCerts.length} certificate{filteredCerts.length !== 1 ? 's' : ''}</span>
              </div>

              <div className="certificates-grid-wrapper">
                {showCertNavigation && (
                  <button 
                    className="certificates-nav-btn certificates-nav-prev"
                    onClick={handleCertPrev}
                    aria-label="Previous certificates"
                  >
                    ‹
                  </button>
                )}
                <div 
                  className={`certificates-grid${filteredCerts.length >= 3 ? ' certificates-grid-scroll' : ''} innovative-certificates-grid`}
                  ref={certificatesGridRef}
                >
                  {filteredCerts.map((cert, index) => {
                    const handleMouseMove = (e) => {
                      const card = e.currentTarget;
                      const rect = card.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      const centerX = rect.width / 2;
                      const centerY = rect.height / 2;
                      const rotateX = (y - centerY) / 10;
                      const rotateY = (centerX - x) / 10;
                      card.style.setProperty('--mouse-x', `${rotateY}deg`);
                      card.style.setProperty('--mouse-y', `${rotateX}deg`);
                    };
                    
                    const handleMouseLeave = (e) => {
                      const card = e.currentTarget;
                      card.style.setProperty('--mouse-x', '0deg');
                      card.style.setProperty('--mouse-y', '0deg');
                    };

                    return (
                      <div 
                        className="certificate-card-modern innovative-certificate-card"
                        key={cert.id}
                        style={{'--card-index': index}}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="innovative-certificate-glow"></div>
                        <div className="certificate-card-image-wrapper">
                          <img src={cert.thumbnail} alt={cert.title} className="certificate-card-img" />
                          <div className="certificate-card-overlay">
                            <button 
                              className="certificate-view-btn" 
                              onClick={() => { setModalImg(cert.fullImage); setModalOpen(true); }}
                            >
                              <span>👁️</span> View Full
                            </button>
                          </div>
                        </div>
                        <div className="certificate-card-content">
                          <div className="certificate-card-badges">
                            <span className="certificate-badge-type">{cert.type}</span>
                            <span className="certificate-badge-year">{cert.year}</span>
                          </div>
                          <h3 className="certificate-card-title">{cert.title}</h3>
                          <p className="certificate-card-issuer">Issued by <strong>{cert.issuer}</strong></p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {showCertNavigation && (
                  <button 
                    className="certificates-nav-btn certificates-nav-next"
                    onClick={handleCertNext}
                    aria-label="Next certificates"
                  >
                    ›
                  </button>
                )}
              </div>
            </div>
          );
        })()}
      </section>

      {/* Achievements & Activities Section */}
      <section id="achievements" className="achievements-section">
        <h2 className="achievements-title">Achievements & Activities</h2>
        {(() => {
          const achievementTypes = [
            { key: 'all', label: 'All Achievements' },
            { key: 'hackathon', label: 'Hackathons' },
            { key: 'competition', label: 'Competitions' },
            { key: 'award', label: 'Awards' },
            { key: 'activity', label: 'Activities' },
          ];

          const allAchievements = [
            { 
              id: 'a1', 
              title: 'KEC Hackathon Winner', 
              description: 'Secured 2nd place at the KEC Hackathon for delivering a high-impact solution with strong problem solving, teamwork, and end to end implementation.',
              type: 'hackathon',
              category: 'hackathon',
              image: KEC_Hackthon,
              year: '2024',
              position: '2nd Place',
              icon: '🏆',
            },
          ];

          const [activeAchievementType, setActiveAchievementType] = useState('all');
          const [achievementSearchQuery, setAchievementSearchQuery] = useState('');
          const achievementsGridRef = useRef(null);
          const [currentAchievementScrollIndex, setCurrentAchievementScrollIndex] = useState(0);

          const filteredAchievements = allAchievements.filter(a => {
            const matchesType = activeAchievementType === 'all' || a.category === activeAchievementType;
            const matchesSearch = a.title.toLowerCase().includes(achievementSearchQuery.toLowerCase()) || 
                                 a.description.toLowerCase().includes(achievementSearchQuery.toLowerCase());
            return matchesType && matchesSearch;
          });

          const showAchievementNavigation = filteredAchievements.length >= 3;

          const handleAchievementPrev = () => {
            const grid = achievementsGridRef.current;
            if (!grid) return;
            
            const firstCard = grid.querySelector('.achievement-card-modern');
            if (!firstCard) return;
            
            const cardWidth = firstCard.offsetWidth;
            const gap = 24; // 1.5rem = 24px
            const scrollAmount = cardWidth + gap;
            
            const maxScroll = grid.scrollWidth - grid.clientWidth;
            const currentScroll = grid.scrollLeft;
            const newScroll = Math.max(0, currentScroll - scrollAmount);
            grid.scrollTo({ left: newScroll, behavior: 'smooth' });
            
            const newIndex = Math.round(newScroll / scrollAmount);
            setCurrentAchievementScrollIndex(newIndex);
          };

          const handleAchievementNext = () => {
            const grid = achievementsGridRef.current;
            if (!grid) return;
            
            const firstCard = grid.querySelector('.achievement-card-modern');
            if (!firstCard) return;
            
            const cardWidth = firstCard.offsetWidth;
            const gap = 24; // 1.5rem = 24px
            const scrollAmount = cardWidth + gap;
            
            const maxScroll = grid.scrollWidth - grid.clientWidth;
            const currentScroll = grid.scrollLeft;
            const newScroll = Math.min(maxScroll, currentScroll + scrollAmount);
            grid.scrollTo({ left: newScroll, behavior: 'smooth' });
            
            const newIndex = Math.round(newScroll / scrollAmount);
            setCurrentAchievementScrollIndex(newIndex);
          };

          // Reset scroll when category or search changes
          useEffect(() => {
            if (achievementsGridRef.current) {
              achievementsGridRef.current.scrollLeft = 0;
              setCurrentAchievementScrollIndex(0);
            }
          }, [activeAchievementType, achievementSearchQuery, filteredAchievements.length]);

          return (
            <div className="achievements-interactive">
              <div className="achievements-tabs" role="tablist" aria-label="Achievement Types">
                {achievementTypes.map((type) => (
                  <button
                    key={type.key}
                    role="tab"
                    aria-selected={activeAchievementType === type.key}
                    className={`achievements-tab${activeAchievementType === type.key ? ' active' : ''}`}
                    onClick={() => setActiveAchievementType(type.key)}
                  >
                    {type.label}
                  </button>
                ))}
                <span className="achievements-tab-ink" data-active={activeAchievementType}></span>
              </div>

              <div className="achievements-search-wrapper">
                <input
                  type="text"
                  placeholder="Search achievements..."
                  className="achievements-search"
                  value={achievementSearchQuery}
                  onChange={(e) => setAchievementSearchQuery(e.target.value)}
                />
                <span className="achievements-count">{filteredAchievements.length} achievement{filteredAchievements.length !== 1 ? 's' : ''}</span>
              </div>

              <div className="achievements-grid-wrapper">
                {showAchievementNavigation && (
                  <button 
                    className="achievements-nav-btn achievements-nav-prev"
                    onClick={handleAchievementPrev}
                    aria-label="Previous achievements"
                  >
                    ‹
                  </button>
                )}
                <div 
                  className={`achievements-grid${filteredAchievements.length >= 3 ? ' achievements-grid-scroll' : ''} innovative-achievements-grid`}
                  ref={achievementsGridRef}
                >
                  {filteredAchievements.length === 0 ? (
                    <div className="achievement-empty">No achievements found in this category.</div>
                  ) : (
                    filteredAchievements.map((achievement, index) => {
                      const handleMouseMove = (e) => {
                        const card = e.currentTarget;
                        const rect = card.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;
                        const centerX = rect.width / 2;
                        const centerY = rect.height / 2;
                        const rotateX = (y - centerY) / 10;
                        const rotateY = (centerX - x) / 10;
                        card.style.setProperty('--mouse-x', `${rotateY}deg`);
                        card.style.setProperty('--mouse-y', `${rotateX}deg`);
                      };
                      
                      const handleMouseLeave = (e) => {
                        const card = e.currentTarget;
                        card.style.setProperty('--mouse-x', '0deg');
                        card.style.setProperty('--mouse-y', '0deg');
                      };

                      return (
                        <div 
                          className="achievement-card-modern innovative-achievement-card"
                          key={achievement.id}
                          style={{'--card-index': index}}
                          onMouseMove={handleMouseMove}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className="innovative-achievement-glow"></div>
                          <div className="achievement-card-header">
                            <div className="achievement-icon-large">{achievement.icon}</div>
                            <div className="achievement-card-badges">
                              <span className="achievement-badge-position">{achievement.position}</span>
                              <span className="achievement-badge-year">{achievement.year}</span>
                            </div>
                          </div>
                          <div className="achievement-card-image-wrapper">
                            <img src={achievement.image} alt={achievement.title} className="achievement-card-img" />
                            <div className="achievement-card-overlay">
                              <button 
                                className="achievement-view-btn" 
                                onClick={() => { setModalImg(achievement.image); setModalOpen(true); }}
                              >
                                <span>👁️</span> View
                              </button>
                            </div>
                          </div>
                          <div className="achievement-card-content">
                            <h3 className="achievement-card-title">{achievement.title}</h3>
                            <p className="achievement-card-description">{achievement.description}</p>
                            <div className="achievement-card-footer">
                              <span className="achievement-type-badge">{achievement.type}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
                {showAchievementNavigation && (
                  <button 
                    className="achievements-nav-btn achievements-nav-next"
                    onClick={handleAchievementNext}
                    aria-label="Next achievements"
                  >
                    ›
                  </button>
                )}
              </div>
            </div>
          );
        })()}
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section contact-modern">
        <div 
          className="contact-card innovative-contact-card"
          onMouseMove={(e) => {
            const card = e.currentTarget;
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 15;
            const rotateY = (centerX - x) / 15;
            card.style.setProperty('--mouse-x', `${rotateY}deg`);
            card.style.setProperty('--mouse-y', `${rotateX}deg`);
          }}
          onMouseLeave={(e) => {
            const card = e.currentTarget;
            card.style.setProperty('--mouse-x', '0deg');
            card.style.setProperty('--mouse-y', '0deg');
          }}
        >
          <div className="innovative-contact-glow"></div>
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
                <div className="contact-modern-detail"><span className="contact-modern-icon">➤</span> <span style={{ color: '#ff8a00' }}>shandeepgeek@gmail.com</span></div>
                <div className="contact-modern-detail"><span className="contact-modern-icon">📞</span> <span style={{ color: '#ff8a00' }}>+91 7010161033</span></div>
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