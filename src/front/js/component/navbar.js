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
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon">ES</span>
        </button>
      </Link>
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
  );
};
