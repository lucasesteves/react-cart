import React from 'react';
import { Wrapper, PageItem } from './styles';

interface IPagination {
    productsPerPage: number;
    totalProducts: number;
    paginate: (page:number) => void;
    currentPage: number;
}

const Pagination = ({
  productsPerPage, totalProducts, currentPage, paginate,
}:IPagination) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Wrapper>
      {pageNumbers.map((number) => (
        <PageItem key={number} page={currentPage === number} onClick={() => paginate(number)}>
          {number}
        </PageItem>
      ))}
    </Wrapper>
  );
};

export default Pagination;
