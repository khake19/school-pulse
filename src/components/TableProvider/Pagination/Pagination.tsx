import ReactPaginate from 'react-paginate'
import { chakra } from '@chakra-ui/react'

const StyledPagination = chakra(ReactPaginate, {
  baseStyle: {
    margin: '5px auto',
    display: 'flex',
    listStyle: 'none',
    outline: 'none',
    flexDirection: 'row',
    fontSize: 'sm',
    li: {
      marginRight: '5px',
      a: {
        padding: '0.5rem 0.9rem',
        border: 'solid 1px #f0f0f0',
        cursor: 'pointer',
        outline: 'none',
        backgrondColor: 'brand.500',
        color: 'darken(#f0f0f0, 45%)',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        display: 'inline-block'
      },
      '&:hover': {
        a: {
          backgroundColor: 'brand.500',
          border: 'solid 1px brand.600',
          color: 'white'
        }
      }
    },
    '.active': {
      a: {
        backgroundColor: 'brand.500',
        border: 'solid 1px brand.500',
        color: 'white'
      }
    }
  }
})

interface IPaginationProps {
  pageCount: number
  handlePage: (selected: number) => void
}

const Pagination = (props: IPaginationProps) => {
  const { pageCount, handlePage } = props

  return (
    <StyledPagination
      nextLabel="next"
      onPageChange={(event) => handlePage(event.selected + 1)}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      previousLabel="previous"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination"
      activeClassName="active"
      renderOnZeroPageCount={null}
    />
  )
}

export default Pagination
