import React from "react";
import "../styles/Nosotros.css";

const gastrakerIcon = `${process.env.PUBLIC_URL}/assets/gastraker.png`;

const Nosotros = () => {
  return (
    <div className="nosotros-wrapper" style={{ minHeight: "100vh" }}>
      <div className="header-separator"></div>

      <div className="nosotros-container">
        <h1>Nosotros</h1>
        <p className="nosotros-text">
          Capital Intelectual Aplicado, S.A. de C.V. es una empresa Mexicana dedicada al desarrollo de productos innovadores.
        </p>

        {/* ✅ Misión y Visión */}
        <div className="mission-vision-container">
          <div className="card-container">
            <div className="card">
              <h2>📌 Misión</h2>
              <p>
                Crear un equipo sólido con enfoque interdisciplinario para desarrollar tecnología innovadora con eficiencia y viabilidad de mercado.
              </p>
            </div>

            <div className="card">
              <h2>🚀 Visión</h2>
              <p>
                Ser líderes en modernización del mercado de gas LP con tecnología en constante evolución y mejora.
              </p>
            </div>
          </div>
        </div>

        {/* ✅ Características */}
        <div className="grid-container">
          <div className="grid-item">
            <span className="emoji">⏳</span>
            <h3>Monitoreo de Gas</h3>
            <p>Experimenta la precisión y confiabilidad de GasTraker para el monitoreo de gas LP.</p>
          </div>

          <div className="grid-item">
            <span className="emoji">🛠️</span>
            <h3>Soporte Continuo</h3>
            <p>Asistencia técnica y soluciones personalizadas para garantizar un funcionamiento óptimo.</p>
          </div>

          <div className="grid-item">
            <img src={gastrakerIcon} alt="GasTraker" className="small-icon" />
            <h3>Acceso a Web/App</h3>
            <p>Consulta el nivel de gas en tu tanque desde cualquier lugar con nuestra app intuitiva.</p>
          </div>

          <div className="grid-item">
            <span className="emoji">📊</span>
            <h3>Consultoría Especializada</h3>
            <p>Optimiza el suministro de gas con asesoría experta para mejorar eficiencia y reducir costos.</p>
          </div>

          <div className="grid-item">
            <span className="emoji">📉</span>
            <h3>Gestión de Consumo</h3>
            <p>Reportes detallados y alertas inteligentes para evitar desabastos y planificar recargas.</p>
          </div>

          <div className="grid-item">
            <span className="emoji">🔧</span>
            <h3>Soluciones Personalizadas</h3>
            <p>Adaptamos tecnología a las necesidades de cada cliente para la gestión eficiente de gas.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
