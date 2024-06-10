import React, { Component } from 'react';
import "./About.css";
import profilePicture from "../assets/profile_me.jpg";
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="split left">
          <div className="centered">
            <img className="profile_image"
            src={profilePicture}
            alt="Profile Pic">
            </img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Bill Huillca</div>
            <div className="brief_description">
              <p>Hi! My name is Bill Huillca and I'm a computer science
              student at the University of Maryland - College Park.
              I enjoy programming, going to the gym, running, and attending
              concerts. A fun fact about me is that I found my passion in
              software development through using automated bots
              to buy shoes that I wanted as a teenager.</p>
            </div>
            <LinkedInLink />
          </div>
        </div>
      </div>
    )
  }
}

function LinkedInLink(){
  return(
    <Link to="https://www.linkedin.com/in/bill-huillca-6b58021a9/">
      <Button variant="contained"color="primary">
        Let's Connect!
        </Button>
        </Link>
  );
}