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
    <div>
      <Link to="/">
        <button>
          <span className="icon">ES</span>
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
      <div class="modal" tabindex="-1">
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

              <span>Use The Spanish Co-Author</span>
              <div>
                <Link to="/auth/buscandoclubllibro/vide/auth/search/thebookclub/home">
                  Puerto Rican🇵🇷
                </Link>
              </div>

              <br />

              <div>
                <iframe
                  width="560"
                  height="202"
                  src="https://www.bandlab.com/embed/?id=719a7c8e-d33e-ee11-b8f0-000d3a41ec20"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
                <Link to="/searchthebookclub">Puerto Rico🇵🇷</Link>
                <hr />
                <Link to="/starttheexclusivereads">Counter.js</Link>
              </div>
              <hr />
              <iframe
                width="100%"
                height="300"
                scrolling="no"
                frameborder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1578287335&color=%237c82cd&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              ></iframe>

              <hr />
              <p>Suprise Athemn</p>
              <Link to="/searchthebookclub">Sherlock Gnomes Meme</Link>
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
