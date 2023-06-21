import React from 'react'
import { Pagination } from '@mui/material'

const CustomPagination = ({ pageCount, currentPage, keyword }) => {
    const handlePageChange = (event, page) => {
        let path

        if (keyword) {
            path = `/search/${keyword}/page/${page}`
            // Perform search with keyword and page number
        } else {
            path = `/page/${page}`
            // Navigate to the page with the given page number
        }

        // You can use window.location or your preferred routing mechanism to navigate to the path
        window.location.href = path
    }

    return (
        pageCount > 1 &&
        <Pagination
            count={pageCount}
            page={currentPage}
            variant="outlined"
            shape="rounded"
            onChange={handlePageChange}
        />
    )
}

export default CustomPagination
