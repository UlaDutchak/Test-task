import React, { useState, useEffect } from 'react';
import './App.scss';
import { getAllPhotos } from './api/api';
import { PhotosList } from './components/PhotosList/PhotosList';
import { Pagination } from './components/Pagination/Pagination';

export const App: React.FC = () => {
  const [photos, setPhotos] = useState([] as Photos[]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurretPage] = useState(1);
  const [photosPerPage] = useState(25);
  const [isReversed, setIsReversed] = useState(false);

  useEffect(() => {
    getAllPhotos()
      .then(respose => {
        setPhotos(respose);
        setLoading(true);
      });
  }, []);

  const deletePhoto = (id: number) => {
    setPhotos(photos.filter(photo => photo.id !== id));
  };

  const reverse = () => {
    setIsReversed(!isReversed);
    setPhotos(photos.reverse());
  };

  const indexOfLastPost = currentPage * photosPerPage;
  const indexOfFirstPost = indexOfLastPost - photosPerPage;
  const currentPhotos = photos.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number, event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setCurretPage(pageNumber);
  };

  return (
    <div className="starter">
      <button type="button" className="btn btn-primary starter__button" onClick={reverse}>reverse</button>
      <div className="container">
        <PhotosList
          photos={currentPhotos}
          loading={loading}
          deletePhoto={deletePhoto}
        />
        <Pagination
          photosPerPage={photosPerPage}
          totalPhotos={photos.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};
