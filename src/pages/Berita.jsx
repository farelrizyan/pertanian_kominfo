import React from "react";
import { BackButton } from "../components/BackButton";
import { NewsSection } from "../components/NewsSection";
import "./Berita.css";

export const Berita = () => {
  return (
    <div className="page-container page-berita">
      <BackButton />
      <div className="page-content">
        <h1 className="page-title">Berita</h1>
        {/* reuse section component to list all news */}
        <NewsSection />
      </div>
    </div>
  );
};
