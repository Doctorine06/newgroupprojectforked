import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Jumbotron1 = () => {
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    actions.logout();
    navigate("/");
    actions.checkForToken();
  };
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="flo">
        <ul className="push">
          <Link to="/thebookclubfavorites">
            <i className="fa-solid fa-bookmark fa-bounce"></i>
          </Link>
          <ul>
            <li>
              <Link to="/auth/search/thebookclub">
                <span>Ingles</span>
              </Link>
            </li>
            <li>
              <Link to="/auth/search/thebookclub/home">
                <span>Spanish</span>
              </Link>
            </li>
            <li>
              <Link to="/publishmystory/auth">
                <span className="colores">Home.thebookclub</span>
              </Link>
            </li>
            <li>
              <Link to="/searchthebookclub">
                <span className="colores">Search.thebookclub</span>
              </Link>
            </li>
            <li>
              <Link to="/auth/search/thebookclub">
                <span>The Book Club Exclusive</span>
              </Link>
            </li>
            <li>
              <Link to="/auth/search/thebookclub/home">
                <span>El Club del Libro.Exclusivo</span>
              </Link>
            </li>
          </ul>
         
        </ul>
      </div>
    </nav>
  );
};
