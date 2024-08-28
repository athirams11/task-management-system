import React from "react";
import BackPage from "../../assets/icons/BackPageBtton.svg";
import "./style.css";

const Modal = ({ title, showModal, closeModal, children }) => {
  if (!showModal) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <div onClick={closeModal} className="close-button flex g-1">
            <img src={BackPage} alt="Back To Page" /> 
            <span>{title}</span>
          </div>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
