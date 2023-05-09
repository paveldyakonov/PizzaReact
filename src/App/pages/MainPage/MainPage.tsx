import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import CategoriesList from "./components/CategoriesList";
import Filter from "./components/Filter";
import PizzaList from "./components/PizzaList";

import styles from "./MainPage.module.scss";
import { Pagination } from "@components/Pagination";
import { setCategoryId, setCurPage, setFilters } from "@redux/slices/filter/filterSlice";

import { useSearchParams } from "react-router-dom";

export type searchParams = {
  curPage: string;
  filterValue: string;
  categoryId: string;
  searchValue: string;
};

const filterValues: string[] = ["rating", "price", "title"];

const MainPage: React.FC = (): any => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const params: searchParams = {
      curPage: !searchParams.get("page") ? "1" : `${searchParams.get("page")}`,
      filterValue:
        filterValues.indexOf(`${searchParams.get("filterValue")}`) === -1
          ? "0"
          : String(filterValues.indexOf(`${searchParams.get("filterValue")}`)),
      categoryId: !searchParams.get("categoryId") ? "0" : `${searchParams.get("categoryId")}`,
      searchValue: !searchParams.get("search") ? "" : `${searchParams.get("search")}`,
    };
    dispatch(setFilters(params));
  }, [searchParams]);

  const onClickCategory = (index: number) => {
    dispatch(setCategoryId(index));
    searchParams.set("categoryId", String(index));
    setSearchParams(searchParams);
  };

  const onChangePage = (index: number) => {
    dispatch(setCurPage(index));
    searchParams.set("page", String(index));
    setSearchParams(searchParams);
  };

  return (
    <div>
      <div className={styles.category_and_filter}>
        <CategoriesList onClickCategory={(index: any) => onClickCategory(index)} />
        <Filter />
      </div>
      <PizzaList />
      <div className={styles.pagination}>
        <Pagination onChangePage={(index: number) => onChangePage(index)} />
      </div>
    </div>
  );
};
export default MainPage;
