import React from "react";
import { image } from "../data/data";

function About() {
  return <div id = 'about'>
    <h2>About Me</h2>
    <p>I am a Web Developer who is also interested in music and synthesizers</p>
    <img src = {image} alt = "I made this"></img>
  </div>;
}

export default About;
