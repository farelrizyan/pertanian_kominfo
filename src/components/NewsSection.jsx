import React from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { NEWS } from "../data/mockData";
import "./NewsSection.css";

export const NewsSection = () => {
  return (
    <section className="news-section" id="berita">
      <div className="news-container">
        <div className="news-header">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="news-title-wrapper"
          >
            <h2 className="news-title">
              <span className="border-l-4 border-[var(--color-agri-green)] pl-3">
                Berita Terbaru
              </span>
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="news-title-border"
            />
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ gap: "0.75rem" }}
            className="news-view-all"
          >
            Lihat Semua Berita
            <ArrowRight className="news-view-all-icon" size={16} />
          </motion.button>
        </div>

        <div className="news-grid">
          {NEWS.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="news-card"
            >
              <div className="news-card-image-wrapper">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                  src={item.image}
                  alt={item.title}
                  className="news-card-image"
                  referrerPolicy="no-referrer"
                />
                <div className="news-card-overlay" />
              </div>

              <div className="news-card-date">
                <Calendar className="news-date-icon" />
                <span className="news-date-text">{item.date}</span>
              </div>

              <h3 className="news-card-title">{item.title}</h3>

              <p className="news-card-excerpt">{item.excerpt}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
