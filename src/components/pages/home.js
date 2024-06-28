import React from "react";
import { NavLink } from "react-router-dom";
import "../../style/home.scss";

export default function Home() {
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
                backgroundImage: `url('/assets/images/albania.jpg')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <a href="https://justpackandbreathe.com/itinerarios/albania/albania-en-7-dias">
                <h3>Albania en 7 días</h3>
              </a>
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
              <a href="https://justpackandbreathe.com/furgo/francia-furgo/paris-en-furgoneta-camper">
                <h3>París en 3 días</h3>
              </a>
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
              <a href="https://justpackandbreathe.com/itinerarios/suiza/suiza-11-dias">
                <h3>Suiza en 11 días</h3>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonials-section">
        <h2>Lo que dicen nuestros usuarios</h2>
        <div className="grid-container">
          <div className="grid-row">
            <div
              className="grid-item testimonial-item"
              style={{
                backgroundImage: `url('/assets/images/testimonio1.jpg')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <p>
                "BIDAII hizo que mi viaje a Europa fuera increíblemente fácil y
                agradable."
              </p>
              <h4>- Juan Pérez</h4>
            </div>
            <div
              className="grid-item testimonial-item"
              style={{
                backgroundImage: `url('/assets/images/testimonio2.jpg')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <p>
                "La mejor plataforma de planificación de viajes que he usado.
                ¡Muy recomendable!"
              </p>
              <h4>- Ana López</h4>
            </div>
            <div
              className="grid-item testimonial-item"
              style={{
                backgroundImage: `url('/assets/images/testimonio3.jpg')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <p>
                "Gracias a BIDAII, descubrí lugares increíbles que nunca hubiera
                encontrado por mi cuenta."
              </p>
              <h4>- Carlos García</h4>
            </div>
          </div>
        </div>
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
