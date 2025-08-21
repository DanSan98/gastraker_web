import React, { useState } from "react";

const faqs = [
  {
    question: "¿Qué hago si no funciona mi equipo?",
    answer: (
      <>
        Revisar los siguientes puntos:
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>a) Asegurar que tengas luz y que el enchufe tenga corriente.</li>
          <li>b) Asegurar que funcione el internet.</li>
          <li>c) Asegurar que esté bien conectado el equipo y sus puertos (cable al enchufe y al equipo, sensor al equipo).</li>
          <li>d) Asegurar que estés en el tanque correcto.</li>
          <li>e) Que esté configurado (seguir pasos en sección Instalación).</li>
        </ul>
      </>
    )
  },
  {
    question: "¿Cuáles tornillos debo quitar del sensor o tanque?",
    answer: "Por ningún motivo debes quitar los 4 tornillos que fijan el flotador del tanque. Solo se quitan los 2 tornillos que sujetan la aguja o indicador de nivel."
  },
  {
    question: "El nivel de gas no se muestra en el sensor digital",
    answer: "Asegurar que el sensor esté fijado correctamente con los 2 tornillos y que esté conectado de manera correcta al equipo GasTraker en su puerto correspondiente."
  },
  {
    question: "No muestra el nivel en mi web/app",
    answer: "Asegurar que estés en el tanque correcto, que se haya hecho bien la configuración y que el equipo esté conectado a internet."
  },
  {
    question: "Analizar la app para pantalla de inicio",
    answer: "Seleccionar 'Analizar App' para poder tenerla en la pantalla de inicio o como app en tu celular. No tiene ningún riesgo."
  },
  {
    question: "¿Qué pasa si no me aparece la ventana de configuración después de dar click en Conectar o Desconectado?",
    answer: "Si no abre la ventana quiere decir que el celular no está conectado al wifi de GasTraker. Entra a tu cuenta y no cierres sesión; ve a ajustes del celular y conéctate a la red de GasTraker (si no aparece, revisar que esté bien conectado el equipo o quiere decir que ya está configurado). Contraseña de red: 'GasTraker'."
  },
  {
    question: "¿Cómo le hago para tener la web/app en mi pantalla de inicio?",
    answer: (
      <>
        <p><strong>iOS:</strong> Ir a la web/app <a href="https://gastraker.com" target="_blank" rel="noopener noreferrer">gastraker.com</a> y dar click en el botón de compartir que se encuentra abajo (abajo de la barra de búsqueda) en el centro, deslizar hacia abajo y seleccionar <em>Agregar a pantalla de inicio</em>. Finalizar con <em>Agregar</em>. Entrar de nuevo a tu cuenta y listo.</p>
        <p><strong>Android:</strong> Abre la web/app <a href="https://gastraker.com" target="_blank" rel="noopener noreferrer">gastraker.com</a> en el navegador Chrome. Luego, toca el ícono de los tres puntos (menú) en la esquina superior derecha y selecciona <em>“Agregar a la pantalla principal”</em>. Confirma con <em>Agregar</em> y se creará un acceso directo en tu pantalla de inicio.</p>
      </>
    )
  },
  {
    question: "¿Cómo le hago para activar las notificaciones?",
    answer: "Ir a ajustes en el menú superior izquierdo y seleccionar la casilla de notificaciones y permitir. Te notificará al momento que llegue a tu nivel de reserva."
  },
  {
    question: "¿Cuánto cuesta la suscripción?",
    answer: "La suscripción tiene un costo de $29 pesos mensuales. Al instalar tu equipo por primera vez, recibirás una prueba gratuita de 2 meses. Para activar la prueba deberás registrar una tarjeta, al finalizar este periodo, se realizará el primer cobro automático. ¡Y hay más! Si eliges el pago anual, obtendrás 2 meses adicionales gratis de suscripción."
  }
];

const Soporte = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [search, setSearch] = useState("");

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(search.toLowerCase()) ||
    (typeof faq.answer === "string" &&
      faq.answer.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="soporte-wrapper">
      <div style={styles.container}>
        <h2 style={styles.title}>Centro de Soporte</h2>
        <p style={styles.subtitle}>
          Encuentra respuestas rápidas y contacta a nuestro equipo de soporte.
        </p>

        <input
          type="text"
          placeholder="Buscar por palabra clave..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.searchInput}
        />

        <div style={styles.faqContainer}>
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              style={styles.faqBox}
              onClick={() => toggleFAQ(index)}
            >
              <div style={styles.question}>
                {faq.question}
                <span
                  style={{
                    ...styles.icon,
                    transform: expandedIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  ▼
                </span>
              </div>
              <div
                style={{
                  ...styles.answerContainer,
                  maxHeight: expandedIndex === index ? "500px" : "0px",
                  paddingTop: expandedIndex === index ? "10px" : "0px",
                }}
              >
                <div style={styles.answer}>{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>

        {/* === Video de instalación (YouTube Short) === */}
        <section style={styles.videoSection}>
          <h3 style={styles.videoTitle}>Video de instalación – Modelo Wi-Fi</h3>
          <p style={styles.videoSubtitle}>Paso a paso.</p>

          {/* Short: usa /embed/ID para mostrar el preview */}
          <div style={styles.videoContainer}>
            <iframe
              style={styles.videoIframe}
              src="https://www.youtube.com/embed/AIU24-JWpCI"
              title="Instalación GasTraker Wi-Fi"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>

        <p style={styles.finalNote}>
          ¿Necesitas más información u orientación? Por favor mándanos un mensaje en la sección de{" "}
          <a href="/contacto" style={styles.contactLink}>Contacto</a>.
        </p>
      </div>

      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/5218136032232"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.whatsapp}
        aria-label="Abrir chat de WhatsApp"
      >
        <img
          src="/assets/whatsapp-icon.png"
          alt="WhatsApp"
          style={styles.whatsappImage}
        />
      </a>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "60px 20px",
    maxWidth: "900px",
    margin: "auto",
  },
  title: { fontSize: "32px", fontWeight: "bold", marginBottom: "10px" },
  subtitle: { fontSize: "18px", marginBottom: "30px" },
  searchInput: {
    width: "100%",
    maxWidth: "500px",
    padding: "12px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginBottom: "30px",
  },
  faqContainer: { textAlign: "left" },
  faqBox: {
    background: "#f9f9f9",
    padding: "15px 20px",
    borderRadius: "10px",
    marginBottom: "15px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
    cursor: "pointer",
    transition: "0.3s ease",
    border: "1px solid #ddd",
  },
  question: {
    fontSize: "18px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: { fontSize: "18px", transition: "transform 0.3s ease" },
  answerContainer: {
    overflow: "hidden",
    transition: "max-height 0.4s ease, padding-top 0.3s ease",
  },
  answer: { fontSize: "16px", lineHeight: "1.5" },

  /* ===== Video styles (9:16 para Short) ===== */
  videoSection: { marginTop: "40px", textAlign: "center" },
  videoTitle: { fontSize: "22px", fontWeight: 700, marginBottom: "6px" },
  videoSubtitle: { fontSize: "14px", color: "#666", marginBottom: "16px" },
  videoContainer: {
    position: "relative",
    width: "100%",
    maxWidth: "420px",
    margin: "0 auto 10px",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
    background: "#000",
    paddingTop: "56.25%", // 9:16 (Short). Para 16:9 usa "56.25%".
  },
  videoIframe: { position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 },

  finalNote: { marginTop: "28px", fontSize: "16px", color: "#333" },
  contactLink: { color: "#0056b3", fontWeight: "bold", textDecoration: "none" },

  whatsapp: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: 1000,
    transition: "transform 0.3s ease-in-out",
  },
  whatsappImage: { width: "60px", height: "60px", transition: "transform 0.3s ease-in-out" },
};

export default Soporte;