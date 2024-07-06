import React from 'react';
import Modal from 'react-modal';

const ModalWrapper = ({ isOpen, onClose, children, customStyles = {} }) => {

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        content: customStyles.content,
        overlay: customStyles.overlay,
      }}
    >
      {children}
    </Modal>
  );
};

export default ModalWrapper;
