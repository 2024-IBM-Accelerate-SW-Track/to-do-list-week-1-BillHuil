import React, { Component } from 'react';
import "../pages/About.css"

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="split left">
          <div className="centered">
            <img className="profile_image"
            src="/src/assets/<profile_image.jpg>"
            alt="Profile Pic">
            </img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Bill Huillca</div>
            <div className="brief_description">
              Hi! My name is Bill Huillca and I'm a computer science
              student at the University of Maryland - College Park.
              I enjoy programming, going to the gym, running, and attending
              concerts. A fun fact about me is that I found my passion in
              software development through using automated bots
              to buy shoes that I wanted as a teenager.
            </div>
          </div>
        </div>
      </div>
    )
  }
}