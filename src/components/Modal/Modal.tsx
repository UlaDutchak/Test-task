import React, { useState } from 'react';
import Modali from 'react-modal';

type Props = {
  selectedUrl: string;
};

export const Modal: React.FC<Props> = (props) => {
  const { selectedUrl } = props;
  const [modalIsOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transition: 'transform 0.2s',
      transform: 'translate(-50%, -50%)',
    },
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button type="button" className="card-button" onClick={openModal}>
        <img
          src={selectedUrl}
          className="card-img-top"
          alt="..."
        />
      </button>
      <Modali
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <button type="button" onClick={closeModal} className="btn-close" aria-label="Close"></button>
        <img
          src={selectedUrl}
          className="card-img-top"
          alt="..."
        />
      </Modali>
    </>
  );
};
