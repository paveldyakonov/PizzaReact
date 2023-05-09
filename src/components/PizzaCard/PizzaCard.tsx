import React, { useState } from "react";

import styles from "./PizzaCard.module.scss";
import { addItem } from "@redux/slices/cart/cartSlice";
import { Pizza } from "@redux/slices/cart/types";
import { useDispatch } from "react-redux";

export type PizzaCardProps = {
  image: string;
  name: string;
  dough: number[];
  sizes: string[];
  price: string;
  id: string;
  rating: string;
};

const PizzaDough = {
  "0": "тонкое",
  "1": "традиционное",
};

const PizzaCard: React.FC<PizzaCardProps> = ({
  image,
  name,
  dough,
  sizes,
  price,
  id,
  rating,
}): any => {
  const [activeDough, setActiveDough] = useState(dough[0]);
  const [activeSize, setActiveSize] = useState(0);
  const dispatch = useDispatch();

  const onClickAdd = () => {
    const item: Pizza = {
      id,
      title: name,
      price,
      imageUrl: image,
      type: activeDough === 0 ? PizzaDough[0] : PizzaDough[1],
      size: sizes[activeSize],
    };
    dispatch(addItem(item));
  };

  return (
    <div className={styles.card}>
      <img className={styles.card__img} src={image} alt="pizza" />
      <div className={styles.card__name}>{name}</div>
      <div className={styles.card__filter}>
        <div className={styles["filter-dough"]}>
          {dough.map((kind: number, index) => {
            return (
              <div
                key={kind}
                className={`${styles.thin} ${activeDough === kind ? styles.active : ""}`}
                onClick={() => setActiveDough(kind)}
              >
                {kind === 0 ? PizzaDough[0] : PizzaDough[1]}
              </div>
            );
          })}
        </div>
        <div className={styles["filter-size"]}>
          {sizes.map((size, index) => {
            return (
              <div
                key={size}
                className={`${activeSize === index ? styles.active : ""}`}
                onClick={() => setActiveSize(index)}
              >
                {size} см.
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.card__footer}>
        <div className={styles.price}>от {price} &#8381;</div>
        <button onClick={onClickAdd} className={styles.btn}>
          + Добавить
        </button>
      </div>
    </div>
  );
};

export default PizzaCard;
