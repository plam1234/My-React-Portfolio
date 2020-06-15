import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <p>
          Greetings! My name is Peter Lam. I'm a full-stack developer with
          experience in Java, Node JS, React, Express, MongoDB, MySQL.
        </p>

        <p>
          I recently finish attending Columbia University Full-Stack Developer
          Coding Bootcamp.
        </p>

        <p>
          My goal is to obtain as much knowledge about coding as possible! I
          enjoy coding a lot!
        </p>
      </Content>
    </div>
  );
}

export default AboutPage;
