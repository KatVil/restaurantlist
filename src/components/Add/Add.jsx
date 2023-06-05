import React from "react";
import { globalContext } from "../../contexts/globalContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

function Add() {
  const { dispatch } = useContext(globalContext);
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (/\S+\s*/.test(text) && /\S+\s*/.test(description)) {
      dispatch({
        type: "ADD_CAFE",
        payload: {
          text,
          image,
          description,
          address,
          id: Date.now(),
        },
      });

      setText("");
      setImage("");
      setDescription("");
      setAddress("");
    } else {
      alert("Please no empty fields");
    }
  }

  return (
    <>
      <form className="mb-3" onSubmit={handleSubmit}>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Cafe name</label>
          <div className="col-sm-10">
            <input
              type="action"
              className="form-control"
              id="action"
              placeholder="input name"
              onChange={(event) => setText(event.target.value)}
              value={text}
            />
          </div>
          <label className="col-sm-2 col-form-label">Photo</label>
          <div className="col-sm-10">
            <input
              type="action"
              className="form-control"
              id="action"
              placeholder="input photo URL"
              onChange={(event) => setImage(event.target.value)}
              value={image}
            />
          </div>
          <label className="col-sm-2 col-form-label">Description</label>
          <div className="col-sm-10">
            <input
              type="action"
              className="form-control"
              id="action"
              placeholder="input description"
              onChange={(event) => setDescription(event.target.value)}
              value={description}
            />
          </div>
          <label className="col-sm-2 col-form-label">Address</label>
          <div className="col-sm-10">
            <input
              type="action"
              className="form-control"
              id="ction"
              placeholder="input adress"
              onChange={(event) => setAddress(event.target.value)}
              value={address}
            />
          </div>
          <div className="col-sm-10">
            <button type="submit" className="btn btn-outline-secondary btn-lg">
              Add new
            </button>
          </div>

          <Link to={`/cardList`}>
            <button type="button" class="btn btn-outline-secondary btn-lg">
              The List
            </button>
          </Link>
        </div>
      </form>
    </>
  );
}

export default Add;
