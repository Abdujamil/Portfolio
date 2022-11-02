import React from "react";
import "./Skills.css";
import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3 } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiMaterialui } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import {DiSass} from 'react-icons/di';
import {SiTypescript} from 'react-icons/si';
import {FiDatabase} from 'react-icons/fi';

export default function Skills() {
  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          <h1>Skills</h1>
          <div className="skills-grid">
            <div className="skill">
              <AiFillHtml5 size={60} color='brown' />
              <h3>Html 5</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
            <div className="skill">
              <SiCss3 size={60} color='blue' />
              <h3>CSS 3</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <div className="skill">
              <DiJavascript size={60} color='yellow' />
              <h3>JavaScript</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
            <div className="skill">
              <FaReact size={60}  color='#1b9dde'/>
              <h3>React</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <div className="skill">
              <SiMaterialui size={60} color='#1b5fde'/>
              <h3>Material UI</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <div className="skill">
              <DiSass size={60} color='#fc03db'/>
              <h3>Sass</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            {/* <div className="skill">
              <SiTypescript size={60} color='#1b5fde'/>
              <h3>TypeScript</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <div className="skill">
              <FiDatabase size={60} color='#8682bd'/>
              <h3>MySQL</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <div className="skill">
              <AiFillGithub size={60} />
              <h3>Github</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
