import React from "react";

import styles from "./Pagination.module.scss";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import { selectCurPage } from "@redux/slices/filter/filterSlice";

type Props = {
  onChangePage: (index: number) => void;
};

export const Pagination: React.FC<Props> = React.memo(({ onChangePage }): any => {
  const value = useSelector(selectCurPage);

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel="->"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={2}
      pageCount={3}
      previousLabel="<-"
      renderOnZeroPageCount={null}
      forcePage={value - 1}
    />
  );
});
