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
    padding: "10px 0",
    fontSize: "14px",
    // ✅ Removed position, bottom, and width
    // Footer will naturally stick to bottom thanks to flex layout in App.js
  },
};

export default Footer;
