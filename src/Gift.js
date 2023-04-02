import React from "react";
import emoji from "./emoji.png";
import qr from "./qr.jpeg";

const Gift = () => {
  return (
    <div>
      <div>
        <h1 className="emoji-text text-white">
          {" "}
          ¿Estás lista para tu regalo?
          <br />{" "}
          <span className="text-white-emphasis touch-text">toca la carita</span>
        </h1>
        <img
          className="img-fluid emoji heartbeat pb-3"
          src={emoji}
          alt={"touch me"}
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        />
      </div>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content bg-text1">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close bg-danger"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img className="img-fluid" src={qr} alt="qr" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gift;
