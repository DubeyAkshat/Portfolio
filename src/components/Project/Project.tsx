import { Container } from "./styles";
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/DubeyAkshat/friendly" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href="http://ec2-13-232-26-147.ap-south-1.compute.amazonaws.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Friendly - A Social Media App</h3>
              <p>
              A web-based social media application utilizing Django, PostgreSQL, Celery, Celery Beat, Docker & Nginx. Deployed using AWS, it implements core Django concepts, ensuring optimal code organization, maintainability, and delivering a feature-rich experience.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Django</li>
                <li>PostgreSQL</li>
                <li>Celery</li>
                <li>Celery Beat</li>
                <li>Docker</li>
                <li>Nginx</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              {/* <div className="project-links">
                <a href="https://github.com/DubeyAkshat/mern-chat" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div> */}
            </header>
            <div className="body">
              <h3>MERN-Chat</h3>
              <p>
              A web-based chat application utilizing the MERN Stack. Features include user management, user authentication with JWT, messages & conversations between users. Plan to implement containerization with Docker & deploy with a cloud service.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>React.js</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/thisisankit27/SnapSpeak-chat" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </header>
            <div className="body">
              <h3>SnapSpeak</h3>
              <p>
              An AI powered caption generator & text reader application. Open-sourced the project on GitHub to foster collaboration, knowledge sharing, & community engagement. Individual contribution includes containerization with Docker & Nginx proxy server implemention.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Django</li>
                <li>Docker</li>
                <li>Nginx</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/DubeyAkshat/LoanPrediction" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Loan Approval Status Predictor</h3>
              <p>
              Machine learning project focused on predicting loan approval status, leveraging classification algorithms like Decision Trees and Random Forest Trees to provide accurate insights into application outcomes. Also included performance evaluation metrics.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>Machine Learning</li>
                <li>Google Collab</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}