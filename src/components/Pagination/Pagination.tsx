import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Pagination.scss';

type Props = {
  photosPerPage: number;
  totalPhotos: number;
  paginate: (pageNumber: number, event: React.MouseEvent<HTMLElement>) => void;
};

export const Pagination: React.FC<Props> = (props) => {
  const { photosPerPage, totalPhotos, paginate } = props;
  const [pageNumbers, setPageNumbers] = useState([] as number[]);
  const countOfPages = Math.ceil(totalPhotos / photosPerPage);

  useEffect(() => {
    const arr = [];

    for (let i = 1; i <= countOfPages; i += 1) {
      arr.push(i);
    }

    setPageNumbers(arr);
  }, [pageNumbers]);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a
              href="!#"
              className="page-link"
              onClick={(event:React.MouseEvent<HTMLElement>) => paginate(number, event)}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
