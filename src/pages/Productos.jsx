import React, { useState, useEffect } from "react";

const images = [
  "/assets/product1.jpg",
  "/assets/game-lts.webp",
  "/assets/product3.jpg",
];

const descriptions = [
  "Wi-Fi (Consulta nivel desde web/app)",
  "LTS (Consulta nivel desde equipo físico)",
  "Carburación (Consulta nivel en el tablero de tu carro)",
];

const Productos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setFade(true);
    }, 200);
  };

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setFade(true);
    }, 200);
  };

  return (
    <div className="productos-wrapper" style={{ minHeight: "100vh" }}>
      <div className="header-separator"></div>

      <div style={styles.container}>
        <h2 style={styles.title}>Productos</h2>
        <p style={styles.subtitle}>
          Contamos con 3 equipos diferentes para adaptarnos a tus necesidades
        </p>

        <div style={styles.carousel}>
          <button onClick={prevSlide} style={styles.arrowLeft}>{"<"}</button>

          <div style={styles.imageContainer}>
            <img
              src={images[currentIndex]}
              alt="Producto"
              style={{
                ...styles.image,
                opacity: fade ? 1 : 0,
                transition: "opacity 0.4s ease-in-out",
              }}
              onClick={() => setIsModalOpen(true)}
            />
            <div style={styles.caption}>{descriptions[currentIndex]}</div>
          </div>

          <button onClick={nextSlide} style={styles.arrowRight}>{">"}</button>
        </div>

        <div style={styles.indicators}>
          {images.map((_, index) => (
            <span
              key={index}
              style={{
                ...styles.dot,
                backgroundColor: currentIndex === index ? "black" : "gray",
              }}
              onClick={() => {
                setFade(false);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setFade(true);
                }, 200);
              }}
            />
          ))}
        </div>

        {isModalOpen && (
          <div
            style={styles.modalOverlay}
            onClick={() => setIsModalOpen(false)}
          >
            <img
              src={images[currentIndex]}
              alt="Producto ampliado"
              style={styles.modalImage}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "50px 20px",
    flex: 1,
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "18px",
    marginBottom: "20px",
  },
  carousel: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  },
  imageContainer: {
    position: "relative",
    maxWidth: "400px",
    minHeight: "240px",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "10px",
    cursor: "pointer",
    display: "block",
  },
  caption: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    color: "white",
    padding: "6px 12px",
    position: "absolute",
    bottom: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    borderRadius: "5px",
    fontSize: "12px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "90%",
  },
  arrowLeft: {
    fontSize: "20px",
    cursor: "pointer",
    border: "none",
    background: "none",
  },
  arrowRight: {
    fontSize: "20px",
    cursor: "pointer",
    border: "none",
    background: "none",
  },
  indicators: {
    marginTop: "15px",
  },
  dot: {
    height: "12px",
    width: "12px",
    margin: "0 5px",
    display: "inline-block",
    borderRadius: "50%",
    cursor: "pointer",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalImage: {
    maxWidth: "90%",
    maxHeight: "90%",
    borderRadius: "10px",
    boxShadow: "0 0 20px rgba(255,255,255,0.2)",
    cursor: "pointer",
  },
};

export default Productos;
