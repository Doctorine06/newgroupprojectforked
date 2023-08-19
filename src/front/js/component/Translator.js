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
              <Link to="/auth/searchingthebookclub/home/auth/search/thebookclub/home">
                Jamaica🇯🇲
              </Link>
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
              <div>
                <Link to="/auth/buscandoclubllibro/vide/auth/search/thebookclub/home">
                  Puerto Rican🇵🇷
                </Link>
              </div>
              <div>
                <hr></hr>
                <div>
                  <Link to="/auth/search/thebookclub/home">
                    <button className="watson">Titulo</button>
                  </Link>

                  <Link to="/searchthebook">
                    <button className="sherlock" type="button">
                      Title
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
