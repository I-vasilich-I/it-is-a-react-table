import React from 'react';
import './Pagination.scss';

interface IProps {
  pagination: number;
  setPagination: React.Dispatch<React.SetStateAction<number>>;
  maxPagination: number;
}

function Pagination({pagination, setPagination, maxPagination}: IProps):JSX.Element {
  let isNextDisabled = pagination === maxPagination;
  let isPrevDisabled = pagination === 1;
  const handlePrevClick = () => {
    if (pagination > 1) setPagination(pagination - 1);
    return;
  }

  const handleNextClick = () => {
    if (pagination < maxPagination) setPagination(pagination + 1);
    return;
  }

  return (
    <div className="pagination">
      <button onClick={handlePrevClick} disabled={isPrevDisabled}>Previous</button>
      <span>{pagination}</span>
      <button onClick={handleNextClick} disabled={isNextDisabled}>Next</button>
    </div>
  );
}

export default Pagination;