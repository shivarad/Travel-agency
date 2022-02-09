import { PaginationButton, PaginationWrapper } from "./paginationStyles";

const Pagination = (props: {
  currentPage: number;
  setCurentPage: (page: number) => void;
  totalPages: number;
}) => {
    
  const nextPage = () => {
    if (props.currentPage !== props.totalPages - 1 && props.totalPages !== 0)
      props.setCurentPage(props.currentPage + 1);
  };
  const prevPage = () => {
    if (props.currentPage !== 0 && props.totalPages !== 0)
      props.setCurentPage(props.currentPage - 1);
  };

  return (
    <PaginationWrapper>
      <PaginationButton onClick={() => props.setCurentPage(0)}>
        First
      </PaginationButton>
      <PaginationButton onClick={prevPage}>Prev</PaginationButton>

      <p>
        Page {props.currentPage + 1} of {props.totalPages}
      </p>
      <PaginationButton onClick={nextPage}>Next</PaginationButton>
      <PaginationButton
        onClick={() => props.setCurentPage(props.totalPages - 1)}
      >
        Last
      </PaginationButton>
    </PaginationWrapper>
  );
};

export default Pagination;
