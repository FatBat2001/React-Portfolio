import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Adham Khaled </span>
            from <span className="purple"> Giza, Egypt.</span>
            <br />
            I am currently employed as a software R & D Engineer at AGI.
            <br />
            I am going to graduate with a CS degree from Helwan University This
            semster
            <br />
            <br />
            Apart from coding I'm a hardcore gamer if you know you know 💀💀
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
