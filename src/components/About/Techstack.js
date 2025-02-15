import React from "react";
import { Col, Row } from "react-bootstrap";
import { VscGithub } from "react-icons/vsc"
import {
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiExpress,
  SiSocketdotio,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import { TbBrandTailwind } from "react-icons/tb";
import {
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa"
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { SiShadcnui } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} title="Next.js" className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} title="TypeScript" className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} title="Shadcn" className="tech-icons">
        <SiShadcnui />
      </Col>
      <Col xs={4} md={2} title="Firebase" className="tech-icons">
        <IoLogoFirebase />
      </Col>
      <Col xs={4} md={2} title="React.js" className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} title="HTML 5" className="tech-icons">
        <FaHtml5 />
      </Col>
      <Col xs={4} md={2} title="CSS 3" className="tech-icons">
        <FaCss3Alt />
      </Col>
      <Col xs={4} md={2} title="JavaScript" className="tech-icons">
        <IoLogoJavascript />
      </Col>
      <Col xs={4} md={2} title="Tailwind CSS" className="tech-icons">
        <TbBrandTailwind />
      </Col>
      <Col xs={4} md={2} title="Node.js" className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} title="Express.js" className="tech-icons">
        <SiExpress />
      </Col>
      <Col xs={4} md={2} title="MongoDB" className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} title="GIT" md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} title="GitHub" className="tech-icons">
        <VscGithub />
      </Col>
      <Col xs={4} md={2} title="Socket.IO" className="tech-icons">
        <SiSocketdotio />
      </Col>
    </Row>
  );
}

export default Techstack;
