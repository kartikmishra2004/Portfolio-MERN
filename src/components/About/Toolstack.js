import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaWindows, FaFigma } from "react-icons/fa"
import { TbBrandVite  } from "react-icons/tb"
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} title="Windows" className="tech-icons">
        <FaWindows />
      </Col>
      <Col xs={4} md={2} title="VS Code" className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} title="Postman" className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} title="Vite" className="tech-icons">
        <TbBrandVite />
      </Col>
      <Col xs={4} md={2} title="Vercel" className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} title="Figma" className="tech-icons">
        <FaFigma />
      </Col>
    </Row>
  );
}

export default Toolstack;
