import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage";
import Header from "@components/Header";
import { ErrorPage } from "./pages/ErrorPage";
import { CartPage } from "./pages/CartPage";

export type SearchContent = {
  searchValue: string;
  setSearchValue: (c: string) => void;
};

const App: React.FC = (): any => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<Navigate to="/error" replace />} />
      </Routes>
    </>
  );
};

export default App;
