import React, { useState } from 'react';
import Modali from 'react-modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PhotosList.scss';

type Props = {
  photos: Photos[];
  loading: boolean;
  deletePhoto: (id: number) => void;
};

export const PhotosList: React.FC<Props> = (props) => {
  const { photos, loading, deletePhoto } = props;
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
    <div className="cards">
      {loading ? (
        <>
          {photos.map(photo => {
            return (
              <div className="card" key={photo.id}>
                <button type="button" className="card-button" onClick={openModal}>
                  <img
                    src={photo.url}
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
                    src={photo.url}
                    className="card-img-top"
                    alt="..."
                  />
                </Modali>
                <div className="card-body">
                  <p className="card-text">{photo.title}</p>
                  <button
                    className="btn btn-danger"
                    type="button"
                    onClick={() => deletePhoto(photo.id)}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            );
          })}
        </>
      )
        : <div> Loading... </div>}
    </div>
  );
};
