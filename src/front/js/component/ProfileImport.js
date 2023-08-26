// import algoliasearch from "algoliasearch/lite";
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Profile = () => {
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();
  useEffect(() => {
    if (
      store.token !== null &&
      store.token !== "" &&
      store.token !== undefined
    ) {
      useNavigate("/thebookclubfavorites/thebookclub");
    }
  }, [store.token]);

  return (
    <div>
      <img src="https://files.slack.com/files-tmb/T0BFXMWMV-F05J3TX9H55-e650fefdc3/img_4786_720.jpg" />
    </div>
  );
};

export default Profile;
