// src/pages/Productos.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

// PENDIENTE DE CAMBIAR A PRODUCCION //
const DEFAULT_SHOP_ROUTE = "https://gastraker.com/api/Data/RequestBuyOptions";

// Solo estos dos modelos se venden ahora
const valid_devices = ["wifi", "lts"];

const Productos = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  function CreateShopRoute(device_index, device_quantity) {
    if (!valid_devices[device_index]) return;
    if (device_quantity < 1 || device_quantity > 100) return;

    const query_param = `?q=${device_quantity}&d=${valid_devices[device_index]}`;
    console.log(query_param);
    return DEFAULT_SHOP_ROUTE + query_param;
  }

  function showModalHandler() {
    const dialog = document.querySelector("#device_quantity_dialog");
    if (dialog) dialog.showModal();
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
      window.open(route, "_blank");
      hideModalHandler();
    }
  }

  return (
    <div className="productos-wrapper" style={{ minHeight: "100vh" }}>
      {/* ===== Modal cantidad ===== */}
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
          <form
            method="dialog"
            className="device_quantity_form"
            style={{ margin: 0 }}
          >
            <h3 style={{ marginBottom: "20px" }}>
              Selecciona la cantidad de dispositivos{" "}
              {valid_devices[selectedIndex]?.toUpperCase()}
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

      {/* ===== HERO (fondo blanco) ===== */}
      <section style={styles.heroSection}>
        <div style={styles.contentCenter}>
          <h2 style={styles.heroTitle}>Monitorea tu nivel de gas</h2>
          <p style={styles.heroText}>
            GasTraker te ayuda a tener control total de tu tanque estacionario,
            ya sea desde tu celular o con un monitor físico.
          </p>
        </div>
      </section>

      {/* ===== BENEFICIOS (fondo gris claro) ===== */}
      <section style={styles.benefitsSection}>
        <div style={styles.contentCenter}>
          <div style={styles.benefitsGrid}>
            <div style={styles.benefitItem}>
              <span style={styles.benefitIcon}>🏠</span>
              <p>No vuelvas a subir a tu azotea.</p>
            </div>
            <div style={styles.benefitItem}>
              <span style={styles.benefitIcon}>🔥</span>
              <p>Recibe los litros que pagas.</p>
            </div>
            <div style={styles.benefitItem}>
              <span style={styles.benefitIcon}>📈</span>
              <p>Conoce tus hábitos de consumo.</p>
            </div>
            <div style={styles.benefitItem}>
              <span style={styles.benefitIcon}>📲</span>
              <p>Actúa antes de quedarte sin gas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SELECCIÓN DE MODELO (fondo gris azulado muy suave) ===== */}
      <section style={styles.chooseSection}>
        <div style={styles.contentCenter}>
          <h3 style={styles.chooseTitle}>Elige el modelo que mejor se adapta a ti</h3>
          <p style={styles.chooseSubtitle}>
            Ambos son compatibles con tanques estacionarios de{" "}
            <strong>0 a 5,000 litros</strong>. Solo decide si prefieres verlo desde
            tu celular o directamente en el equipo.
          </p>
        </div>

        {/* TARJETAS WIFI / LTS */}
        <div style={styles.cardsSection}>
          {/* WIFI */}
          <article style={styles.card}>
            <div style={styles.cardHeader}>
              <h4 style={styles.cardBrand}>GasTraker</h4>
              <h3 style={styles.cardTitle}>Wi-Fi</h3>
            </div>
            <div style={styles.cardImageWrapper}>
              <img
                src="/assets/product1.jpg"
                alt="GasTraker Wi-Fi"
                style={styles.cardImage}
              />
            </div>
            <ul style={styles.cardList}>
              <li>Consulta el nivel en litros y % desde tu celular 24/7.</li>
              <li>Web-app desde cualquier lugar con internet.</li>
              <li>Incluye <strong>2 años de servicio</strong>.</li>
              <li>
                Ideal para casas y negocios con{" "}
                <strong>Wi-Fi y corriente</strong>
                 (incluye <strong>12 m de cable</strong>).
              </li>
              <li>Para tanques de 0 a 5,000 LTS.</li>
            </ul>
            <div style={styles.priceBlock}>
              <div style={styles.price}>$2,200.00</div>
              <div style={styles.priceNote}>IVA incluido · envío en México*</div>
            </div>
            <button
              type="button"
              onClick={() => {
                setSelectedIndex(0);
                showModalHandler();
              }}
              style={styles.buyButton}
            >
              Lo quiero (Wi-Fi)
            </button>
            <div style={styles.cardFooterText}>
              Requiere señal de Wi-Fi y corriente eléctrica estable.
            </div>
          </article>

          {/* LTS */}
          <article style={styles.card}>
            <div style={styles.cardHeader}>
              <h4 style={styles.cardBrand}>GasTraker</h4>
              <h3 style={styles.cardTitle}>LTS</h3>
            </div>
            <div style={styles.cardImageWrapper}>
              <img
                src="/assets/game-lts.webp"
                alt="GasTraker LTS"
                style={styles.cardImage}
              />
            </div>
            <ul style={styles.cardList}>
              <li>
                Monitor físico que muestra el nivel en litros y % directamente
                en pantalla.
              </li>
              <li>No usa Wi-Fi ni app: todo se ve en el equipo.</li>
              <li>
                Ideal para quien prefiere revisar el tanque{" "}
                <strong>directamente en sitio</strong>.
              </li>
              <li>Para tanques de 0 a 5,000 LTS.</li>
            </ul>
            <div style={styles.priceBlock}>
              <div style={styles.price}>$3,000.00</div>
              <div style={styles.priceNote}>IVA incluido · envío en México*</div>
            </div>
            <button
              type="button"
              onClick={() => {
                setSelectedIndex(1);
                showModalHandler();
              }}
              style={styles.buyButton}
            >
              Lo quiero (LTS)
            </button>
            <div style={styles.cardFooterText}>
              No requiere internet, solo instalar sensor y equipo.
            </div>
          </article>
        </div>
      </section>

      {/* ===== MÁS INFO / CONTACTO (fondo gris claro) ===== */}
      <section style={styles.moreInfoSection}>
        <div style={styles.contentCenter}>
          <p>
            ¿Tienes dudas sobre cuál te conviene más?{" "}
            <Link to="/contacto" style={styles.link}>
              Escríbenos y te ayudamos a escoger.
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

const styles = {
  contentCenter: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 20px",
  },

  /* HERO */
  heroSection: {
    backgroundColor: "#ffffff",
    padding: "50px 0 30px",
    textAlign: "center",
  },
  heroTitle: { fontSize: "32px", fontWeight: "bold" },
  heroText: {
    fontSize: "16px",
    marginTop: "10px",
    color: "#333",
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
  },

  /* BENEFICIOS */
  benefitsSection: {
    backgroundColor: "#f4f6f8",
    padding: "30px 0 40px",
  },
  benefitsGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px",
  },
  benefitItem: {
    maxWidth: "200px",
    fontSize: "14px",
    color: "#333",
    textAlign: "center",
  },
  benefitIcon: { fontSize: "32px", display: "block", marginBottom: "10px" },

  /* ELIGE MODELO + TARJETAS */
  chooseSection: {
    backgroundColor: "#eef2f7",
    padding: "40px 0 50px",
  },
  chooseTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center",
  },
  chooseSubtitle: {
    fontSize: "15px",
    color: "#333",
    marginTop: "10px",
    textAlign: "center",
    maxWidth: "700px",
    marginLeft: "auto",
    marginRight: "auto",
  },

  cardsSection: {
    maxWidth: "1100px",
    margin: "35px auto 0",
    padding: "0 20px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    alignItems: "stretch",
  },
  card: {
    background: "white",
    borderRadius: "18px",
    padding: "25px 22px 30px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cardHeader: { marginBottom: "10px" },
  cardBrand: {
    fontSize: "14px",
    letterSpacing: "2px",
    color: "#0050B3", // antes naranja, ahora azul
    textTransform: "uppercase",
  },
  cardTitle: { fontSize: "22px", fontWeight: "bold", margin: "0" },

  cardImageWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    margin: "18px 0 12px",
  },
  cardImage: {
    width: "90%",
    maxWidth: "320px",
    maxHeight: "260px", // más grande que antes
    objectFit: "contain",
  },

  cardList: {
    paddingLeft: "18px",
    fontSize: "14px",
    color: "#333",
    marginBottom: "20px",
  },
  priceBlock: { textAlign: "center", marginBottom: "15px" },
  price: { fontSize: "26px", fontWeight: "bold" },
  priceNote: { fontSize: "12px", color: "#666" },

  buyButton: {
    display: "block",
    width: "100%",
    padding: "12px 20px",
    borderRadius: "30px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
    background: "linear-gradient(90deg, #001A4D, #0050B3)",
    color: "white",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
    marginBottom: "10px",
  },
  cardFooterText: {
    fontSize: "12px",
    color: "#555",
    textAlign: "center",
  },

  /* MÁS INFO */
  moreInfoSection: {
    backgroundColor: "#f4f6f8",
    padding: "25px 0 40px",
    textAlign: "center",
    fontSize: "14px",
    color: "#333",
  },
  link: { color: "#0050B3", fontWeight: "bold", textDecoration: "none" },
};

export default Productos;