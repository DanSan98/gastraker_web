import React, { useState } from "react";

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
          { src: "/assets/steps_gt.png", alt: "Resumen visual de pasos", center: true, animated: true },
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
          "Una vez que el LED del equipo esté encendido, la instalación está completa y se puede proceder a la configuración.",
        ],
      },
      {
        title: "8. Registro y vinculación de equipo",
        details: [
          "Escanear QR para ir a web/app o ingresar a https://gastraker.com/Login",
          "Dar click en registrarse y llenar los datos",
          "Una vez dentro del usuario, le damos click en los 3 puntitos arriba a la derecha",
          "Damos click en signo de + (agregar tanque)",
          "En MacAddress, le damos click a la cámara y escaneamos el QR de la parte de atrás del equipo (caja negra)",
          "Llenamos datos del tanque. *Importante: revisar que el volumen de su tanque y escribir tal cual en Volumen del Tanque en el lugar correspondiente",
          "Una vez creado, nos pasaremos a la configuración del equipo con su internet.",
        ],
      },
      {
        title: "9. Configuración a Internet",
        details: [
          "Conectar el equipo con su cargador",
          "Ingresar a los ajustes de su celular --> conexiones wifi --> Red GasTraker### --> Ingresar contraseña (GasTraker). *En caso de que aparezca la opción, le damos click a \"Usar sin conexión a internet\"",
          "Abrir web/app y asegurar que esté en su cuenta",
          "Dar click en desconectado --> aceptar --> configurar wifi",
          "Seleccionar su red de internet e introducir contraseña de su módem",
          "Si la contraseña fue escrita correctamente, su equipo deberá estar listo para su uso.",
        ],
      },
    ],
  },

  product2: {
    title: "Instalación del Modelo LTS",
    image: "/assets/game-lts.webp",
    steps: [
      "Remover los dos tornillos que sujetan el indicador de aguja que viene con el tanque.",
      "Quitar el indicador de aguja y en su lugar instalar el sensor electrónico respetando las formas del sensor (un lado cuadrado y el otro redondo).",
      "Utilizar el tornillo suministrado con el equipo para atornillar el lado que lleva la abrazadera de nylon color blanca. Utilizar uno de los tornillos originales para sujetar el extremo contrario.",
      "Correr el cable sujetándolo con los cintillos de nylon proporcionados con el equipo.",
      "Proteger el cable lo más posible contra potenciales daños por pellizcos de la tapa del tanque, raspones, tirones, etc.",
      "Antes de fijar el panel solar, tira de la cinta del panel para activar el equipo.",
      "El mejor lugar para instalar el panel es donde siempre o la mayor parte del día le dé la luz solar."
    ],
  },

  product3: {
    title: "Instalación del Modelo Carburación",
    image: "/assets/product3.jpg",
    steps: [
      "Quitar indicador de aguja removiendo los dos tornillos que lo sujetan.",
      "Colocar el sensor electrónico del indicador GasTraker, de manera que entre en el lugar del indicador de aguja. Nota: Un extremo del sensor es cuadrado y el otro redondo, de manera que tiene una sola manera de ensamblarse.",
      "Atornillar y fijar con la abrazadera de nylon.",
      "Correr el cable (5mts.) del sensor electrónico hasta el lugar en donde se instale el indicador digital.",
      "Buscar una superficie plana para instalar el indicador digital y limpiar.",
      "Quitar película protectora a la felpa de montaje y pegar felpa en el área que se limpió.",
      "Fijar el indicador digital sobre la felpa de montaje.",
      "Conectar el indicador digital con el sensor electrónico por medio de los conectores rápidos instalados en los cables.",
      "Conectar los cables de alimentación al +12 v.c.d. de la alimentación del vehículo (cable rojo) con la zapata de conexión rápida y el negativo (cable negro) a tierra zapata de ojillo.",
      "Una vez conectado, el indicador deberá desplegar el porcentaje de gas existente en el tanque estacionario en el que se instaló el sensor electrónico."
    ]
  }
};

function renderWithLinks(text) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);
  return parts.map((part, index) =>
    urlRegex.test(part) ? (
      <a key={index} href={part} target="_blank" rel="noopener noreferrer" style={{ color: "#007bff" }}>
        {part}
      </a>
    ) : (
      part
    )
  );
}

const Instalacion = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  const toggleInstructions = (product) => {
    setSelectedProduct(selectedProduct === product ? null : product);
  };

  const openModal = (src) => setModalImage(src);
  const closeModal = () => setModalImage(null);

  return (
    <div className="instalacion-wrapper" style={{ minHeight: "100vh" }}>
      <div className="header-separator"></div>

      <div style={styles.container}>
        <h2 style={styles.title}>Instalación</h2>
        <p style={styles.subtitle}>Selecciona el producto que adquiriste:</p>

        <div style={styles.buttons}>
        <button onClick={() => toggleInstructions("product1")} style={styles.fancyButton}>
  Modelo Wi-Fi
</button>
<button onClick={() => toggleInstructions("product2")} style={styles.fancyButton}>
  Modelo LTS
</button>
<button onClick={() => toggleInstructions("product3")} style={styles.fancyButton}>
  Modelo Carburación
</button>

</div>

{selectedProduct && (
  <div style={styles.instructions}>
    <div style={styles.centeredImageWrapper}>
      <img
        src={instructions[selectedProduct].image}
        alt={`Imagen de ${instructions[selectedProduct].title}`}
        style={{ ...styles.image, cursor: "pointer" }}
        onClick={() => openModal(instructions[selectedProduct].image)}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />
    </div>

    <h3>{instructions[selectedProduct].title}</h3>

    {selectedProduct === "product1" ? (
      <>
        {instructions.product1.steps.map((step, index) => (
          <div key={index} style={styles.step}>
            <h4>{step.title}</h4>
            <ul>
              {step.details.map((detail, i) => (
                <li key={i}>{renderWithLinks(detail)}</li>
              ))}
            </ul>
            {step.images && (
              <div style={styles.centeredImageWrapper}>
                {step.images.map((img, i) => (
                  <img
                    key={i}
                    src={img.src}
                    alt={img.alt}
                    style={{ ...styles.image, cursor: "pointer" }}
                    onClick={() => openModal(img.src)}
                    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                ))}
              </div>
            )}
          </div>
        ))}

        {/* ✅ Botón para descargar instructivo PDF */}
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
      </>
    ) : (
      <div style={styles.step}>
        <ul>
          {instructions[selectedProduct].steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
)}

{modalImage && (
  <div style={styles.modalOverlay} onClick={closeModal}>
    <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
      <span style={styles.closeButton} onClick={closeModal}>×</span>
      <img src={modalImage} alt="Zoom" style={styles.modalImage} />
    </div>
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
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "18px",
    marginBottom: "20px",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "30px",
    flexWrap: "wrap",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    fontWeight: "bold",
  },
  instructions: {
    marginTop: "20px",
    textAlign: "left",
    maxWidth: "900px",
    margin: "auto",
    marginBottom: "50px",
  },
  step: {
    marginBottom: "40px",
  },
  centeredImageWrapper: {
    textAlign: "center",
    marginTop: "20px",
  },
  image: {
    width: "100%",
    maxWidth: "500px",
    borderRadius: "10px",
    transition: "transform 0.3s ease",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalContent: {
    position: "relative",
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "20px",
    maxWidth: "90%",
    maxHeight: "90%",
    overflow: "auto",
  },
  modalImage: {
    width: "100%",
    borderRadius: "10px",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "15px",
    fontSize: "30px",
    fontWeight: "bold",
    cursor: "pointer",
    color: "#555",
  },
  fancyButton: {
    padding: "15px 40px",
    fontSize: "16px",
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

export default Instalacion;
