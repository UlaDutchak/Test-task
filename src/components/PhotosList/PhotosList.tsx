import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PhotosList.scss';
import { Modal } from '../Modal/Modal';

type Props = {
  photos: Photos[];
  loading: boolean;
  deletePhoto: (id: number) => void;
};

export const PhotosList: React.FC<Props> = (props) => {
  const { photos, loading, deletePhoto } = props;

  return (
    <div className="cards">
      {loading ? (
        <>
          {photos.map(photo => {
            return (
              <div className="card" key={photo.id}>
                <Modal selectedUrl={photo.url} />
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
