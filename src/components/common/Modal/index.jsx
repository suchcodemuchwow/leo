import { createPortal } from "react-dom";

import { useEffect } from "react";
import "./modal.scss";

const Modal = ({ children, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return isOpen
    ? createPortal(
        <div className="shadow">
          <div className="content">
            {children}
            <button className="close" onClick={onClose}>
              &times;
            </button>
          </div>
        </div>,
        document.getElementById("modal")
      )
    : null;
};

export { Modal };
