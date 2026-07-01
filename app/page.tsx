"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SHOP_LINK = "https://gastraker.com/api/Data/RequestBuyOptions";
const WHATSAPP_LINK = "https://wa.me/528136032232";
const VALID_DEVICES = ["wifi", "lts", "ws"];

const text = {
  es: {
    nav: ["Inicio", "Productos", "Instalación", "Soporte", "Contacto"],
    buy: "Comprar",
    more: "Más info",
    less: "Menos info",
    heroTitle: "Control total de tu tanque estacionario.",
    heroText:
      "GasTraker te ayuda a conocer el nivel de gas de tu tanque sin subir a la azotea. Elige entre verlo desde tu celular o directamente en un monitor físico.",
    heroBtn: "Ver productos",
    whatsapp: "Hablar por WhatsApp",
    benefitsTitle: "GasTraker WiFi",
    benefitsSubtitle:
      "El modelo más completo: monitoreo desde tu celular, estadísticas, alertas y control 24/7.",
    benefits: [
      "📱 Nivel 24/7 en litros y porcentaje desde tu celular.",
      "🔔 Notificaciones automáticas antes de que se acabe el gas.",
      "⛽ Vista de última recarga con cantidad, hora y fecha.",
      "📊 Estadísticas de consumo diario, semanal y mensual.",
      "⚠️ Alertas de consumos inusuales.",
      "🎁 2 años de servicio de app incluido.",
      "🎯 Monitoreo preciso ±1% en todo momento.",
      "🛡️ Equipo confiable y de alta durabilidad.",
      "🏆 2 años de garantía, mejor que la competencia.",
    ],
    productsTitle: "Elige tu GasTraker",
    productsSubtitle:
      "Todos los modelos incluyen sensor y cable de 12 metros. Solo decide cómo prefieres consultar tu gas.",
    products: [
      {
        name: "GasTraker WiFi",
        img: "/equipo_wifi.png",
        desc: "Consulta litros y porcentaje desde tu celular. Incluye 2 años de servicio; después $20 MXN/mes.",
        price: "$1,624 MXN",
        total: "Total con envío",
        details: [
          "Lectura en litros y porcentaje desde el celular.",
          "Equipo con 12 m de cable.",
          "Cable extra se vende por aparte.",
          "Rango de hasta 100 m.",
          "Cargador 5V-1A Micro USB incluido.",
          "2 años de garantía.",
          "100% digital.",
          "Nivel 24/7 en litros y porcentaje.",
          "Notificaciones automáticas antes de que se acabe el gas.",
          "Vista de última recarga con cantidad, hora y fecha.",
          "Estadísticas de consumo diario, semanal y mensual.",
          "Alertas de consumos inusuales.",
          "2 años de servicio de app incluido.",
          "Después de los 2 años, la mensualidad es de $20 MXN.",
          "Con pago anual ahorras 16.67%: pagas 10 meses y recibes 12 meses de servicio.",
        ],
      },
      {
        name: "GasTraker LTS",
        img: "/equipo_lts.png",
        desc: "Monitor físico con lectura en litros y porcentaje (Baterías o eliminador).",
        price: "$2,296 MXN",
        total: "Total con envío",
        details: [
          "Lectura en litros y porcentaje.",
          "Equipo con 12 m de cable.",
          "Cable extra se vende por aparte.",
          "Rango de hasta 150 m.",
          "Baterías incluidas.",
          "Eliminador/cargador se vende por aparte.",
          "2 años de garantía.",
          "100% digital.",
        ],
      },
      {
        name: "GasTraker WS",
        img: "/equipo_ws.png",
        desc: "Monitor físico con lectura en porcentaje (Baterías o eliminador).",
        price: "$2,238 MXN",
        total: "Total con envío",
        details: [
          "Lectura en porcentaje.",
          "Equipo con 12 m de cable.",
          "Cable extra se vende por aparte.",
          "Rango de hasta 150 m.",
          "Baterías incluidas.",
          "Eliminador/cargador se vende por aparte.",
          "2 años de garantía.",
          "100% digital.",
        ],
      },
    ],
    installTitle: "Instalación sencilla",
    installText:
      "El sensor se instala en el indicador del tanque estacionario y se conecta al equipo GasTraker. Nuestro equipo te guía durante el proceso.",
    faqTitle: "Preguntas frecuentes",
    faqs: [
  [
    "¿Qué hago si no funciona mi equipo?",
    "Revisa los siguientes puntos: a) Asegura que tengas luz y que el enchufe tenga corriente. b) Asegura que funcione el internet. c) Asegura que esté bien conectado el equipo y sus puertos: cable al enchufe y al equipo, sensor al equipo. d) Asegura que estés en el tanque correcto. e) Asegura que esté configurado siguiendo los pasos de la sección Instalación.",
  ],
  [
    "¿Cuáles tornillos debo quitar del sensor o tanque?",
    "Por ningún motivo debes quitar los 4 tornillos que fijan el flotador del tanque. Solo se quitan los 2 tornillos que sujetan la aguja o indicador de nivel.",
  ],
  [
    "El nivel de gas no se muestra en el sensor digital",
    "Asegura que el sensor esté fijado correctamente con los 2 tornillos y que esté conectado de manera correcta al equipo GasTraker en su puerto correspondiente.",
  ],
  [
    "No muestra el nivel en mi web/app",
    "Asegura que estés en el tanque correcto, que se haya hecho bien la configuración y que el equipo esté conectado a internet. Si se cambia la contraseña de internet o si cambia el router, tenrdás que configurar el equipo desde 0",
  ],
  [
    "¿Qué significa Analizar App?",
    "Seleccionar “Analizar App” permite tener la web/app en la pantalla de inicio o como app en tu celular. No tiene ningún riesgo.",
  ],
  [
    "¿Qué pasa si no aparece la ventana de configuración después de dar click en Conectar o Desconectado?",
    "Si no abre la ventana, quiere decir que el celular no está conectado al WiFi de GasTraker. Entra a tu cuenta y no cierres sesión; ve a ajustes del celular y conéctate a la red de GasTraker. Si no aparece, revisa que esté bien conectado el equipo o puede significar que ya está configurado. Contraseña de red: “GasTraker”.",
  ],
  [
    "¿Cómo agrego la web/app a mi pantalla de inicio en iPhone?",
    "En iOS: ve a gastraker.com y toca el botón de compartir que se encuentra abajo, al centro, debajo de la barra de búsqueda. Desliza hacia abajo y selecciona “Agregar a pantalla de inicio”. Finaliza con “Agregar”. Entra de nuevo a tu cuenta y listo.",
  ],
  [
    "¿Cómo agrego la web/app a mi pantalla de inicio en Android?",
    "En Android: abre gastraker.com en Chrome. Toca el ícono de los tres puntos en la esquina superior derecha y selecciona “Agregar a la pantalla principal”. Confirma con “Agregar” y se creará un acceso directo en tu pantalla de inicio.",
  ],
  [
    "¿Cómo activo las notificaciones?",
    "Ve a ajustes en el menú superior izquierdo, selecciona la casilla de notificaciones y permite el acceso. Te notificará cuando el tanque llegue a tu nivel de reserva. También se puede agregar un número de whatsapp para recibir las notificaciones por ese medio",
  ],
  [
    "¿Cuánto cuesta la suscripción?",
    "La suscripción tiene un costo de $20 pesos mensuales. Al instalar tu equipo por primera vez, recibirás una prueba gratuita de 2 años. Si eliges el pago anual, se descuentan 2 meses de suscripción.",
  ],
],
    contactTitle: "Contacto",
    contactText: "¿Tienes dudas o quieres comprar? Escríbenos.",
  },
  en: {
    nav: ["Home", "Products", "Installation", "Support", "Contact"],
    buy: "Buy",
    more: "More info",
    less: "Less info",
    heroTitle: "Total control of your stationary LP gas tank.",
    heroText:
      "GasTraker helps you check your gas level without climbing to the roof. Choose between mobile monitoring or a physical display.",
    heroBtn: "See products",
    whatsapp: "Chat on WhatsApp",
    benefitsTitle: "GasTraker WiFi",
    benefitsSubtitle:
      "The most complete model: mobile monitoring, statistics, alerts and 24/7 control.",
    benefits: [
      "📱 24/7 level in liters and percentage from your phone.",
      "🔔 Automatic notifications before running out of gas.",
      "⛽ Last refill view with amount, time and date.",
      "📊 Daily, weekly and monthly consumption statistics.",
      "⚠️ Unusual consumption alerts.",
      "🎁 2 years of app service included.",
      "🎯 Accurate monitoring ±1% at all times.",
      "🛡️ Reliable and highly durable equipment.",
      "🏆 2-year warranty, better than the competition.",
    ],
    productsTitle: "Choose your GasTraker",
    productsSubtitle:
      "All models include sensor and 12-meter cable. Just choose how you want to check your gas.",
    products: [
      {
        name: "GasTraker WiFi",
        img: "/equipo_wifi.png",
        desc: "Check liters and percentage from your phone. The most complete model.",
        price: "$1,624 MXN",
        total: "Total con envío",
        details: [
          "Liters and percentage reading from your phone.",
          "Device with 12 m cable.",
          "Extra cable sold separately.",
          "Range up to 100 m.",
          "5V-1A Micro USB charger included.",
          "2-year warranty.",
          "100% digital.",
          "24/7 level in liters and percentage.",
          "Automatic notifications before running out of gas.",
          "Last refill view with amount, time and date.",
          "Daily, weekly and monthly consumption statistics.",
          "Unusual consumption alerts.",
          "2 years of app service included.",
        ],
      },
      {
        name: "GasTraker LTS",
        img: "/equipo_lts.png",
        desc: "Physical monitor with liters and percentage reading.",
        price: "$2,296 MXN",
        total: "Envío incluido",
        details: [
          "Liters and percentage reading.",
          "Device with 12 m cable.",
          "Extra cable sold separately.",
          "Range up to 150 m.",
          "Batteries included.",
          "Power adapter/charger sold separately.",
          "2-year warranty.",
          "100% digital.",
        ],
      },
      {
        name: "GasTraker WS",
        img: "/equipo_ws.png",
        desc: "Physical monitor with percentage reading.",
        price: "$2,238 MXN",
        total: "Total con envío",
        details: [
          "Percentage reading.",
          "Device with 12 m cable.",
          "Extra cable sold separately.",
          "Range up to 150 m.",
          "Batteries included.",
          "Power adapter/charger sold separately.",
          "2-year warranty.",
          "100% digital.",
        ],
      },
    ],
    installTitle: "Simple installation",
    installText:
      "The sensor is installed on the tank gauge and connected to the GasTraker device. Our team guides you through the process.",
    faqTitle: "Frequently Asked Questions",
faqs: [
  [
    "What should I do if my device is not working?",
    "Check the following: a) Make sure you have power and that the outlet has electricity. b) Make sure your internet connection is working. c) Make sure the device and all ports are properly connected: power cable to outlet and device, sensor cable to the device. d) Make sure you are viewing the correct tank. e) Make sure the device has been configured following the Installation section.",
  ],
  [
    "Which screws should I remove from the sensor or tank?",
    "Under no circumstances should you remove the 4 screws that secure the tank float. Only remove the 2 screws that hold the gauge or level indicator.",
  ],
  [
    "The gas level does not appear on the digital monitor",
    "Make sure the sensor is properly secured using the 2 screws and that it is correctly connected to the GasTraker device in the appropriate port.",
  ],
  [
    "The level does not appear in my Web/App",
    "Make sure you are viewing the correct tank, that the configuration was completed correctly, and that the device is connected to the internet. If the Wi-Fi password changes or the router is replaced, you will need to configure the device again from the beginning.",
  ],
  [
    "What does 'Analyze App' mean?",
    "Selecting 'Analyze App' allows you to install the Web/App on your home screen and use it like an app on your phone. There is no risk in doing so.",
  ],
  [
    "What if the configuration window does not appear after clicking Connect or Disconnected?",
    "If the configuration window does not open, it means your phone is not connected to the GasTraker Wi-Fi network. Log in to your account and keep the session open. Then go to your phone's Wi-Fi settings and connect to the GasTraker network. If the network does not appear, verify that the device is properly powered and connected, or it may already be configured. Network password: 'GasTraker'.",
  ],
  [
    "How do I add the Web/App to my iPhone home screen?",
    "On iPhone: open gastraker.com and tap the Share button located at the bottom center of Safari. Scroll down and select 'Add to Home Screen'. Tap 'Add' to finish. Log back into your account and you're done.",
  ],
  [
    "How do I add the Web/App to my Android home screen?",
    "On Android: open gastraker.com in Google Chrome. Tap the three-dot menu in the upper-right corner and select 'Add to Home screen'. Confirm by tapping 'Add' and a shortcut will be created on your home screen.",
  ],
  [
    "How do I enable notifications?",
    "Go to Settings from the upper-left menu, enable notifications, and allow the required permissions. You will receive alerts when your tank reaches the reserve level. A WhatsApp number can also be added to receive notifications through WhatsApp.",
  ],
  [
    "How much does the subscription cost?",
    "The subscription costs $20 MXN per month. When you install your device for the first time, you receive a free 2-year trial. If you choose annual billing, you receive an additional 2 months free.",
  ],
],
    contactTitle: "Contact",
    contactText: "Have questions or want to buy? Contact us.",
  },
};

const carouselImages = [
  { src: "/equipo_wifi.png", label: "WiFi" },
  { src: "/equipo_lts.png", label: "LTS" },
  { src: "/equipo_ws.png", label: "WS" },
];

const installationProducts = [
  {
    name: "GasTraker WiFi",
    img: "/equipo_wifi.png",
    manual: "/manual_wifi.pdf",
    summary: "Instalación del modelo WiFi con app y conexión a corriente.",
  },
  {
    name: "GasTraker LTS",
    img: "/equipo_lts.png",
    manual: "/manual_lts.pdf",
    summary: "Instalación del monitor físico con litros y porcentaje.",
  },
  {
    name: "GasTraker WS",
    img: "/equipo_ws.png",
    manual: "/manual_ws.pdf",
    summary: "Instalación del monitor físico con porcentaje.",
  },
];

const sensorSteps = [
  {
    text: "Ubicar el tanque. Asegúrate de tener acceso al sensor analógico de tu tanque estacionario.",
  },
  {
    text: "Quitar tornillos del sensor analógico.",
    warning: "NO retires los 4 tornillos que sujetan el flotador.",
  },
  {
    text: "Colocar el nuevo sensor: usa el fijador del cable, atornilla y coloca la cubierta para protegerlo de golpes y clima.",
  },
];

const setupSteps = [
  "Pega el velcro cerca de corriente 120V en caso de usar cargador/eliminador.",
  "Pega el equipo sobre el velcro.",
];

const connectionSteps = [
  "Lleva el cable del sensor gris hasta el equipo y conéctalo en su puerto.",
  "Conecta el cargador/eliminador a una toma de corriente y luego al equipo.",
];

const sensorPhotos = [
  {
    img: "/a_tornillo.png",
    caption: "Retira únicamente los 2 tornillos del sensor",
  },
  {
    img: "/gt_tornillo.png",
    caption: "Coloca el sensor y vuelve a atornillar",
  },
  {
    img: "/tapa.png",
    caption: "Usa la cubierta para evitar daños",
  },
];

const wifiSetupSteps = [
  "Abre gastraker.com o escanea el QR para entrar a la Web/App.",
  "Regístrate e inicia sesión con tu usuario y contraseña.",
  "Con tu sesión iniciada, ve a los Ajustes Wi-Fi de tu celular y busca la red “GasTraker###”. Si el equipo no está conectado a corriente, la red no aparecerá.",
  "Selecciona la red “GasTraker###” e introduce la contraseña: GasTraker.",
  "Opción A: si la pantalla de configuración aparece automáticamente, toca Conectar, elige tu red Wi-Fi de casa y escribe la contraseña correcta de tu módem/router.",
  "Opción B: si la pantalla no aparece, regresa a la Web/App de GasTraker y presiona el botón “Conectar” junto a “Estatus”. Acepta la redirección, elige tu red de casa y escribe la contraseña del módem/router.",
  "Al guardar, verás un mensaje de confirmación. La pantalla se cerrará sola o puedes cerrarla manualmente. En menos de 1 minuto, el estatus debe verse Conectado en verde.",
  "Verificación: si después de 2–3 minutos la red “GasTraker###” sigue visible en los ajustes Wi-Fi del teléfono, la configuración no se completó. Repite el proceso y revisa la contraseña del módem/router.",
  "Importante: este proceso debe hacerse mientras estás conectado a la red “GasTraker###”.",
];

const addTankSteps = [
  "En el menú superior derecho, toca el ícono “+”.",
  "Escanea o escribe manualmente el QR/MAC del reverso del equipo. Si lo escribes manualmente, asegúrate de que sea 100% correcto o no funcionará.",
  "Completa los campos, permite y selecciona la ubicación del tanque, guarda y acepta.",
];

const wifiVideos = [
  {
    title: "Video de instalación WiFi",
    url: "https://www.youtube.com/watch?v=AIU24-JWpCI",
  },
  {
    title: "Video de reactivación WiFi",
    url: "https://www.youtube.com/watch?v=d1lduhp9jyM",
  },
];

export default function Home() {
  const [lang, setLang] = useState<"es" | "en">("es");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openProducts, setOpenProducts] = useState<string[]>([]);
  const [selectedInstall, setSelectedInstall] = useState("GasTraker WiFi");
  const [showWifiConfig, setShowWifiConfig] = useState(false);
  const [showWifiConnect, setShowWifiConnect] = useState(false);
  const [showAddTank, setShowAddTank] = useState(false);
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [showShopModal, setShowShopModal] = useState(false);
  const t = text[lang];

  const ui = {
  es: {
    installationEyebrow: "Instalación",
    installationMainTitle: "Instala tu GasTraker paso a paso",
    installationIntro:
      "Primero selecciona el modelo que vas a instalar. La instalación física del sensor en el tanque es igual para todos los modelos.",
    step1: "Paso 1",
    step2: "Paso 2",
    step3: "Paso 3",
    physicalInstall: "Instalación física del sensor",
    placeDevice: "Colocar equipo",
    connections: "Conexiones",
    wifiConfig: "Configuración WiFi",
    connectWifi: "Conectar a WiFi",
    addTank: "Agregar tanque",
    webAppAccess: "Acceso a Web/App",
    webAppAccessText:
      "Abre gastraker.com o escanea el QR para entrar a la Web/App de GasTraker.",
    resources: "Recursos",
    resourcesText:
      "Consulta el instructivo completo y los recursos del modelo seleccionado.",
    openPdf: "Abrir manual PDF",
    needHelp: "¿Necesitas ayuda?",
    needHelpText:
      "Escríbenos por WhatsApp o desde la página de Contacto. ¡Con gusto te apoyamos!",
    whatsappHelp: "Escribir por WhatsApp",
    support: "Soporte",
    writeUs: "Escríbenos",
    name: "Nombre",
    phone: "Teléfono",
    email: "Correo",
    message: "Escribe tu duda",
    send: "Enviar mensaje",
    location: "Nuestra ubicación 📍",
    openMaps: "Abrir en Google Maps",
  },
  en: {
    installationEyebrow: "Installation",
    installationMainTitle: "Install your GasTraker step by step",
    installationIntro:
      "First select the model you are installing. The physical sensor installation on the tank is the same for all models.",
    step1: "Step 1",
    step2: "Step 2",
    step3: "Step 3",
    physicalInstall: "Physical sensor installation",
    placeDevice: "Place the device",
    connections: "Connections",
    wifiConfig: "WiFi setup",
    connectWifi: "Connect to WiFi",
    addTank: "Add tank",
    webAppAccess: "Web/App access",
    webAppAccessText:
      "Open gastraker.com or scan the QR code to access the GasTraker Web/App.",
    resources: "Resources",
    resourcesText:
      "View the full manual and resources for the selected model.",
    openPdf: "Open PDF manual",
    needHelp: "Need help?",
    needHelpText:
      "Message us on WhatsApp or through the Contact section. We’ll gladly help you.",
    whatsappHelp: "Message on WhatsApp",
    support: "Support",
    writeUs: "Contact us",
    name: "Name",
    phone: "Phone",
    email: "Email",
    message: "Write your question",
    send: "Send message",
    location: "Our location 📍",
    openMaps: "Open in Google Maps",
  },
}[lang];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

  function createShopRoute(deviceIndex: number, quantity: number) {
  const device = VALID_DEVICES[deviceIndex];

  if (!device) return "";
  if (quantity < 1 || quantity > 100) return "";

  return `${SHOP_LINK}?q=${quantity}&d=${device}`;
}

function openShopModal(index: number) {
  setSelectedProductIndex(index);
  setSelectedQuantity(1);
  setShowShopModal(true);
}

function closeShopModal() {
  setShowShopModal(false);
  setSelectedQuantity(1);
}

function goToPayment() {
  const route = createShopRoute(selectedProductIndex, selectedQuantity);

  if (!route) return;

  window.open(route, "_blank");
  closeShopModal();
}

  return (
    <main>
      <header className="header">
        <a href="#inicio" className="brand">
          <Image src="/logo_h.png" alt="GasTraker" width={190} height={60} priority />
        </a>

        <nav>
          <a href="#inicio">{t.nav[0]}</a>
          <a href="#productos">{t.nav[1]}</a>
          <a href="#instalacion">{t.nav[2]}</a>
          <a href="#soporte">{t.nav[3]}</a>
          <a href="#contacto">{t.nav[4]}</a>
        </nav>

        <div className="headerActions">
          <button onClick={() => setLang(lang === "es" ? "en" : "es")} className="langBtn">
            {lang === "es" ? "EN" : "ES"}
          </button>
          <a href="#productos" className="smallCta">
          {t.buy}
          </a>
        </div>
      </header>

      <section id="inicio" className="hero">
        <div className="heroText">
          <p className="eyebrow">GasTraker</p>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroText}</p>

          <div className="heroButtons">
            <a href="#productos" className="cta">
              {t.heroBtn}
            </a>
            <a href={WHATSAPP_LINK} className="secondaryCta">
              {t.whatsapp}
            </a>
          </div>
        </div>

        <div className="heroCard carouselCard">
          <button className="carouselArrow left" onClick={previousSlide} aria-label="Previous">
            ‹
          </button>

          <Image
            src={carouselImages[currentSlide].src}
            alt={`GasTraker ${carouselImages[currentSlide].label}`}
            width={650}
            height={430}
            priority
          />

          <button className="carouselArrow right" onClick={nextSlide} aria-label="Next">
            ›
          </button>

          <div className="carouselInfo">
            <span>GasTraker {carouselImages[currentSlide].label}</span>

            <div className="carouselDots">
              {carouselImages.map((item, index) => (
                <button
                  key={item.label}
                  className={index === currentSlide ? "dot active" : "dot"}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to ${item.label}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div>
          <p className="eyebrow">WiFi</p>
          <h2>{t.benefitsTitle}</h2>
          <p className="benefitsSubtitle">{t.benefitsSubtitle}</p>
        </div>

        <div className="benefitGrid wifiBenefits">
          {t.benefits.map((benefit) => (
            <div className="benefit" key={benefit}>
              {benefit}
            </div>
          ))}
        </div>
      </section>

      <section id="productos" className="section">
        <div className="sectionHeader">
          <p className="eyebrow">Productos</p>
          <h2>{t.productsTitle}</h2>
          <p>{t.productsSubtitle}</p>
        </div>

        <div className="productGrid">
          {t.products.map((product, index) => {
            const isOpen = openProducts.includes(product.name);

            return (
              <article className="productCard" key={product.name}>
                <div className="productImage">
                  <Image src={product.img} alt={product.name} width={520} height={350} />
                </div>

                <h3>{product.name}</h3>
                <p>{product.desc}</p>

                <strong>{product.price}</strong>
                <span>{product.total}</span>

              <button
                className="moreInfoBtn"
                onClick={() =>
                  setOpenProducts((prev) =>
                    prev.includes(product.name)
                      ? prev.filter((name) => name !== product.name)
                      : [...prev, product.name]
                  )
                }
              >
                {isOpen ? t.less : t.more}
              </button>

                {isOpen && (
                  <ul className="detailsList">
                    {product.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                )}

                <button
                  type="button"
                  className="productBtn"
                  onClick={() => openShopModal(index)}
                >
                  {t.buy}
                </button>
              </article>
            );
          })}
        </div>
      </section>

      <section id="instalacion" className="section installationSection">
  <div className="sectionHeader">
    <p className="eyebrow">{ui.installationEyebrow}</p>
    <h2>{ui.installationMainTitle}</h2>
    <p>{ui.installationIntro}</p>
  </div>

  <div className="installProductGrid">
    {installationProducts.map((product) => (
      <button
        key={product.name}
        className={
          selectedInstall === product.name
            ? "installProductCard active"
            : "installProductCard"
        }
        onClick={() => setSelectedInstall(product.name)}
      >
        <Image src={product.img} alt={product.name} width={360} height={240} />
        <h3>{product.name}</h3>
        <p>{product.summary}</p>
      </button>
    ))}
  </div>

  <div className="installDetails">
    <div className="installBlock">
      <p className="eyebrow">{ui.step1}</p>
      <h3>{ui.physicalInstall}</h3>

      <ol className="installSteps">
        {sensorSteps.map((step) => (
          <li key={step.text}>
            {step.text}{" "}
            {step.warning && <strong>{step.warning}</strong>}
          </li>
        ))}
      </ol>

      <div className="sensorPhotoGrid">
        {sensorPhotos.map((photo) => (
          <figure key={photo.img} className="sensorPhoto">
            <Image src={photo.img} alt={photo.caption} width={420} height={280} />
            <figcaption>{photo.caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>

    <div className="installTwoColumns">
      <div className="installBlock">
        <p className="eyebrow">{ui.step2}</p>
        <h3>{ui.placeDevice}</h3>

        <ol className="installSteps" start={4}>
          {setupSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>

      <div className="installBlock">
        <p className="eyebrow">{ui.step3}</p>
        <h3>{ui.connections}</h3>

        <ol className="installSteps" start={6}>
          {connectionSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>
    </div>

{selectedInstall === "GasTraker WiFi" && (
  <div className="wifiConfigBox">
    <button
      className="accordionHeader"
      onClick={() => setShowWifiConfig((prev) => !prev)}
    >
      <span>{ui.wifiConfig}</span>
      <span>{showWifiConfig ? "↑" : "↓"}</span>
    </button>

    {showWifiConfig && (
      <div className="accordionContent">
        <button
          className="subAccordionHeader"
          onClick={() => setShowWifiConnect((prev) => !prev)}
        >
          <span>{ui.connectWifi}</span>
          <span>{showWifiConnect ? "↑" : "↓"}</span>
        </button>

        {showWifiConnect && (
          <div className="wifiStepsBox">
            <div className="qrHelpBox">
              <div>
                <h4>{ui.webAppAccess}</h4>
                <p>{ui.webAppAccessText}</p>
              </div>

              <Image src="/qr_gt.png" alt="QR GasTraker" width={110} height={110} />
            </div>

            <ol className="installSteps">
              {wifiSetupSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        )}

        <button
          className="subAccordionHeader"
          onClick={() => setShowAddTank((prev) => !prev)}
        >
          <span>{ui.addTank}</span>
          <span>{showAddTank ? "↑" : "↓"}</span>
        </button>

        {showAddTank && (
          <div className="wifiStepsBox">
            <ol className="installSteps">
              {addTankSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        )}
      </div>
    )}
  </div>
)}

    <div className="manualBox">
      <div>
        <p className="eyebrow">{ui.resources}</p>
        <h3>{selectedInstall}</h3>
        <p>{ui.resourcesText}</p>
      </div>

      <div className="resourceButtons">
        {selectedInstall === "GasTraker WiFi" &&
          wifiVideos.map((video) => (
            <a
              key={video.url}
              href={video.url}
              target="_blank"
              className="outlineResourceBtn"
            >
              {video.title}
            </a>
          ))}

        <a
          href={
            installationProducts.find((product) => product.name === selectedInstall)
              ?.manual
          }
          target="_blank"
          className="productBtn"
        >
          {ui.openPdf}
        </a>
      </div>
    </div>

        <div className="helpInstallBox">
      <h3>{ui.needHelp}</h3>
      <p>{ui.needHelpText}</p>
      <a href={WHATSAPP_LINK} className="productBtn">
        {ui.whatsappHelp}
      </a>
    </div>
  </div>
</section>

<section id="soporte" className="section faq">
  <div className="sectionHeader">
    <p className="eyebrow">{ui.support}</p>
    <h2>{t.faqTitle}</h2>
  </div>

  <div className="faqAccordion">
    {t.faqs.map(([q, a], index) => {
      const isOpen = openFaqs.includes(index);

      return (
        <div className="faqAccordionItem" key={q}>
          <button
            className="faqAccordionQuestion"
            onClick={() =>
              setOpenFaqs((prev) =>
                prev.includes(index)
                  ? prev.filter((item) => item !== index)
                  : [...prev, index]
              )
            }
          >
            <span>{q}</span>
            <span>{isOpen ? "▲" : "▼"}</span>
          </button>

          {isOpen && (
            <div className="faqAccordionAnswer">
              <p>{a}</p>
            </div>
          )}
        </div>
      );
    })}
  </div>
</section>

      <section id="contacto" className="contact contactSection">
  <div className="sectionHeader contactHeader">
    <h2>{t.contactTitle}</h2>
    <p>{t.contactText}</p>
  </div>

  <div className="contactGrid">
    <div className="contactCard">
      <h3>{ui.writeUs}</h3>

      <form
        className="contactForm"
        action="mailto:gastrakercia@gmail.com"
        method="POST"
        encType="text/plain"
      >
        <input name="Nombre" type="text" placeholder={ui.name} required />
        <input name="Telefono" type="tel" placeholder={ui.phone} required/>
        <input name="Correo" type="email" placeholder={ui.email} required />
        <textarea name="Mensaje" placeholder={ui.message} rows={5} required />

        <button type="submit" className="productBtn">
          {ui.send}
        </button>
      </form>

      <div className="contactLinks clean">
        <a href={WHATSAPP_LINK}>WhatsApp: +52 81 3603 2232</a>
        <a href="mailto:gastrakercia@gmail.com">gastrakercia@gmail.com</a>
        <span>@gastraker</span>
      </div>
    </div>

    <div className="locationCard">
      <h3>{ui.location}</h3>
      <p>Blvrd Minería 186, Bonanza, 25296 Saltillo, Coah.</p>

      <iframe
        className="mapFrame"
        src="https://www.google.com/maps?q=Blvrd%20Miner%C3%ADa%20186%2C%20Bonanza%2C%2025296%20Saltillo%2C%20Coahuila&output=embed"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <a
        href="https://www.google.com/maps/search/?api=1&query=Blvrd%20Miner%C3%ADa%20186%2C%20Bonanza%2C%2025296%20Saltillo%2C%20Coahuila"
        target="_blank"
        className="secondaryCta mapBtn"
      >
        {ui.openMaps}
      </a>
    </div>
  </div>
</section>

      <footer>
        <Image src="/logo_h.png" alt="GasTraker" width={160} height={50} />
        <p>© 2026 GasTraker. Controla & Confía.</p>
      </footer>

      {showShopModal && (
  <div className="shopModalOverlay">
    <div className="shopModal">
      <h3>
        {lang === "es"
          ? `Comprar ${t.products[selectedProductIndex].name}`
          : `Buy ${t.products[selectedProductIndex].name}`}
      </h3>

      <p>
        {lang === "es"
          ? "Selecciona la cantidad de equipos que deseas comprar."
          : "Select the quantity of devices you want to buy."}
      </p>

      <input
        type="number"
        min={1}
        max={100}
        value={selectedQuantity}
        onChange={(event) => setSelectedQuantity(Number(event.target.value))}
        className="shopQuantityInput"
      />

      <div className="shopModalActions">
        <button type="button" className="shopCancelBtn" onClick={closeShopModal}>
          {lang === "es" ? "Cancelar" : "Cancel"}
        </button>

        <button type="button" className="shopPayBtn" onClick={goToPayment}>
          {lang === "es" ? "Ir al pago" : "Go to payment"}
        </button>
      </div>
    </div>
  </div>
  )}
    </main>
  );
}