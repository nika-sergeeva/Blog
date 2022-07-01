import React from 'react'
import MyButtonS from '../buttonS/MyButtonS'
import { usePagination } from '../../../hooks/usePagination'

const Pagination = ({totalPages, page, changePage}) => {

    const pagesArray = usePagination(totalPages)

  return (
    <div className="page" >
          {pagesArray.map(i => 
                  <MyButtonS 
                    onClick={() => changePage(i)}
                    key={i} 
                    current={page === i? true : false}> {i} </MyButtonS>)}
    </div> 
  )
}

export default Pagination