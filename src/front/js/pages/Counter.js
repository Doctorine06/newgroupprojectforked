import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import "../../styles/Clock.css";
const Counter = () => {
  const { store, actions } = useContext(Context);
  const [bookTitle, setBookTitle] = useState("");
  const [name, setName] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    actions.search(name, bookTitle);
    let seconds = 0;

    setInterval(() => {
      seconds++;
      ReactDOM.render(
        <Clock sec={seconds} />,
        document.querySelector("#clock")
      );
    });
  };

  return (
    <div>
      <div class="text-center">
        <nav className="navbar navbar-light bg-light">
          <div className="container">
            <Link to="/searcthebook">
              <span className="navbar-brand mb-0 h1">"Home"</span>
            </Link>
            <Link to="/auth/searchingthebookclub/home">
              <span className="clock">"Look It Up"</span>
            </Link>

            <Link to="/auth/search/thebookclub/home">
              <button ocClick={(e) => handleClick(e)}>Espanol</button>
            </Link>
          </div>
        </nav>
        <a href="https://writer.com/product/api/">
          <b>https://writer.com/product/api/</b>
        </a>
        <div className="ml-auto">
          <hr></hr>
          <div className="SherlockHolmes">
            <input placeholder="Reloj" size="115;"></input>
            <button>
              {" "}
              <i class="fa-sharp fa-light fa-user-clock fa-shake"></i>Start The
              Clock
            </button>
            <p>About ME</p>

            <p>
              Entusiasta sustantivo
              <p className="sherlock">
                1. una persona que está muy interesada en una actividad o tema
                en particular:
              </p>
              <hr></hr>
            </p>

            <hr></hr>
          </div>
        </div>
        <div>
          {" "}
          <ol>
            <li>
              <iframe
                width="560"
                height="202"
                src="https://www.bandlab.com/embed/?id=a24f825a-3c22-ee11-a9bb-000d3a41e8b8"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </li>
            <hr />
            <p>In the "About me section"</p>
            <li>
              <iframe
                width="560"
                height="282"
                src="https://www.bandlab.com/embed/shout/?id=6408119c-3927-ee11-a9bb-000d3a41e8b8"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </li>
            <hr />{" "}
            <li>
              <div className="SherlockyWatson">
                <iframe
                  width="560"
                  height="202"
                  src="https://www.bandlab.com/embed/?id=5459bd77-8226-ee11-a9bb-000d3a41e8b8"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
            </li>
            <hr />
            <li>
              <iframe
                width="560"
                height="202"
                src="https://www.bandlab.com/embed/?id=0c397c8a-f22a-ee11-a9bb-000d3a41e8b8"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </li>
          </ol>{" "}
        </div>
        <hr />
        Please do not share your personal information with others
        <hr />
        <iframe
          width="100%"
          height="300"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1498308427&color=%238000ff&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
        <div>
          {/* <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"> */}
          <a
            href="https://soundcloud.com/user-647680600"
            title="Jeffery"
            target="_blank"
            // style="color: #cccccc; text-decoration: none;"
          >
            Jeffery
          </a>{" "}
          ·{" "}
          <a
            href="https://soundcloud.com/user-647680600/emastered_please-father-1"
            title="eMastered_Please Father"
            target="_blank"
            // style="color: #cccccc; text-decoration: none;"
          >
            eMastered_Please Father
          </a>
        </div>
      </div>
    </div>
  );
};

export default Counter;
