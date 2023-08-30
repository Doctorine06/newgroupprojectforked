import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
const Single = () => {
  const { store, actions } = useContext(Context);
  const [bookTitle, setBookTitle] = useState("");
  const [name, setName] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    actions.search(name, bookTitle);
  };
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <Link to="/searchthebookclub">
            <span className="navbar-brand mb-0 h1">"Home"</span>
          </Link>

          <Link to="/auth/search/thebookclub">
            <span className="navbar-brand mb-0 h1">"Buscalo"</span>
          </Link>
          <div className="ml-auto">
            <Link to="/">
              <input placeholder="Reloj" size="100px;"></input>
              <button ocClick={(e) => handleClick(e)}>Buscandos</button>
            </Link>
          </div>
        </div>
      </nav>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <Link to="/">
        <input placeholder="The Reloj" size="100;"></input>
        <button ocClick={(e) => handleClick(e)}>Inquistivo</button>
      </Link>
    </div>
  );
};
export const Navbar1 = () => {
  return;
  <div>
    <h1>Spolighted Books</h1>
    <div className="text-center mt-5">
      <h1>New Page Loading</h1>
      <span>
        Let's start the basic writings on how this web page was structured.
      </span>

      <div className="form-control">
        Discover (Needs to be up under The Algolia)
        <input
          className="form-control me-2 ml-100"
          placeholder=" Sherlock Holmes:
      
6 ADVENTURES OF SHERLOCK HOLMES
      "
          size="125"
          cols="25"
          rows="25"
        />
        <a href="https://archive.org/details/adventuresofsher00doylrich/mode/2up?ref=ol&view=theater">
          <img
            className="Adjust"
            src="https://ia802607.us.archive.org/BookReader/BookReaderImages.php?zip=/4/items/adventuresofsher00doylrich/adventuresofsher00doylrich_jp2.zip&file=adventuresofsher00doylrich_jp2/adventuresofsher00doylrich_0001.jp2&id=adventuresofsher00doylrich&scale=4&rotate=0"
          />
        </a>
      </div>
    </div>
    <div class="card">
      <div class="card-header">Featured</div>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">This. Is Imagination. :flag-jm:</p>
        <Link to="/thebookclubfavorites">
          <button onClick={(e) => handleClick(e)} class="btn btn-primary">
            Write Yours to match mine! :flag-us:,:flag-jm:, :flag-us:
          </button>
        </Link>
      </div>
    </div>
  </div>;
};

export default Single;
