import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    actions.logout();
    navigate("/");
    actions.checkForToken();
  };
  return (
    <div id="coloringbook">
      <p>Suprise Athemn</p>
      <div id="coloringbook">
        <div>Use The Spanish Co-Author</div>
      </div>

      <Link to="/">
        <button>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Landing Page Supreme
          </button>
        </button>
      </Link>
      <div>
        <Link to="/searchthebookclub">Sherlock Gnomes Meme</Link>
      </div>
      <hr />
      <div className="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <h1 className="openbook">The Landing Page Journey</h1>
              <hr />
              <Link to="/auth/searchingthebookclub/home/auth/search/thebookclub/home">
                Jamaica🇯🇲
              </Link>
              <span className="close"></span>

              <div>
                <Link to="/auth/buscandoclubllibro/vide/auth/search/thebookclub/home">
                  Puerto Rican🇵🇷
                </Link>
              </div>

              <br />

              <div>
                <Link to="/searchthebookclub">Puerto Rico🇵🇷</Link>
                <div>
                  <hr />
                  <iframe
                    width="560"
                    height="202"
                    src="https://www.bandlab.com/embed/?id=719a7c8e-d33e-ee11-b8f0-000d3a41ec20"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
                <Link to="/starttheexclusivereads">Counter.js</Link>
              </div>
              <hr />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
