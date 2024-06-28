import React from "react";
import { NavLink } from "react-router-dom";
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

      <div className="features-section">
        <h2>¿Por qué elegir BIDAII?</h2>
        <div className="grid-container">
          <div className="grid-row">
            <div
              className="grid-item feature-item"
              style={{
                backgroundImage: `url('/assets/images/facilorganizar.jpg')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                opacity: "0.8",
              }}
            >
              <h3>Facilidad de uso</h3>
              <p>
                Planifica tu viaje en pocos clics con nuestra intuitiva
                plataforma.
              </p>
            </div>
            <div
              className="grid-item feature-item"
              style={{
                backgroundImage: `url('/assets/images/travelwoman.jpg')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                opacity: "0.8",
              }}
            >
              <h3>Destinos Diversos</h3>
              <p>
                Explora una amplia gama de destinos adaptados a tus
                preferencias.
              </p>
            </div>
            <div
              className="grid-item feature-item"
              style={{
                backgroundImage: `url('/assets/images/travelexperience.jpg')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                opacity: "0.8",
              }}
            >
              <h3>Experiencias Únicas</h3>
              <p>
                Descubre actividades y lugares que harán de tu viaje algo
                inolvidable.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="destinations-section">
        <h2>Destinos Destacados</h2>
        <div className="grid-container">
          <div className="grid-row">
            <div
              className="grid-item destination-item"
              style={{
                backgroundImage: `url('/assets/images/marsella.jpg')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h3>Marsella</h3>
            </div>
            <div
              className="grid-item destination-item"
              style={{
                backgroundImage: `url('/assets/images/paris.jpg')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h3>París</h3>
            </div>
            <div
              className="grid-item destination-item"
              style={{
                backgroundImage: `url('/assets/images/suiza.jpg')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h3>Suiza</h3>
            </div>
          </div>
        </div>
      </div>

      </div>
  );
}
