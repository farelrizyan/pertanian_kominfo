import React from "react";
import { Hero } from "../components/Hero";
import { VisiMisi } from "../components/VisiMisi";
import { Services } from "../components/Services";
import { NewsSection } from "../components/NewsSection";
import Leadership from "../components/Leadership";
import { GallerySection } from "../components/GallerySection";
import { CalendarSection } from "../components/CalendarSection";

export const Home = () => {
  return (
    <main>
      <Hero />
      <VisiMisi />
      <Services />
      <Leadership />
      <NewsSection />
      <CalendarSection />
      <GallerySection />
    </main>
  );
};
