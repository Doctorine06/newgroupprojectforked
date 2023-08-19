import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
export const Home = () => {
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();
  useEffect(() => {
    if (
      store.token !== null &&
      store.token !== "" &&
      store.token !== undefined
    ) {
      navigate("/auth/thebookclub");
    }
  }, [store.token]);
  return (
    <div className="text-center mt-5">
      <hr />
      <h1 className="open">The Landing Page Journey</h1>
      <hr />
      <Link to="/auth/searchingthebookclub/home/auth/search/thebookclub/home">
        Jamaica🇯🇲
      </Link>
      <span className="close"></span>
      <iframe
        width="560"
        height="294"
        src="https://www.bandlab.com/embed/shout/?id=c9732925-c33e-ee11-b8f0-000d3a41ec20"
        frameborder="0"
        allowfullscreen
      ></iframe>
      <Link to="/starttheexclusivereads">Counter.js</Link>
      <iframe
        width="100%"
        height="300"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1578287335&color=%23a2d7e8&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
      <div>
        {" "}
        <a
          href="https://soundcloud.com/steven-jeffery-580805407"
          title="Itsdjkc"
          target="_blank"
          // style="color: #cccccc; text-decoration: none;"
        >
          {/* Itsdjkc */}
        </a>{" "}
        ·{" "}
        <a
          href="https://soundcloud.com/steven-jeffery-580805407/rodrigo-m4a"
          title="Rodrigo.m4a"
          target="_blank"
          // style="color: #cccccc; text-decoration: none;"
        >
          {/* Rodrigo.m4a */}
        </a>
      </div>

      <hr />
      <p>Suprise Athemn</p>
      <Link to="/searchthebookclub">Sherlock Gnomes Meme</Link>

      <div className="homepage">
        <a href="https://archive.org/details/adventuresofsher00doylrich/mode/2up?ref=ol&view=theater">
          <img
            className="Adjust"
            src="https://ia802607.us.archive.org/BookReader/BookReaderImages.php?zip=/4/items/adventuresofsher00doylrich/adventuresofsher00doylrich_jp2.zip&file=adventuresofsher00doylrich_jp2/adventuresofsher00doylrich_0001.jp2&id=adventuresofsher00doylrich&scale=4&rotate=0"
          />

          <p className="lead">The featured book (cover)</p>
        </a>
        <hr></hr>
        <iframe
          width="370"
          height="250"
          src="https://www.youtube.com/embed/5m6Dpvky20Y"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <a href="https://www.youtube.com/embed/5m6Dpvky20Y">
          <p id="watson"> Como Esta ? How are you</p>
          <hr></hr>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/pxj20DQee98"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </a>
        <p>Children's Tab</p>
        <hr />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/i6yFRXUDC-w"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <hr />
        <p>Sherlock Holmes #25:</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/0-Hj_bi9Qto"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <a href="https://youtu.be/0-Hj_bi9Qto">
          <p>The Empty House</p>
        </a>
        Line Leader: "On this page you can browse"
      </div>

      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Login
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="false"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Titulo
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <nav className="navbar navbar-light bg-light">
                <div className="flo">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="icon">This is The Sub Navbar</span>
                  </button>
                  <ul className="push">
                    <div
                      className="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      <div>
                        <span className="sherlock">SoundCloud.com</span>
                        <Link to="/starttheexclusivereads">
                          <button type="submit">Submit</button>
                        </Link>
                      </div>

                      <li className="nav-item">
                        <Link to="/">
                          <span className="nav-link active" aria-current="page">
                            Home
                          </span>
                        </Link>
                      </li>
                      <li
                        className="nav-item"
                        a
                        href="https://www.youtube.com/watch?v=ZrxCRySeHNE"
                      >
                        <Link to="/Discoveryourword/book">
                          <span className="nav-link">
                            Discover Your Palabra
                          </span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/auth/searchingthebookclub/home">
                          <span className="nav-link">Search</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        {!store.token ? (
                          <Link to="/login">
                            <span className="nav-link">Login</span>
                          </Link>
                        ) : (
                          <Link to="/logout">
                            <span
                              onClick={() => actions.logut()}
                              className="nav-link"
                            >
                              Log out
                            </span>
                          </Link>
                        )}
                      </li>
                    </div>
                  </ul>
                </div>
              </nav>
            </div>
            <div class="modal-footer">
              <Link to="/logout">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close This Or to logout
                </button>
              </Link>
              <Link to="/">
                <button type="button" class="btn btn-primary">
                  Understood
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
