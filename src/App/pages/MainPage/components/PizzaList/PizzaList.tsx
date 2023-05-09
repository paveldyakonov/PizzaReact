import React, { useEffect } from "react";
import { Meta } from "@config/meta";
import PizzaCard from "@components/PizzaCard";
import { PizzaCardSkeleton } from "@components/Skeletons/PizzaCardSkeleton";

import styles from "./PizzaList.module.scss";
import { Pizza } from "@redux/slices/filter/types";
import { selectCurPage, selectSort, setFilters } from "@redux/slices/filter/filterSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "@redux/store";
import { selectPizza } from "@redux/slices/pizzas/pizzasSlice";
import { FetchPizzaArgs } from "@redux/slices/pizzas/types";
import { fetchPizzas } from "@redux/slices/pizzas/asyncActions";

type Props = {};

const filterValues: string[] = ["rating", "price", "title"];

const PizzaList: React.FC<Props> = ({}): any => {
  const dispatch: AppDispatch = useDispatch();

  const filterValue = useSelector(selectSort);
  const curPage = useSelector(selectCurPage);
  const categoryId = useSelector((state: RootState) => state.filterSlice.categoryId);
  const searchValue = useSelector((state: RootState) => state.filterSlice.searchValue);
  const items = useSelector(selectPizza);
  const isLoading = useSelector((state: RootState) => state.pizzasSlice.meta);

  useEffect(() => {
    window.scrollTo(0, 0);
    const request = () => {
      let params: FetchPizzaArgs = {
        sortBy: filterValues[filterValue],
        page: curPage,
        limit: 4,
      };
      if (!!categoryId) params.category = categoryId;
      if (searchValue) params.title = searchValue;
      dispatch(fetchPizzas(params));
    };

    request();
  }, [searchValue, filterValue, curPage, categoryId]);

  return (
    <div>
      <div className={styles.title}>Все пиццы</div>
      <div className={styles["pizza-list"]}>
        {isLoading === Meta.loading &&
          [...new Array(6)].map((_, index) => <PizzaCardSkeleton key={index} />)}
        {isLoading === Meta.success &&
          items.map((item: Pizza, index) => (
            <PizzaCard
              key={index}
              image={item.imageUrl}
              name={item.title}
              dough={item.types}
              sizes={item.sizes}
              price={item.price}
              id={item.id}
              rating={item.rating}
            />
          ))}
      </div>
    </div>
  );
};

export default React.memo(PizzaList);
