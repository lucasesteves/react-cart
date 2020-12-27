import React from 'react';
import { Wrapper, PageItem } from './styles';

interface IPagination {
    productsPerPage: number;
    totalProducts: number;
    paginate: (page:number) => void;
    currentPage: number;
}

const Pagination:React.FC<IPagination> = ({ productsPerPage, totalProducts, currentPage, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }
    
    return(
        <Wrapper>
            {pageNumbers.map((number,index) => (
                <PageItem key={index} page={currentPage === number ? true : false } onClick={() => paginate(number)}>
                {number}
                </PageItem>
            ))}
        </Wrapper>
    )
}

export default Pagination