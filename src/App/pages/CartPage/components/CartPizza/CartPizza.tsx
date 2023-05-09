import React from "react";

import styles from "./CartPizza.module.scss";
import { useDispatch } from "react-redux";
import { minusItem, plusItem, removeItem } from "@redux/slices/cart/cartSlice";
import { Pizza } from "@redux/slices/cart/types";

type Props = {
  id: string;
  title: string;
  size: string;
  type: string;
  image: string;
  count?: number;
  price: string;
};

export const CartPizza: React.FC<Props> = ({ id, title, size, type, image, count, price }): any => {
  const dispatch = useDispatch();

  const addItem = () => {
    const item: Pizza = {
      id: id,
      imageUrl: image,
      title: title,
      type: type,
      size: size,
      price: price,
    };
    dispatch(plusItem(item));
  };

  const decreaseItem = () => {
    const item: Pizza = {
      id: id,
      imageUrl: image,
      title: title,
      type: type,
      size: size,
      price: price,
    };
    dispatch(minusItem(item));
  };

  const removePizza = () => {
    const item: Pizza = {
      id: id,
      imageUrl: image,
      title: title,
      type: type,
      size: size,
      price: price,
    };
    dispatch(removeItem(item));
  };

  return (
    <div className={styles.card}>
      <img className={styles.card__img} src={image} alt={title} />
      <div className={styles.card__info}>
        <div className={styles.card__title}>{title}</div>
        <div className={styles.card__description}>
          <div>{type} тесто, </div>
          <div>{size} см.</div>
        </div>
      </div>
      <div className={styles.card__count}>
        <button
          disabled={count === 1 ? true : false}
          onClick={decreaseItem}
          className={styles.card__btn}
        >
          -
        </button>
        <div className={styles.count}>{count}</div>
        <button onClick={addItem} className={styles.card__btn}>
          +
        </button>
      </div>
      <div className={styles.card__price}>{price} &#8381;</div>
      <button onClick={removePizza} className={styles["card__delete-btn"]}>
        &#10006;
      </button>
    </div>
  );
};
