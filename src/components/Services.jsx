import React from "react";
import { Scale, HelpCircle, BookOpen, Monitor, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { SERVICES } from "../data/mockData";
import "./Services.css";

const IconMap = {
  MessageSquareWarning: Scale,
  Database: HelpCircle,
  BookOpen: BookOpen,
  Laptop: Monitor,
};

export const Services = () => {
  return (
    <section className="services-section" id="layanan">
      <div className="services-bg-pattern" />

      <div className="services-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="services-description"
        >
          <p>
            masyarakat, pelaku usaha, peneliti, maupun pemangku kepentingan
            dapat menyampaikan masukan, memperoleh informasi, dan mengakses
            sumber daya pengetahuan dengan mudah dan transparan.
          </p>
        </motion.div>

        <div className="services-grid">
          {SERVICES.map((service, index) => {
            const Icon = IconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="service-card"
              >
                <div className="service-icon-container">
                  <Icon className="service-icon" />
                </div>
                <h3 className="service-title">{service.title}</h3>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="services-button-wrapper"
        >
          <Link
            to="/layanan"
            className="services-button inline-flex items-center"
          >
            LIHAT SEMUA
            <ArrowRight className="services-button-icon" size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
