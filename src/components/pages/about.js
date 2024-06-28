import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Questions from "./questions";
import "../../style/home.scss";

export default function () {
  return (
    <div>
      <div className="video-container">
        <video autoPlay muted loop>
          <source
            src={"/assets/images/background_video2.mp4"}
            type="video/mp4"
          />
        </video>
        <h1 className="video-heading">
          Planifica Tu Viaje Perfecto: Un Click, Mil Aventuras
        </h1>
      </div>

      <div className="intro-section">
        <h1 className="home-heading">
          Bienvenida a nuestro mundo de aventuras
        </h1>
        <p>
          En BIDAII, encontrarás una forma rápida y sencilla de planificar tu
          viaje perfecto. Imagina explorar lugares increíbles sin tener que
          preocuparte por la planificación minuciosa. Aquí, en un solo clic,
          podrás diseñar tu itinerario ideal y centrarte plenamente en disfrutar
          cada momento de tu viaje.
        </p>
        <NavLink className="btn-wrapper" to="/questions">
          <button className="btn" type="forward">
            IR AL CUESTIONARIO
          </button>
        </NavLink>
      </div>

      <div className="team-section">
        <h2>Conoce al equipo</h2>
        <div className="grid-container">
          <div className="grid-row">
            <div className="grid-item team-member">
              <img src="/assets/images/ainaraerice.jpeg" alt="Ainara Erice" />
              <h4>Ainara Erice</h4>
              <p>CEO & Fundadora</p>
            </div>
            <div className="grid-item team-member">
              <img src="/assets/images/mikelramos.jpeg" alt="Mikel Ramos" />
              <h4>Mikel Ramos</h4>
              <p>CTO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
