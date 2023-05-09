import React from "react";

import logo from "@images/pizza_logo.svg";
import styles from "./Header.module.scss";
import ButtonCart from "../ButtonCart";
import { NavLink, useLocation } from "react-router-dom";
import { SearchInput } from "@components/SearchInput";
import { useDispatch } from "react-redux";
import { removeFilters } from "@redux/slices/filter/filterSlice";

const Header: React.FC = (): any => {
  const dispatch = useDispatch();
  const location = useLocation();

  const onClickHandler = () => {
    dispatch(removeFilters());
  };

  return (
    <div className={styles.header}>
      <NavLink to={"/"} onClick={onClickHandler} className={styles["header__logo-and-name"]}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles["title-and-subtitle"]}>
          <div className={styles.title}>REACT PIZZA</div>
          <div className={styles.subtitle}>Лучшая пицца</div>
        </div>
      </NavLink>
      {location.pathname === "/" && <SearchInput />}
      <div>
        <ButtonCart />
      </div>
    </div>
  );
};

export default Header;
