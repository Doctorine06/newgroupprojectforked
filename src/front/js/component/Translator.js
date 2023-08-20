import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const NavbarStretch = () => {
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    actions.logout();
    navigate("/");
    actions.checkForToken();
  };
  return (
    <div>
      <Link to="/searchthebook">
        <button
          type="button"
          className="watson"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          The Book Club Exclusive
        </button>
      </Link>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <div>
                <h1 className="open">The Landing Page Journey</h1>

                <hr />
                <hr />
                <Link to="/auth/buscandoclubllibro/vide/auth/search/thebookclub/home">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    The Book Club Exclusive
                  </h1>
                </Link>
                <Link to="/starttheexclusivereads">Counter.js</Link>
                <Link to="/">Home Page</Link>
              </div>
              <hr />

              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Peter Piper
              <a
                href="https://soundcloud.com/steven-ferguson-646131006"
                title="Steven Ferguson"
                target="_blank"
              >
                href="https://soundcloud.com/steven-ferguson-646131006/friends/s-0KS3sFSbO7R"
                Friends
              </a>
              <div>
                <form>
                  <input></input>
                  <input placeholder="Wah Gwaan"></input>
                  <button type="submit">Submit</button>
                </form>
              </div>
              <button>
                <iframe
                  width="45%"
                  height="58"
                  scrolling="no"
                  frameborder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1597147815%3Fsecret_token%3Ds-0KS3sFSbO7R&color=%2300cc11&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                ></iframe>
              </button>
              <label></label>
              {!store.token ? (
                <Link to="/login">
                  <span className="nav-link">Login</span>
                </Link>
              ) : (
                <Link to="/logout">
                  <span onClick={() => actions.logut()} className="nav-link">
                    Log out
                  </span>
                </Link>
              )}{" "}
              <span>Use The Spanish Co-Author</span>
              <Link to="/searchthebook">The Book Club #search</Link>
              <div>
                <hr />
                <Link to="/auth/searchingthebookclub/home/auth/search/thebookclub/home">
                  Jamaica🇯🇲
                </Link>
                <div>
                  <Link to="/auth/buscandoclubllibro/vide/auth/search/thebookclub/home">
                    Puerto Rican🇵🇷
                  </Link>
                </div>
              </div>
              <div>
                <hr></hr>
                <div>
                  <Link to="/auth/search/thebookclub/home">
                    <button className="watson">Titulo</button>
                  </Link>
                </div>
                <div>
                  <iframe
                    width="100%"
                    height="166"
                    scrolling="no"
                    frameborder="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1597147815%3Fsecret_token%3Ds-0KS3sFSbO7R&color=%2300cc11&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                  ></iframe>
                  <button id="watson">
                    <a
                      href="https://soundcloud.com/steven-ferguson-646131006"
                      title="Steven Ferguson"
                      target="_blank"
                    >
                      Steven Ferguson
                    </a>
                  </button>
                  <Link to="/searchthebook">
                    <button className="sherlock" type="button">
                      Title
                      <a
                        href="https://soundcloud.com/steven-ferguson-646131006/friends/s-0KS3sFSbO7R"
                        title="Friends"
                        target="_blank"
                        // style="color: #cccccc; text-decoration: none;"
                      >
                        Friends
                      </a>
                    </button>
                  </Link>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>

                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
