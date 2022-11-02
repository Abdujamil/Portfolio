import React from 'react'
import SourceCode from '../../Svg/sourceCode'
import './Aboute.css'


export default function About() {
    return (
      <div>
        <main className="section" id="about">
          <div className="container">
            <div className="about-section">
              <div className="content">
                <h1>About me</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. 
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="img-wrapper">
                <SourceCode className='about-svg'/>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
}
