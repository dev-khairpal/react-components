import ReactDOM from "react-dom";

const Modal = ({onClose, children, actionBar}) => {
  return ReactDOM.createPortal(
    <div>
      {/* gray background */}
      <div className="absolute inset-0 bg-gray-300 opacity-80" onClick={onClose}></div>
      <div className="absolute inset-10 bg-white">{children}{actionBar}</div>
    </div>,

    document.querySelector(".modal-container")
  );
};

export default Modal;
