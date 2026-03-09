import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import "./BackButton.css";

export const BackButton = () => {
  return (
    <div className="back-button-wrapper z-[1000]">
      <Link to="/" className="back-button group">
        <div className="back-button-icon">
          <ArrowLeft size={18} />
          <div className="back-button-icon-glow"></div>
        </div>
        <span className="back-button-text"> KEMBALI </span>
        <div className="back-button-line"></div>
      </Link>
    </div>
  );
};