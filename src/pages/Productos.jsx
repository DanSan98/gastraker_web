import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//PENDIENTE DE CAMBIAR A PRODUCCION//

const DEFAULT_SHOP_ROUTE = "https://gastraker.com/api/Data/RequestBuyOptions";

//PENDIENTE DE CAMBIAR A PRODUCCION//
const valid_devices = ["wifi", "lts", "carburacion", "lts_u", "ws", "uhf"]
const images = [
    "/assets/product1.jpg",
    "/assets/game-lts.webp",
    "/assets/product3.jpg",
    "/assets/lts_u.jpg",
    "/assets/ws.jpg",
    "/assets/uhf.jpg",
];

const descriptions = [
    "Wi-Fi (Consulta nivel desde web/app)",
    "LTS (Consulta nivel desde equipo físico)",
    "Carburación (Consulta nivel en el tablero de tu carro)",
    "LTS-U (Consulta nivel desde equipo físico LTS y %, inalámbrico con celda solar)",
    "WS (Consulta nivel desde equipo físico LTS)",
    "UHF (Consulta nivel desde equipo físico LTS, nalámbrico con celda solar)",
];

const info = [
    "Nuestro modelo más reciente permite consultar el nivel de gas LP desde tu dispositivo móvil a través de nuestra web-app, facilitando la supervisión remota del tanque.",
    "Este equipo cuenta con una pantalla digital que muestra el nivel en LTS Y %. La lectura se realiza físicamente desde el dispositivo.",
    "Diseñado para automóviles que utilizan gas LP, este modelo muestra el nivel directamente en una pantalla digital instalada en el tablero del vehículo.",
    "Equipo inalámbrico que muestra el nivel en pantalla física (LTS Y %) envía la lectura de forma inalámbrica con celda solar.",
    "Versión básica con pantalla (LTS) para ver el nivel localmente sin conectividad adicional.",
    "Equipo inalámbrico (LTS) con celda solar, ideal para zonas sin acceso a corriente eléctrica.",
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
    product4: {
        image: "/assets/lts_u.png",
        steps: [],
    },
    product5: {
        image: "/assets/ws.png",
        steps: [],
    },
    product6: {
        image: "/assets/uhf.png",
        steps: [],
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

    function CreateShopRoute(device_index, device_quantity) {
        if (!valid_devices[device_index]) {
            //alert("Invalid device");
            return;
        }
        if (device_quantity < 1 || device_quantity > 100) {
            //alert("Invalid quantity")
            return;
        }
        const query_param = `?q=${device_quantity}&d=${valid_devices[device_index]}`
        console.log(query_param);
        return DEFAULT_SHOP_ROUTE + query_param;
    }
    function showModalHandler() {
        const dialog = document.querySelector("#device_quantity_dialog");
        if (dialog) {
            dialog.showModal();
        }
    }
    function hideModalHandler() {
      const dialog = document.querySelector("#device_quantity_dialog");
      if (dialog) {
        const form = dialog.querySelector(".device_quantity_form");
        if (form) form.reset();
        dialog.close();
      }
    }
    

    function realizarPedidoHandler() {
      const quantityInput = document.querySelector("#selected_quantity_input");
      if (!quantityInput.checkValidity()) {
        quantityInput.reportValidity();
        return;
      }
    
      const selectedQuantity = quantityInput.value;
      const route = CreateShopRoute(selectedIndex, selectedQuantity);
      if (route) {
        window.open(route, "_blank"); // abrir en nueva pestaña
        hideModalHandler(); // cerrar el modal
      }
    }
    return (
        <div className="productos-wrapper" style={{ minHeight: "100vh" }}>
            
            <dialog
  id="device_quantity_dialog"
  style={{
    border: "none",
    padding: "0",
    background: "transparent",
  }}
>
  <div
    style={{
      background: "white",
      border: "3px solid #0050B3",
      borderRadius: "12px",
      padding: "30px 20px",
      maxWidth: "400px",
      width: "100%",
      boxSizing: "border-box",
      textAlign: "center",
    }}
  >
    <form method="dialog" className="device_quantity_form" style={{ margin: 0 }}>
      <h3 style={{ marginBottom: "20px" }}>
        Selecciona la cantidad de dispositivos {valid_devices[selectedIndex]}
      </h3>
      <input
        id="selected_quantity_input"
        type="number"
        min="1"
        max="100"
        required
        style={{
          width: "100%",
          padding: "12px",
          fontSize: "18px",
          borderRadius: "12px",
          border: "2px solid black",
          textAlign: "center",
          boxSizing: "border-box",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
          marginTop: "25px",
          flexWrap: "wrap",
        }}
      >
        <button
          type="button"
          onClick={hideModalHandler}
          style={{
            flex: 1,
            minWidth: "120px",
            padding: "15px 30px",
            fontSize: "16px",
            borderRadius: "30px",
            fontWeight: "bold",
            border: "none",
            background: "linear-gradient(90deg, #b71c1c, #ef5350)",
            color: "white",
            cursor: "pointer",
          }}
        >
          Cancelar
        </button>
        <button
          type="button"
          onClick={realizarPedidoHandler}
          style={{
            flex: 1,
            minWidth: "120px",
            padding: "15px 30px",
            fontSize: "16px",
            borderRadius: "30px",
            fontWeight: "bold",
            border: "none",
            background: "linear-gradient(90deg, #1b5e20, #66bb6a)",
            color: "white",
            cursor: "pointer",
          }}
        >
          Ir al pago
        </button>
      </div>
    </form>
  </div>
</dialog>

            <div className="header-separator"></div>
            <div style={styles.container}>
                <h2 style={styles.title}>Productos</h2>
                <p style={styles.subtitle}>Contamos con 6 modelos diferentes para adaptarnos a tus necesidades</p>

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
                    {["Wi-Fi", "LTS", "Carburación", "LTS-U", "WS", "UHF"].map((label, i) => (
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
                                <button
                                type="button"
                                onClick={showModalHandler}
                                style={{
                                    display: "inline-block",
                                    cursor: "pointer",
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
                                </button>
                            </div>
                            {selectedIndex !== null && valid_devices[selectedIndex] && (
    <div style={{ textAlign: "center", marginTop: "10px" }}>
        <a
            href={`/assets/Manual ${valid_devices[selectedIndex].toUpperCase()}.pdf`}
            download
            style={{
                display: "inline-block",
                padding: "10px 30px",
                fontSize: "14px",
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
        dialogForm: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "30px 20px",
          borderRadius: "10px",
          backgroundColor: "white",
          width: "100%",
          maxWidth: "400px",
          margin: "auto",
        },
        buttonsCt: {
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          marginTop: "20px",
          gap: "20px",
          flexWrap: "wrap",
        },
        inputquantity: {
          margin: "10px 0",
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          textAlign: "center",
        },
    },
    buttonsCt: {
        padding: "10px",
        gap: "10px"
    },
    dialogstyles: {
        borderRadius : "10px",
        border: "0px solid black !important"
    },
    inputquantity: {
        margin: "10px",
        width: "80%"
    }
    
};

export default Productos;