import React, { useEffect, useRef } from "react";

import styles from "./Dropdown.module.scss";

type Props = {
  sortValues: string[];
  selected: string;
  setSelected: (index: number) => void;
  isVisible: boolean;
  setIsVisible: (e: boolean) => void;
};

const Dropdown: React.FC<Props> = ({
  sortValues,
  selected,
  setSelected,
  isVisible,
  setIsVisible,
}): any => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  console.log(dropdownRef);

  useEffect(() => {
    const onClick = (e: any) => {
      if (!dropdownRef.current?.contains(e.target)) {
        setIsVisible(false);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <div ref={dropdownRef} className={styles.dropdown} onClick={() => setIsVisible(!isVisible)}>
      <div className={styles.dropdown__input}>{selected}</div>
      {isVisible && (
        <div className={styles.dropdown__list}>
          {sortValues.map((value, index) => (
            <div
              onClick={() => setSelected(index)}
              key={value}
              className={
                value === selected
                  ? `${styles["dropdown__list-value"]} ${styles.selected}`
                  : styles["dropdown__list-value"]
              }
            >
              {value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
