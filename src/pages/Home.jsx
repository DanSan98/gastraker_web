import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
const heroImage = `${process.env.PUBLIC_URL}/assets/game-lts.webp`;

const Home = () => {
  return (
    <div>
      <div style={{ width: "100%", height: "4px", background: "#002855", marginTop: "90px" }}></div>


      <div style={styles.container}>
        <div style={styles.hero}>
          <h1>BIENVENIDOS</h1>
          <p>
            Somos una empresa con muchos años de experiencia, brindándote la
            atención, servicio y asesoría especializada. Contáctanos, podemos
            ayudarte!
          </p>
          {/* ✅ Button now looks exactly like "Enviar" */}
          <Link to="/nosotros" style={styles.button}>
            Acerca de Nosotros
          </Link>
        </div>
        <img src={heroImage} alt="Producto" style={styles.heroImage} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    paddingTop: "100px",
  },
  hero: {
    background: "white",
    padding: "50px",
  },
  heroImage: {
    width: "100%",
    height: "auto",
    marginTop: "20px",
  },
  button: {
    display: "inline-block",
    padding: "15px 40px", // ✅ Same size as "Enviar"
    fontSize: "18px",
    fontWeight: "bold",
    color: "white",
    textDecoration: "none",
    borderRadius: "50px", // ✅ Fully rounded edges
    background: "linear-gradient(90deg, #001A4D, #0050B3)", // ✅ Gradient blue
    border: "none",
    cursor: "pointer",
    transition: "0.3s ease",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)", // ✅ Slight shadow for depth
  },
};

export default Home;
