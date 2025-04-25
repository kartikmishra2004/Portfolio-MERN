import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import TxtOptimizer from "../../Assets/Projects/TxtOptimizer.png";
import PlatePages from "../../Assets/Projects/PlatePages.png";
import NimbusBook from "../../Assets/Projects/NimbusBook.png";
import Zylonet from "../../Assets/Projects/Zylonet.png";
import BuyMeASoda from "../../Assets/Projects/BuyMeASoda.png";
import FXRateMaster from "../../Assets/Projects/FXRateMaster.png";
import VerbiGenie from "../../Assets/Projects/VerbiGenie.png";
import Togetherable from '../../Assets/Projects/Togetherable.png'
import TurboRequest from "../../Assets/Projects/TurboReques.png";

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
              imgPath={TurboRequest}
              isBlog={false}
              title="Turbo Request"
              description="Turbo Request is a fast and SEO-optimized web-based API testing platform built with Next.js, TypeScript, MongoDB, and ShadCN. It allows developers to create and manage collections of GET, POST, PUT, and DELETE requests with custom headers and body. Designed with performance and clean UI in mind, it offers a smooth, Postman-like experience directly in the browser."
              ghLink="https://github.com/kartikmishra2004/turborequest"
              demoLink="https://turborequest.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Togetherable}
              isBlog={false}
              title="Togetherable"
              description="Togetherable is a peer support community platform where people with different disabilities can share their experiences, offer support, and form communities. Features could include message boards, video chat rooms, and group discussions that are fully accessible to people with visual or hearing impairments."
              ghLink="https://github.com/kartikmishra2004/Togetherable"
              demoLink="https://togetherable.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BuyMeASoda}
              isBlog={false}
              title="Buy Me a Soda"
              description="Buy Me a Soda is a Next.js crowdfunding platform where users log in via GitHub, create personalized pages to showcase business ideas, and raise funds. It features a customizable dashboard, secure authentication with NextAuth, and integrates MongoDB and Cloudinary for data and media management."
              ghLink="https://github.com/kartikmishra2004/Buy-Me-a-Soda"
              demoLink="https://buymeasoda.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Zylonet}
              isBlog={false}
              title="Zylonet"
              description="ZyloNet is a social media platform built with the MERN stack, allowing users to register, create profiles, post content, and engage in real-time chat. It features user authentication, post exploration, follow/unfollow functionality, and a real-time messaging system using Socket.IO."
              ghLink="https://github.com/kartikmishra2004/Zylonet"
              demoLink="https://zylonet.vercel.app/"
            />
          </Col>
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
              ghLink="https://github.com/kartikmishra2004/VerbiGenie-ChatBot"
              demoLink="https://verbi-genie.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
