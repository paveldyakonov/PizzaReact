import React, { useEffect } from "react";

import styles from "./ButtonCart.module.scss";

import cartImg from "@images/cart.svg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";

const ButtonCart: React.FC = (): any => {
  const isMounted = React.useRef(false);
  const { items, totalPrice } = useSelector((state: RootState) => state.cartSlice);
  const totalCount = items.reduce((acc, item) => {
    return acc + item.count!!;
  }, 0);

  useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem("cart", JSON.stringify(items));
    }
    isMounted.current = true;
  }, [items]);

  return (
    <NavLink to={"/cart"}>
      <button className={styles.btn}>
        <div className={styles.btn__price}>{totalPrice} &#8381;</div>
        <div className={styles.btn__cart}>
          <img className={styles.cart__img} src={cartImg} alt="cart" />
          {totalCount}
        </div>
      </button>
    </NavLink>
  );
};

export default React.memo(ButtonCart);
