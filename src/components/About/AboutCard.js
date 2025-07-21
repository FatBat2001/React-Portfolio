import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I'm Adham Khaled,<br/><br/>
Based in Giza, Egypt. I currently work as a Software Engineer at AGI and hold a Bachelor's degree in Computer Science from Helwan University.<br></br>
I am passionate about software development and technology, with a strong foundation in computer science principles. In my free time,
I look forward to connecting with fellow professionals and exploring opportunities for collaboration and growth in the tech industry.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
