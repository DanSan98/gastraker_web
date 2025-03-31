import React, { useState } from "react";

const instructions = {
  product1: {
    title: "Instalación y Configuración del Producto 1",
    steps: [
      {
        title: "Ubicación del Tanque",
        details: [
          "Identificar la ubicación del tanque estacionario de gas LP.",
          "Si el tanque está en un techo, utilizar una escalera y asegurarse de evitar el contacto con cables eléctricos.",
        ],
      },
      {
        title: "Retiro del Sensor Anterior",
        details: [
          "Usar el desarmador de estrella para quitar el sensor análogo del tanque.",
          "Guardar los tornillos retirados y guardar el sensor análogo.",
        ],
      },
      {
        title: "Instalación del Nuevo Sensor",
        details: [
          "Abrir el paquete del equipo y sacar el sensor.",
          "Colocar el nuevo sensor en la posición del sensor anterior.",
          "Atornillar el sensor nuevo utilizando los tornillos guardados.",
          "Utilizar el fijador junto con los tornillos para asegurar que el cable no se jale.",
        ],
      },
      {
        title: "Conexión del Sensor",
        details: [
          "Llevar el cable del sensor hacia el lugar más cercano posible al módem o fuente de señal de internet, y donde haya una fuente de energía cercana (enchufe).",
          "Conectar el cargador del equipo al enchufe.",
        ],
      },
      {
        title: "Fijación del Equipo",
        details: [
          "Colocar el velcro en el lugar donde se fijará el equipo.",
          "Asegurarse de que el cable del cargador (1m) alcance fácilmente al equipo para evitar desconexiones.",
          "Fijar el equipo con el velcro.",
        ],
      },
      {
        title: "Conexiones Finales",
        details: [
          "Conectar la fuente de poder al equipo.",
          "Conectar la otra punta del sensor al equipo.",
          "Verificar que el LED del equipo se encienda (si no se enciende, verificar la fuente de energía).",
          "Una vez que el LED del equipo esté encendido, la instalación está completa y se puede proceder a la configuración.",
        ],
      },
      {
        title: "Descargar la App Gas Traker",
        details: [
          'Buscar "Gas Traker" en la Play Store (Android) o App Store (iOS) y descargar la aplicación.',
        ],
      },
      {
        title: "Conexión a la Red Wi-Fi del Equipo",
        details: [
          "Abrir la configuración de red Wi-Fi en el dispositivo móvil.",
          'Seleccionar la red “Gas Traker ###”.',
          "Ingresar la contraseña: GasTraker.",
          "Aceptar la conexión sin internet si se solicita.",
        ],
      },
      {
        title: "Configuración en la App",
        details: [
          "Abrir la aplicación Gas Traker.",
          "Crear una cuenta con los datos del usuario.",
          "Una vez dentro de la aplicación, presionar el botón de conectar.",
          "Escanear el código QR ubicado en el equipo para vincularlo con la aplicación.",
        ],
      },
      {
        title: "Ingresar Datos del Tanque",
        details: [
          "Una vez vinculado el equipo, ingresar los datos del tanque en la aplicación.",
          "La instalación y configuración están completas y el equipo está listo para usar.",
        ],
      },
    ],
  },

  product23: {
    title: "Instalación del Producto 2 y 3",
    steps: [
      "Remover los dos tornillos que sujetan el indicador de aguja que viene con el tanque.",
      "Quitar el indicador de aguja y en su lugar instalar el sensor electrónico respetando las formas del sensor (un lado cuadrado y el otro redondo).",
      "Utilizar el tornillo suministrado con el equipo para atornillar el lado que lleva la abrazadera de nylon color blanca. Utilizar uno de los tornillos originales para sujetar el extremo contrario.",
      "Correr el cable sujetándolo con los cintillos de nylon proporcionados con el equipo.",
      "Proteger el cable lo más posible contra potenciales daños por pellizcos de la tapa del tanque, raspones, tirones, etc.",
      "Antes de fijar el panel solar, tira de la cinta del panel para activar el equipo.",
      "El mejor lugar para instalar el panel es donde siempre o la mayor parte del día le dé la luz solar.",
    ],
    image: "/assets/inst23.jpg",
  },
};

const Instalacion = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const toggleInstructions = (product) => {
    setSelectedProduct(selectedProduct === product ? null : product);
  };

  return (
    <div className="instalacion-wrapper" style={{ minHeight: "100vh" }}>
      <div className="header-separator"></div>

      <div style={styles.container}>
        <h2 style={styles.title}>Instalación</h2>
        <p style={styles.subtitle}>Selecciona el producto que adquiriste:</p>

        <div style={styles.buttons}>
          <button onClick={() => toggleInstructions("product1")} style={styles.button}>
            Producto 1 (Wi-Fi)
          </button>
          <button onClick={() => toggleInstructions("product23")} style={styles.button}>
            Producto 2 & 3 (LTS y Carburación)
          </button>
        </div>

        {selectedProduct && (
          <div style={styles.instructions}>
            <h3>{instructions[selectedProduct].title}</h3>

            {selectedProduct === "product1" ? (
              instructions.product1.steps.map((step, index) => (
                <div key={index} style={styles.step}>
                  <h4>{step.title}</h4>
                  <ul>
                    {step.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <div style={styles.step}>
                <ul>
                  {instructions.product23.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
                <img
                  src={instructions.product23.image}
                  alt="Instalación Producto 2 y 3"
                  style={styles.image}
                />
              </div>
            )}
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
    flex: 1, // ✅ Matches flex layout
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
    maxWidth: "800px",
    margin: "auto",
    marginBottom: "50px",
  },
  step: {
    marginBottom: "20px",
  },
  image: {
    width: "100%",
    maxWidth: "600px",
    display: "block",
    margin: "auto",
    marginTop: "20px",
    borderRadius: "10px",
  },
};

export default Instalacion;
