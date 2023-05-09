import React from "react";
import styles from "./CartPage.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import { CartPizza } from "./components/CartPizza";
import { useDispatch } from "react-redux";
import { clearItems } from "@redux/slices/cart/cartSlice";
import { removeFilters } from "@redux/slices/filter/filterSlice";
import { useNavigate } from "react-router";

export const CartPage: React.FC = (): any => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector((state: RootState) => state.cartSlice.items);
  const totalPrice = useSelector((state: RootState) => state.cartSlice.totalPrice);
  const totalCount = useSelector((state: RootState) =>
    state.cartSlice.items.reduce((acc, item) => {
      return acc + item.count!!;
    }, 0),
  );

  const clearCart = () => {
    dispatch(clearItems());
  };

  const onClickBackHandler = () => {
    navigate("/");
    dispatch(removeFilters());
  };

  return (
    <div className={styles["cart-page"]}>
      <h1 className={styles["cart-page__header"]}>Ваша Корзина</h1>
      <div className={styles["cart-block"]}>
        <div className={styles["cart-block__header"]}>
          <button onClick={clearCart} className={styles.clear}>
            &#128465; Очистить корзину
          </button>
        </div>
        <div className={styles["cart-block__items"]}>
          {items.map((item, index) => (
            <CartPizza
              key={index}
              id={item.id}
              title={item.title}
              size={item.size}
              type={item.type}
              image={item.imageUrl}
              price={item.price}
              count={item.count}
            />
          ))}
        </div>
        <div className={styles["cart-block__totals"]}>
          <div>
            Всего пицц: <span className={styles.total}>{totalCount}</span> шт
          </div>
          <div>
            Сумма заказа: <span className={styles.sum}>{totalPrice}</span>
          </div>
        </div>
        <div className={styles["cart-block__buttons"]}>
          <button onClick={onClickBackHandler} className={styles.prev}>
            &#60; Вернуться назад
          </button>
          <button className={styles.buy}>Оплатить сейчас</button>
        </div>
      </div>
    </div>
  );
};
