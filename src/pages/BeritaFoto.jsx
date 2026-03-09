import React from "react";
import { BackButton } from "../components/BackButton";
import { GallerySection } from "../components/GallerySection";
import "./BeritaFoto.css";

export const BeritaFoto = () => {
  return (
    <div className="page-container page-berita-foto">
      <BackButton />
      <div className="page-content">
        <h1 className="page-title">Berita Foto</h1>
        {/* show gallery content */}
        <GallerySection />
      </div>
    </div>
  );
};
