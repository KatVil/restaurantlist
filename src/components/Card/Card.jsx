import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { globalContext } from "../../contexts/globalContext";
import "../../styles/Main.css";
import defaultImage from "../../img/cat.avif";

function Card({ id, text, image, description, location }) {
  const { dispatch } = useContext(globalContext);

  function deleteCard(id) {
    dispatch({
      type: "DELETE_CAFE",
      payload: id,
    });
  }

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{text}</h5>
          <img
            src={image ? image : defaultImage}
            alt="card_picture"
            className="picture"
          />
          <p className="card-text">{description}</p>
          <p className="subtitle">{location}</p>
        </div>
        <Link to={`/edit/${id}`}>
          <button type="button" className="btn btn-outline-warning btn-lg">
            Edit
          </button>
        </Link>
        <Link>
          <button
            type="button"
            className="btn btn-outline-danger btn-lg"
            onClick={() => deleteCard(id)}
          >
            Delete
          </button>
        </Link>
      </div>
    </>
  );
}

export default Card;
