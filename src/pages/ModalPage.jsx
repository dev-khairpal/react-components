import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";
const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);
  
  const handleClose = ()=>{
    setShowModal(false);
  }

  const handleClick = () => {
    setShowModal(true);
  };

  const actionBar = <Button onClick={handleClose} danger>Close</Button>
  const modal = <Modal onClose={handleClose} actionBar={actionBar}>
  <p>
    Agree the terms and Conditions.
  </p>
  </Modal>
  return (
    <div className="mb-20">
      <Button onClick={handleClick} danger>Open Modal</Button>
      {showModal && modal}
    </div>
  );
};

export default ModalPage;
