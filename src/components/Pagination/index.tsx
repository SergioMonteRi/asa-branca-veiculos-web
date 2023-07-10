import ReactPaginate from 'react-paginate';

import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';

import './styles.css';

type Props = {
  pageCount: number;
  pageRange: number;
  onChange?: (pageNumber: number) => void;
  forcePage?: number;
};

const Pagination = ({ pageCount, pageRange, onChange, forcePage }: Props) => {
  return (
    <ReactPaginate
      forcePage={forcePage}
      pageCount={pageCount}
      pageRangeDisplayed={pageRange}
      marginPagesDisplayed={1}
      containerClassName="pagination-container"
      pageLinkClassName="pagination-item"
      breakClassName="pagination-item"
      previousClassName="arrow-previous"
      previousLabel={
        <div className="pagination-arrow-container" data-testid="arrow-previous">
          <ArrowIcon />
        </div>
      }
      nextClassName="arrow-next"
      nextLabel={
        <div className="pagination-arrow-container" data-testid="arrow-next">
          <ArrowIcon />
        </div>
      }
      activeLinkClassName="pagination-link-active"
      disabledClassName="arrow-inactive"
      onPageChange={(items) => (onChange ? onChange(items.selected) : {})}
    />
  );
};

export default Pagination;
