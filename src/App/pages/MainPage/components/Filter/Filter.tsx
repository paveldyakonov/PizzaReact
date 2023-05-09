import React, { useCallback, useState } from "react";

import Dropdown from "@components/Dropdown";
import styles from "./Filter.module.scss";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectSort, setSortId } from "@redux/slices/filter/filterSlice";
import { useSearchParams } from "react-router-dom";

type Props = {};

const filterValues: string[] = ["rating", "price", "title"];
const filterSortValues: string[] = ["популярности", "цене", "алфавиту"];

const Filter: React.FC<Props> = ({}): any => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isVisible, setIsVisible] = useState(false);

  const value = useSelector(selectSort);

  return (
    <div className={styles.filter}>
      <div className={styles.filter__text}>Сортировка по:</div>
      <Dropdown
        sortValues={filterSortValues}
        selected={filterSortValues[value]}
        setSelected={(index: number) => {
          dispatch(setSortId(index));
          searchParams.set("filterValue", filterValues[index]);
          setSearchParams(searchParams);
        }}
        isVisible={isVisible}
        setIsVisible={useCallback((isVis: boolean) => setIsVisible(isVis), [isVisible])}
      />
    </div>
  );
};

export default React.memo(Filter);
