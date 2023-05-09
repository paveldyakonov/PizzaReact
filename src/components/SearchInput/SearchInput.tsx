import React, { useCallback, useEffect, useState } from "react";

import debounce from "lodash.debounce";

import search from "@images/search.svg";
import cross from "@images/cross.png";

import styles from "./SearchInput.module.scss";
import { useDispatch } from "react-redux";
import { setSearch } from "@redux/slices/filter/filterSlice";
import { useSearchParams } from "react-router-dom";

export const SearchInput: React.FC = React.memo((): any => {
  const [value, setValue] = useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setValue(!searchParams.get("search") ? "" : `${searchParams.get("search")}`);
  }, [searchParams.get("search")]);

  const searchDebounce = useCallback(
    debounce((text: string) => {
      dispatch(setSearch(text));
      searchParams.set("search", text);
      setSearchParams(searchParams);
      console.log(text);
    }, 500),
    [searchParams, window.location],
  );

  const onChangeInput = (text: string) => {
    setValue(text);
    searchDebounce(text);
  };

  const onClickClear = () => {
    dispatch(setSearch(""));
    searchParams.set("search", "");
    setSearchParams(searchParams);
    setValue("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={styles.search}>
      <img className={styles.search__img} src={search} alt="search" />
      <input
        ref={inputRef}
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChangeInput(event.target.value)}
        className={styles.search__input}
        type="text"
        placeholder="Найти пиццу"
      />
      {value && (
        <img onClick={onClickClear} className={styles.search__cross} src={cross} alt="cross" />
      )}
    </div>
  );
});
