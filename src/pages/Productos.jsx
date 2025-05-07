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

const info = [
  "Nuestro modelo más reciente permite consultar el nivel de gas LP desde tu dispositivo móvil a través de nuestra app web, facilitando la supervisión remota del tanque.",
  "Este equipo cuenta con una pantalla digital que muestra el nivel de gas dentro del hogar. No requiere conexión a internet y la lectura se realiza físicamente desde el dispositivo.",
  "Diseñado para automóviles que utilizan gas LP, este modelo muestra el nivel directamente en una pantalla digital instalada en el tablero del vehículo.",
];

const instructions = {
  product1: {
    title: "Instalación y Configuración del Modelo Wi-Fi",
    image: "/assets/product1.jpg",
    steps: [
      {
        title: "1. Ubicación del Tanque",
        details: [
          "Identificar la ubicación del tanque estacionario de gas LP.",
          "Si el tanque está en un techo, utilizar una escalera y asegurarse de evitar el contacto con cables eléctricos.",
        ],
      },
      {
        title: "2. Retiro del Sensor Anterior",
        details: [
          "Usar el desarmador de estrella para quitar el sensor análogo del tanque.",
          "Guardar los tornillos retirados y guardar el sensor análogo.",
        ],
      },
      {
        title: "3. Instalación del Nuevo Sensor",
        details: [
          "Abrir el paquete del equipo y sacar el sensor.",
          "Colocar el nuevo sensor en la posición del sensor anterior.",
          "Atornillar el sensor nuevo utilizando los tornillos guardados.",
          "Utilizar el fijador junto con los tornillos para asegurar que el cable no se jale.",
        ],
        images: [
          { src: "/assets/steps_gt.png", alt: "Resumen visual de pasos" },
        ],
      },
      {
        title: "4. Cierre de la Tapa",
        details: ["Cerrar la tapa para proteger el sensor instalado."],
      },
      {
        title: "5. Conexión del Sensor",
        details: [
          "Llevar el cable del sensor hacia el lugar más cercano posible al módem o fuente de señal de internet, y donde haya una fuente de energía cercana (enchufe).",
          "Conectar el cargador del equipo al enchufe.",
        ],
      },
      {
        title: "6. Fijación del Equipo",
        details: [
          "Colocar el velcro en el lugar donde se fijará el equipo.",
          "Asegurarse de que el cable del cargador (1m) alcance fácilmente al equipo para evitar desconexiones.",
          "Fijar el equipo con el velcro.",
        ],
      },
      {
        title: "7. Conexiones Finales",
        details: [
          "Conectar la fuente de poder al equipo.",
          "Conectar la otra punta del sensor al equipo.",
          "Verificar que el LED del equipo se encienda (si no se enciende, verificar la fuente de energía).",
        ],
      },
      {
        title: "8. Registro y vinculación de equipo",
        details: [
          "Escanear QR para ir a web/app o ingresar a https://gastraker.com/Login",
          "Dar click en registrarse y llenar los datos",
          "Una vez dentro del usuario, click en los 3 puntos > Agregar tanque",
          "Escanear QR del equipo, completar información del tanque",
        ],
      },
      {
        title: "9. Configuración a Internet",
        details: [
          "Conectar el equipo con su cargador.",
          "Ingresar a las conexiones WiFi del celular → Red GasTraker### → Contraseña: GasTraker.",
          "Abrir la app/web, seleccionar el equipo desconectado → Configurar WiFi.",
          "Seleccionar tu red y escribir la contraseña del módem.",
        ],
      },
    ],
  },
  product2: {
    title: "Instalación del Modelo LTS",
    image: "/assets/game-lts.webp",
    steps: [
      "Remover los tornillos del indicador de aguja original.",
      "Instalar el sensor respetando sus formas (cuadrado/redondo).",
      "Atornillar con la abrazadera incluida y uno de los tornillos originales.",
      "Sujetar el cable con cintillos para evitar daños.",
      "Antes de fijar el panel solar, activar el equipo retirando la cinta protectora.",
      "Ubicar el panel en una zona con buena exposición solar.",
    ],
  },
  product3: {
    title: "Instalación del Modelo Carburación",
    image: "/assets/product3.jpg",
    steps: [
      "Quitar indicador de aguja removiendo los dos tornillos.",
      "Insertar el sensor electrónico GasTraker (forma cuadrada/redonda).",
      "Fijar con tornillos y abrazadera.",
      "Conectar el sensor al indicador digital mediante cableado.",
      "Instalar el display en el tablero con felpa adhesiva.",
      "Conectar los cables: rojo a 12v, negro a tierra del vehículo.",
    ],
  },
};

const Productos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    if (selectedIndex === null) {
      const interval = setInterval(() => nextSlide(), 10000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, selectedIndex]);

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(true);
    }, 200);
  };

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setFade(true);
    }, 200);
  };

  const handleSelectProduct = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex(null); // deseleccionar
    } else {
      setSelectedIndex(index);
      setCurrentIndex(index);
    }
  };

  const selectedKey = selectedIndex !== null ? `product${selectedIndex + 1}` : null;
  const selectedInstructions = selectedKey ? instructions[selectedKey] : null;

  return (
    <div className="productos-wrapper" style={{ minHeight: "100vh" }}>
      <div className="header-separator"></div>
      <div style={styles.container}>
        <h2 style={styles.title}>Productos</h2>
        <p style={styles.subtitle}>Contamos con 3 equipos diferentes para adaptarnos a tus necesidades</p>

        <div style={styles.carousel}>
          <button onClick={prevSlide} style={styles.arrow}>{"<"}</button>
          <div style={styles.imageContainer}>
            <img
              src={images[currentIndex]}
              alt="Producto"
              style={{
                ...styles.image,
                opacity: fade ? 1 : 0,
                transition: "opacity 0.4s ease-in-out",
              }}
            />
            <div style={styles.caption}>{descriptions[currentIndex]}</div>
          </div>
          <button onClick={nextSlide} style={styles.arrow}>{">"}</button>
        </div>

        <div style={styles.indicators}>
          {images.map((_, i) => (
            <span
              key={i}
              style={{
                ...styles.dot,
                backgroundColor: currentIndex === i ? "#001A4D" : "gray",
              }}
              onClick={() => handleSelectProduct(i)}
            />
          ))}
        </div>

        <h3 style={styles.installationSubtitle}>Instalación</h3>

<div style={styles.buttons}>
  {["Wi-Fi", "LTS", "Carburación"].map((label, i) => (
    <button
      key={label}
      onClick={() => handleSelectProduct(i)}
      style={{
        ...styles.button,
        background: selectedIndex === i ? "linear-gradient(90deg, #001A4D, #0050B3)" : "#ccc",
        color: selectedIndex === i ? "white" : "black",
      }}
    >
      {label}
    </button>
  ))}
</div>

        {selectedIndex !== null && (
          <>
            <div style={styles.description}>
              <h3>Descripción</h3>
              <p>{info[selectedIndex]}</p>
              <div style={{ textAlign: "center", margin: "20px 0" }}>
  <a
    href={`https://checkout.stripe.com/pay/fake-product-${selectedIndex + 1}`}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      padding: "15px 40px",
      fontSize: "16px",
      fontWeight: "bold",
      color: "white",
      textDecoration: "none",
      borderRadius: "50px",
      background: "linear-gradient(90deg, #001A4D, #0050B3)",
      border: "none",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
    }}
  >
    Comprar ahora
  </a>
</div>

            </div>

            <div style={styles.instructions}>
              <h3>{selectedInstructions.title}</h3>
              {selectedInstructions.steps.map((step, i) =>
                typeof step === "string" ? (
                  <li key={i}>{step}</li>
                ) : (
                  <div key={i} style={styles.step}>
                    <h4>{step.title}</h4>
                    <ul>
                      {step.details.map((d, j) => (
                        <li key={j}>{d}</li>
                      ))}
                    </ul>
                    {step.images &&
                      step.images.map((img, j) => (
                        <img
                          key={j}
                          src={img.src}
                          alt={img.alt}
                          style={styles.installImage}
                        />
                      ))}
                  </div>
                )
              )}

              {selectedIndex === 0 && (
                <div style={{ textAlign: "center", marginTop: "30px" }}>
                  <a
                    href="/assets/Instructivo_final_gt.pdf"
                    download
                    style={{
                      display: "inline-block",
                      padding: "15px 40px",
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "white",
                      textDecoration: "none",
                      borderRadius: "50px",
                      background: "linear-gradient(90deg, #001A4D, #0050B3)",
                      border: "none",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    Descargar Instructivo PDF
                  </a>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", padding: "50px 20px" },
  title: { fontSize: "32px", fontWeight: "bold" },
  subtitle: { fontSize: "18px", marginBottom: "20px" },
  carousel: { display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" },
  imageContainer: { position: "relative", maxWidth: "400px", minHeight: "240px" },
  image: { width: "100%", borderRadius: "10px" },
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
    maxWidth: "90%",
  },
  arrow: { fontSize: "20px", cursor: "pointer", border: "none", background: "none" },
  indicators: { marginTop: "15px" },
  dot: {
    height: "12px",
    width: "12px",
    margin: "0 5px",
    borderRadius: "50%",
    cursor: "pointer",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    margin: "30px 0",
    flexWrap: "wrap",
  },
  button: {
    padding: "15px 30px",
    fontSize: "16px",
    borderRadius: "30px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s",
  },
  description: {
    maxWidth: "700px",
    margin: "auto",
    textAlign: "left",
    marginBottom: "30px",
  },
  instructions: {
    maxWidth: "800px",
    margin: "auto",
    textAlign: "left",
  },
  step: {
    marginBottom: "30px",
  },
  installImage: {
    width: "100%",
    maxWidth: "500px",
    marginTop: "10px",
    borderRadius: "8px",
  },
};

export default Productos;
