import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import BookDetail from "./pages/BookDetail";
import AdvancedSearch from "./pages/AdvancedSearch";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
    {/*ici sont définies les routes de l'application*/}
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="search" element={<SearchResults />} />
          <Route path="book/:id" element={<BookDetail />} />
          <Route path="advanced-search" element={<AdvancedSearch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
