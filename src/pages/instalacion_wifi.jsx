// src/pages/instalacion_wifi.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/InstalacionWifi.css";

const manualUrl = `${process.env.PUBLIC_URL}/assets/Manual%20WIFI.pdf`;
const pdfFallbackUrl = manualUrl;
const img = (name) => `${process.env.PUBLIC_URL}/assets/${name}`;

export default function InstalacionWifi() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Instalación Wi-Fi | GasTraker";
  }, []);

  return (
    <main className="instalacion-container">
      <header className="instalacion-hero">
        <h1>Instalación Wi-Fi</h1>
        <p>Guía paso a paso para instalar tu equipo GasTraker Wi-Fi y dejarlo conectado.</p>
      </header>

      {/* ====== Instalación del sensor ====== */}
      <section className="instalacion-section">
        <h2>Instalación</h2>
        <ol className="step-list">
          <li>
            <strong>Ubicar el tanque</strong>. Asegúrate de tener acceso al sensor analógico de tu tanque
            estacionario.
          </li>
          <li>
            <strong>Quitar tornillos del sensor analógico</strong>{" "}
            <span className="note">( <b>NO los 4 que sujetan el flotador</b> )</span>.
          </li>
          <li>
            <strong>Colocar el nuevo sensor</strong>: usa el fijador del cable, atornilla y coloca la cubierta para
            protegerlo de golpes y clima.
          </li>
        </ol>

        <div className="media-row">
          <figure>
            <img src={img("analogo_tornillo.PNG")} alt="Quitar tornillos del sensor analógico" />
            <figcaption>Retira únicamente los tornillos del sensor.</figcaption>
          </figure>
          <figure>
            <img src={img("gt_tornillo.PNG")} alt="Instalar tornillos del nuevo sensor" />
            <figcaption>Coloca el sensor y vuelve a atornillar.</figcaption>
          </figure>
          <figure>
            <img src={img("tapa.PNG")} alt="Cubierta del sensor instalada" />
            <figcaption>Usa la cubierta para evitar daños.</figcaption>
          </figure>
        </div>
      </section>

      {/* ====== Colocar equipo ====== */}
      <section className="instalacion-section">
        <h2>Colocar equipo</h2>
        <ol className="step-list">
          <li>
            <strong>Pega el velcro</strong> cerca del router y de una toma de corriente 120V (que llegue señal Wi-Fi y el
            cargador alcance).
          </li>
          <li>
            <strong>Pega el equipo</strong> sobre el velcro.
          </li>
          <li>
            <strong>Verifica la señal Wi-Fi</strong> (ideal: intensidad media/alta en el lugar del equipo).
          </li>
        </ol>
      </section>

      {/* ====== Conexiones ====== */}
      <section className="instalacion-section">
        <h2>Conexiones</h2>
        <ol className="step-list">
          <li>
            Lleva el <strong>cable del sensor (gris)</strong> hasta el equipo y conéctalo en su puerto.
          </li>
          <li>
            Conecta el <strong>cargador</strong> a una toma de corriente y luego al equipo.
          </li>
        </ol>
      </section>

      {/* ====== Configuración Wi-Fi ====== */}
      <section className="instalacion-section">
        <h2>Configuración Wi-Fi</h2>
        <ol className="step-list">
          <li>
            <div className="qr-row">
              <span>
                Abre <strong>gastraker.com</strong> o escanea el QR (Web/App).
              </span>
              <img
                className="qr-img"
                src={img("qr.png")}
                alt="QR para abrir GasTraker"
              />
            </div>
          </li>
          <li>Regístrate e inicia sesión con tu usuario y contraseña.</li>
          <li>
            Con tu sesión iniciada, ve a <strong>Ajustes Wi-Fi del celular</strong> y busca la red{" "}
            <strong>“GasTraker###”</strong>. Si el equipo no está enchufado o no tiene corriente, la red <em>no</em>{" "}
            aparecerá.
          </li>
          <li>
            Selecciona la red <strong>GasTraker###</strong> e introduce la contraseña{" "}
            <strong>GasTraker</strong>
          </li>
          <li>
            <strong>Opción A (pantalla aparece sola):</strong> al conectar puede abrirse automáticamente la pantalla de
            configuración. Toca <b>Conectar</b>, elige tu <b>red Wi-Fi de casa</b> y escribe la{" "}
            <b>contraseña correcta de tu módem/router</b>.
          </li>
          <li>
            <strong>Opción B (no aparece la pantalla):</strong> regresa a la Web/App de GasTraker y presiona el botón{" "}
            <b>“Conectar”</b> junto a <b>“Estatus”</b>. Acepta la redirección, elige tu red de casa y escribe la
            contraseña del módem/router. Al guardar, verás un mensaje de confirmación; se cerrará sola o puedes
            cerrarla. En la pantalla inicial, en &lt; 1 min el estatus debe verse <strong>Conectado</strong> (verde).
          </li>
        </ol>

        <div className="callout">
          <strong>Verificación:</strong> si después de 2–3 minutos la red “GasTraker###” sigue visible en los ajustes
          Wi-Fi del teléfono, la configuración no se completó. Repite los pasos y verifica la contraseña del
          módem/router.
          <br />
          <strong>Importante:</strong> este proceso debe hacerse mientras estás conectado a la red “GasTraker###”.
        </div>
      </section>

      {/* ====== Suscripción ====== */}
      <section className="instalacion-section">
        <h2>Suscripción</h2>
        <ol className="step-list">
          <li>Abre el menú superior izquierdo.</li>
          <li>Entra a <strong>Ajustes</strong>.</li>
          <li>
            Toca <strong>“Suscribirse”</strong> (te redirigirá a Stripe). Agrega tu método de pago y confirma.{" "}
            <em>Si es la primera vez de ese equipo, el cobro inicia hasta el mes 2.</em>
          </li>
        </ol>
        <p>Una vez suscrito, ya puedes dar de alta tu tanque.</p>
      </section>

      {/* ====== Agregar tanque ====== */}
      <section className="instalacion-section">
        <h2>Agregar tanque</h2>
        <ol className="step-list">
          <li>En el menú superior derecho, toca el ícono <strong>“+”</strong>.</li>
          <li>
            Escanea (o escribe manualmente) el <strong>QR/MAC</strong> del reverso del equipo.{" "}
            <em>Si lo escribes manual, asegúrate que sea 100% correcto o no funcionará.</em>
          </li>
          <li>Completa los campos, permite y selecciona la ubicación del tanque, guarda y acepta.</li>
        </ol>
      </section>

      {/* ====== Manual PDF ====== */}
      <section className="instalacion-section">
        <h2>Manual Wi-Fi (PDF)</h2>

        <div className="pdf-actions">
          <a className="btn primary" href={pdfFallbackUrl} target="_blank" rel="noreferrer">
            Ver / Descargar manual
          </a>
        </div>
      </section>

      {/* ====== Video ====== */}
      <section className="instalacion-section">
        <h2>Video de instalación</h2>
        <div className="video-wrapper">
          <iframe
            title="Video de instalación GasTraker Wi-Fi"
            src="https://www.youtube.com/embed/AIU24-JWpCI"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        <p className="help-text">
          ¿Requieres más asistencia? Debajo del video encontrarás nuestros medios de contacto.
        </p>
      </section>

      {/* ====== Contacto breve ====== */}
      <section className="instalacion-section contacto-mini">
        <h3>¿Necesitas ayuda?</h3>
        <p>
          Escríbenos por WhatsApp o desde la página de <Link to="/contacto">Contacto</Link>. ¡Con gusto te apoyamos!
        </p>
        <a
          className="btn whatsapp"
          href="https://wa.me/5218136032232"
          target="_blank"
          rel="noreferrer"
        >
          Abrir WhatsApp
        </a>
      </section>
    </main>
  );
}