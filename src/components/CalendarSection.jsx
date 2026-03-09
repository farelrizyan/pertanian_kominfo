import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  PlusCircle, 
  ArrowUpRight 
} from "lucide-react";
import "./CalendarSection.css";

export const CalendarSection = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  // Data dummy agenda
  const agendaData = [
    {
      id: 1,
      date: new Date(2026, 2, 11),
      title: "Rapat Koordinasi Ketahanan Pangan",
      time: "09:00 - 12:00 WIB",
      location: "Aula Kantor Dinas Pertanian",
      category: "Internal",
    },
    {
      id: 2,
      date: new Date(2026, 2, 15),
      title: "FGD Pengembangan Varietas Padi Unggul",
      time: "10:30 - 15:00 WIB",
      location: "Hotel Grand Inna, Padang",
      category: "Rapat",
    },
    {
      id: 3,
      date: new Date(2026, 2, 21),
      title: "Panen Raya Bersama Gubernur Sumbar",
      time: "08:00 - Selesai",
      location: "Kecamatan Harau, Limapuluh Kota",
      category: "Lapang",
    },
    {
      id: 4,
      date: new Date(2026, 2, 28),
      title: "Sosialisasi Program Pupuk Bersubsidi",
      time: "13:00 - 16:30 WIB",
      location: "Zoom Meeting",
      category: "Online",
    }
  ];

  const daysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const firstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const monthName = currentDate.toLocaleString('id-ID', { month: 'long' });
  const year = currentDate.getFullYear();

  const daysArray = [];
  const totalDays = daysInMonth(currentDate);
  const offset = firstDayOfMonth(currentDate);

  for (let i = 0; i < offset; i++) {
    daysArray.push(null);
  }
  for (let i = 1; i <= totalDays; i++) {
    daysArray.push(i);
  }

  const today = new Date();
  const isToday = (day) => {
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  const getEventsForDay = (day) => {
    return agendaData.filter(event => 
      event.date.getDate() === day && 
      event.date.getMonth() === currentDate.getMonth() && 
      event.date.getFullYear() === currentDate.getFullYear()
    );
  };

  return (
    <section className="calendar-section">
      <div className="calendar-container">
        {/* Header */}
        <div className="calendar-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="calendar-badge"
          >
            <CalendarIcon size={16} />
            Agenda & Kegiatan
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="calendar-title"
          >
            Aktivitas Terjadwal
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="calendar-subtitle"
          >
            Informasi agenda kerja dan kegiatan resmi Dinas Pertanian Provinsi Sumatera Barat
          </motion.p>
        </div>

        <div className="calendar-grid">
          {/* Calendar Widget */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="calendar-widget"
          >
            {/* Calendar Header */}
            <div className="calendar-widget-header">
              <h3 className="calendar-month">
                {monthName} <span>{year}</span>
              </h3>
              <div className="calendar-nav">
                <button 
                  onClick={prevMonth}
                  className="calendar-nav-btn"
                  aria-label="Bulan sebelumnya"
                >
                  <ChevronLeft size={18} />
                </button>
                <button 
                  onClick={nextMonth}
                  className="calendar-nav-btn"
                  aria-label="Bulan berikutnya"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* Day Headers */}
            <div className="calendar-weekdays">
              {['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'].map((day) => (
                <div key={day} className="calendar-weekday">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="calendar-days">
              {daysArray.map((day, idx) => {
                const events = day ? getEventsForDay(day) : [];
                const hasEvents = events.length > 0;
                
                return (
                  <div key={idx} className="calendar-day-cell">
                    {day && (
                      <button
                        className={`
                          calendar-day-btn
                          ${isToday(day) ? 'today' : ''}
                          ${hasEvents && !isToday(day) ? 'has-events' : ''}
                        `}
                        aria-label={`${day} ${monthName} ${year}${hasEvents ? `, ${events.length} agenda` : ''}`}
                      >
                        {day}
                        {hasEvents && (
                          <span className="event-indicator" />
                        )}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Submit Agenda */}
            <div className="submit-agenda">
              <p>Punya agenda yang ingin disampaikan?</p>
              <button className="submit-agenda-btn">
                <PlusCircle size={14} />
                Kirim Usulan Agenda
              </button>
            </div>
          </motion.div>

          {/* Agenda List */}
          <div className="agenda-section">
            <div className="agenda-items">
              <AnimatePresence mode="wait">
                {agendaData.map((agenda, index) => (
                  <motion.div
                    key={agenda.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                    className="agenda-item"
                  >
                    <div className="agenda-content">
                      {/* Date Block */}
                      <div className="agenda-date">
                        <span className="agenda-date-day">
                          {agenda.date.getDate()}
                        </span>
                        <span className="agenda-date-month">
                          {agenda.date.toLocaleString('id-ID', { month: 'short' }).toUpperCase()}
                        </span>
                      </div>

                      {/* Content Block */}
                      <div className="agenda-info">
                        <div className="agenda-meta">
                          <span className="agenda-category">
                            {agenda.category}
                          </span>
                          <div className="agenda-time">
                            <Clock size={14} />
                            {agenda.time}
                          </div>
                        </div>
                        <h4 className="agenda-title">
                          {agenda.title}
                        </h4>
                        <div className="agenda-location">
                          <MapPin size={16} />
                          <span>{agenda.location}</span>
                        </div>
                      </div>

                      {/* Action */}
                      <div className="agenda-action">
                        <button className="agenda-btn">
                          Lihat Detail
                          <ArrowUpRight size={14} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
            {/* Footer */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="agenda-footer"
            >
              <button className="view-all-btn">
                Lihat Semua Agenda Kerja
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};