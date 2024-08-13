import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import TxtOptimizer from "../../Assets/Projects/TxtOptimizer.png";
import PlatePages from "../../Assets/Projects/PlatePages.png";
import NimbusBook from "../../Assets/Projects/NimbusBook.png";
import FXRateMaster from "../../Assets/Projects/FXRateMaster.png";
import VerbiGenie from "../../Assets/Projects/VerbiGenie.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NimbusBook}
              isBlog={false}
              title="NimbusBook"
              description="NimbusBook is a cloud-based notes application built with the MERN stack. It features user authentication, allowing users to securely manage their notes. Users can create, update, and delete notes with ease. The focus is on providing a clean, user-friendly interface to enhance the note-taking experience."
              ghLink="https://github.com/kartikmishra2004/NimbusBook"
              demoLink="https://nimbusbook.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FXRateMaster}
              isBlog={false}
              title="FXRateMaster"
              description="FXRateMaster is a currency converter app that allows users to easily convert amounts between different currencies. It provides real-time exchange rates and a user-friendly interface for seamless currency conversion. The app is designed to offer accurate and up-to-date information, making it a useful tool for anyone needing to manage or track currency exchanges."
              ghLink="https://github.com/kartikmishra2004/FXRateMaster"
              demoLink="https://fxratemaster.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PlatePages}
              isBlog={false}
              title="Plate Pages"
              description="Plate Pages is a food recipes application built with React.js. It enables users to discover random recipes and search for their favorites. The app features a clean, responsive UI for an engaging user experience across all devices. Explore the code to see how React components and API integration work together to deliver a dynamic recipe finder."
              ghLink="https://github.com/kartikmishra2004/Plate-Pages"
              demoLink="https://platepages.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TxtOptimizer}
              isBlog={false}
              title="TxtOptimizer"
              description="TxtOptimizer is a React-based web application designed to help users optimize text for improved readability and effectiveness. TxtOptimizer allows users to manipulate their text as they wish, including converting to uppercase or lowercase, removing extra spaces, and providing a text summary with word count, character count, and average reading time. "
              ghLink="https://github.com/kartikmishra2004/TxtOptimizer"
              demoLink="https://txtoptimizer.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={VerbiGenie}
              isBlog={false}
              title="VerbiGenie"
              description="VerbiGenie is a smart chatbot built using Google Gemini, designed to generate human-like responses in real-time. It excels in understanding context and providing engaging, natural conversations, making it a versatile tool for various applications."
              ghLink="https://github.com/kartikmishra2004/VerbiGenie-Cha"
              demoLink="https://verbi-genie.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
