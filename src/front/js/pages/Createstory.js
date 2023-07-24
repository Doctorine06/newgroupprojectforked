import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Createstory = () => {
  const { store, actions } = useContext(Context);
  const handleClick = (e) => {
    e.preventDefault();
    actions.login(email, password);
  };

  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <Link to="/searchthebookclub">
            <span className="navbar-brand mb-0 h1">"Home"</span>
          </Link>

          <Link to="/auth/search/thebookclub">
            <span className="navbar-brand mb-0 h1">"Look It Up"</span>
          </Link>
          <div className="ml-auto">
            <Link to="/thebookclub">
              <button onClick={(e) => handleClick(e)}>Open</button>
            </Link>
          </div>
        </div>
      </nav>
      <ul className="list-group">
        {store.demo.map((item, index) => {
          return (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between"
              style={{ background: item.background }}
            >
              <Link to="/publishmystory">
                <span>Link to: "publish" </span>
                <span>
                  Open<b>spell</b>test
                </span>
              </Link>
              {
                // Conditional render example
                // Check to see if the background is orange, if so, display the message
                item.background === "orange" ? (
                  <p style={{ color: item.initial }}>
                    Check store/flux.js scroll to the actions to see the code
                  </p>
                ) : null
              }
              <button
                className="btn btn-success"
                onClick={() => actions.changeColor(index, "orange")}
              >
                Publish
              </button>
              <button onClick={(e) => handleClick(e)}>Open</button>
            </li>
          );
        })}
      </ul>
      <br />
      <input maxLength={10}></input>
      <Link to="/">
        <button className="btn btn-primary">Save Draft</button>
      </Link>
    </div>
  );
};

export default Createstory;
