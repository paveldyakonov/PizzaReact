import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import styles from "./ErrorPage.module.scss";

export const ErrorPage: React.FC = (): any => {
  const [seconds, setSeconds] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    if (seconds !== 0) {
      setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } else {
      navigate("/");
    }
  }, [seconds]);

  return (
    <>
      <div className={styles.page}>
        <h1 className={styles.page__title}>Извините, такой страницы нет :(</h1>
        <div className={styles.page__to_main}>
          Вернуться{" "}
          <NavLink to={"/"} replace>
            на Главную
          </NavLink>{" "}
          через {seconds}...
        </div>
      </div>
    </>
  );
};
