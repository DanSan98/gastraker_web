import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 GasTraker. Todos los derechos reservados.</p>
    </footer>
  );
};

const styles = {
  footer: {
    background: "#333",
    color: "white",
    textAlign: "center",
    padding: "10px 0", // 🔹 Reduced padding to make it thinner
    fontSize: "14px",
    position: "relative",
    bottom: 0,
    width: "100%",
  },
};

export default Footer;
