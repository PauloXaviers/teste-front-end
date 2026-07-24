import type { ReactNode } from "react";
import closeIcon from "../../assets/close-icon.png";
import "./Modal.scss";

interface ModalProps {
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

const Modal = ({ onClose, title, children }: ModalProps) => {
  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={title || "Modal"}
    >
      <div className="modal-panel">
        <button
          type="button"
          className="modal-close-button"
          onClick={onClose}
          aria-label="Fechar modal"
        >
          <img src={closeIcon} alt="Fechar" />
        </button>
        {title ? (
          <div className="modal-header">
            <h3 className="modal-title">{title}</h3>
          </div>
        ) : null}
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
