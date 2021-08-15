import React from 'react';
import PropTypes, { InferProps } from 'prop-types';

function Pagination({ pageSize, total, paginate }: InferProps<typeof Pagination.propTypes>) {
    const pageNumbers: number[] = [];
    const totalPages = Math.ceil(total / pageSize);
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }
    return (
        <nav className='mt-3'>
            <ul className='pagination justify-content-center'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a href='#' role='button' className='page-link' onClick={() => paginate(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

Pagination.propTypes = {
    pageSize: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    paginate: PropTypes.func.isRequired
}

export default Pagination