import React from "react";

import styles from "./CategoriesList.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";

type Props = {
  onClickCategory: (index: number) => void;
};

const pizzaCategories: string[] = ["Все", "Мясные", "Вегетарианские", "Гриль", "Острые"];

const CategoriesList: React.FC<Props> = ({ onClickCategory }): any => {
  const value = useSelector((state: RootState) => state.filterSlice.categoryId);

  return (
    <ul className={styles.categories}>
      {pizzaCategories.map((category, index) => {
        return (
          <li
            key={category}
            onClick={() => onClickCategory(index)}
            className={value === index ? `${styles.active}` : ""}
          >
            {category}
          </li>
        );
      })}
    </ul>
  );
};

export default React.memo(CategoriesList);
