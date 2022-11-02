import React from "react";
import "./Home.css";
import { BsInstagram } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

export default function Home() {
  return (
    <div>
      <main className="section" id="home">
        <div className="container">
          <div className="home-wrapper">
            <div className="home-content">
              <h1>Hello, I'm Abdujamil</h1>
              <p>I am a web developer</p>
              <div className="webs">
                <ul>
                  <li>
                    <a href="https://www.instagram.com/">
                      <BsInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/">
                      <FaTelegramPlane />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/">
                      <AiFillGithub />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
