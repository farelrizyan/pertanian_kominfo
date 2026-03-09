import React from "react";
import "./Leadership.css";
// Images are served from the public folder so we reference them by path

const leaders = [
  {
    name: "H.Mahyeldi S.P",
    position: "Gubernur Sumatera Barat",
    // public/mahyeldi.jpeg will be served at root
    image: "/Mahyeldi.jpg",
  },
  {
    name: "Vasko Ruseimy S.T",
    position: "Wakil Gubernur Sumatera Barat",
    image: "/VASKO.png",
  },
];

function Leadership() {
  return (
    <section className="leadership-section">
      <div className="container">
        <h2 className="section-title">Kepemimpinan Daerah</h2>
        <p className="section-subtitle">
          Kepemimpinan yang berintegritas untuk pembangunan sektor pertanian dan
          kesejahteraan masyarakat.
        </p>

        <div className="leadership-wrapper">
          {leaders.map((leader, index) => (
            <div className="leader-card" key={index}>
              <div className="leader-image">
                <img src={leader.image} alt={leader.name} />
                <div className="overlay"></div>
              </div>

              <div className="leader-content">
                <h3>{leader.name}</h3>
                <p>{leader.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Leadership;
