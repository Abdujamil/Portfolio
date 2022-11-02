import React from "react";
import "./Work.css";
// import Link from "react-router-dom";

export default function Work() {
  return (
    <div>
      <main className="section" id="work">
        <div className="container">
          <div className="work-wrapper">
            <h1>Work</h1>
            <div className="grid">
              <div className="grid-project">
                <div className="card">
                  <a href="https://abdujamil.github.io/Moon/">
                    {" "}
                    <img
                      src="https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=502&q=80"
                      alt="Сards source"
                    />
                  </a>
                </div>
                <div className="card-text">Moon travel</div>
              </div>
              <div className="grid-project">
                <div className="card">
                  <a href="#" >
                    <img
                      src="https://images.unsplash.com/photo-1664813953897-ada06817c48c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=80"
                      alt="Drag n drop"
                    />
                  </a>
                </div>
                <div className="card-text">Drag and Drop</div>
              </div>
              <div className="grid-project">
                <div className="card">
                  <a path="/slider">
                    <img
                      src="https://images.unsplash.com/photo-1664032304991-c029bb4d161d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                      alt="Slider"
                    />
                  </a>
                </div>
                <div className="card-text">Slider</div>
              </div>
              <div className="grid-project">
                <div className="card">
                  <a path="/miniGame">
                    <img
                      src="https://images.unsplash.com/photo-1664112152959-d6320cab692a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                      alt="Mini game"
                    />
                  </a>
                </div>
                <div className="card-text">Mini game</div>
              </div>
              <div className="grid-project">
                <div className="card">
                  <a path="/todoList">
                    <img
                      src="https://images.unsplash.com/photo-1662981645170-b72211be374f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80  "
                      alt="Todo List"
                    />
                  </a>
                </div>
                <div className="card-text">Todo List</div>
              </div>
              <div className="grid-project">
                <div className="card">
                  <a path="/aimGame">
                    <img
                      src="https://images.unsplash.com/photo-1662975516305-225a12e79959?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                      alt="Aim game"
                    />
                  </a>
                </div>
                <div className="card-text">Aim game</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
