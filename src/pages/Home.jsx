import React from "react";
import { Link } from "react-router-dom";

const heroImage = `${process.env.PUBLIC_URL}/assets/product1.jpg`;

const Home = () => {
  return (
    <div className="home-wrapper" style={{ minHeight: "100vh" }}>
      <div className="header-separator"></div>

      <div style={styles.container}>
        <div style={styles.hero}>
          <h1>BIENVENIDOS</h1>
          <p>
            Somos una empresa con muchos años de experiencia, brindándote la
            atención, servicio y asesoría especializada. ¡Contáctanos, podemos
            ayudarte!
          </p>

          <Link to="/nosotros" style={styles.button}>
            Acerca de Nosotros
          </Link>
        </div>

        <div style={styles.fullWidthImageWrapper}>
          <img src={heroImage} alt="Producto" style={styles.fullWidthImage} />

          <img
            src={agradecimientoImage}
            alt="Gracias por elegir Gas Traker"
            style={styles.placaOverlay}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    paddingTop: "100px",
    paddingBottom: "40px",
  },
  hero: {
    background: "white",
    padding: "50px",
  },
  fullWidthImageWrapper: {
    position: "relative",
    width: "100%",
    marginTop: "30px",
  },
  fullWidthImage: {
    width: "100%",
    height: "auto",
    display: "block",
  },
  button: {
    display: "inline-block",
    padding: "15px 40px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "white",
    textDecoration: "none",
    borderRadius: "50px",
    background: "linear-gradient(90deg, #001A4D, #0050B3)",
    border: "none",
    cursor: "pointer",
    transition: "0.3s ease",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
  },
};

export default Home;
