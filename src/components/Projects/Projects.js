import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={editor}
              isBlog={false}
              title="MyELibarary"
              description="E library system Developed Using REST full API'S which helps managing a library in automated way to operate a library with efficiency and at reduced costs."
              ghLink="https://github.com/FatBat2001/online-bookstore"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Promoters-Intl"
              description="Dynamic website for Event scheduling Company to show there work ,  Interactive modern front-end design  CRUD for manipulating the Events of the company mailer module to support contacting the company"
              ghLink="https://github.com/FatBat2001/Promoters"
              demoLink="https://promoters-intl.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Search Engine"
              description="Practical project on the positional index structure,  System can perform boolean queries, phrase queries ranking retrieved docs based on vector space model"
              ghLink="https://github.com/FatBat2001/SearchEngineDemo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Object Detection Model"
              description="Built An Object Detection Desktop application. Python, Tensorflow with the help of Tensorflow framework using it’s functional API to build a model consisting of two models , Regressionmodel to detect the boundaries of the object and a classification model to classify different objects."
              ghLink="https://github.com/FatBat2001/Object_Detection_tensorflow"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="To Do list Chrome Extension"
              description="An Extension for chromium based web browser to speed up producivity by simply accessing it from extension panel"
              ghLink="https://github.com/FatBat2001/react-todo-list"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
