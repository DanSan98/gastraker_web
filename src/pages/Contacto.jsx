import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Nombre es obligatorio.";
    if (!formData.email) {
      newErrors.email = "Correo es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Correo inválido.";
    }
    if (!formData.phone) newErrors.phone = "Teléfono es obligatorio.";
    if (!formData.message) newErrors.message = "Mensaje es obligatorio.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setLoading(true);

      emailjs
        .send(
          "service_3t8l9ho",
          "template_of6n6qd",
          formData,
          "WexFSCCvaD3xgYtuI"
        )
        .then(
          () => {
            alert("✅ Formulario enviado correctamente.");
            setFormData({
              name: "",
              email: "",
              phone: "",
              message: "",
            });
            setErrors({});
          },
          (error) => {
            console.error("❌ Error al enviar:", error);
            alert("❌ Ocurrió un error al enviar el formulario. Intenta más tarde.");
          }
        )
        .finally(() => {
          setLoading(false);
        });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="contacto-wrapper">
      <div style={styles.container}>
        <h2 style={styles.title}>Contacto</h2>
        <p style={styles.subtitle}>
          Llena el siguiente formulario y nos pondremos en contacto contigo.
        </p>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.name && <span style={styles.error}>{errors.name}</span>}

          <input
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.email && <span style={styles.error}>{errors.email}</span>}

          <input
            type="tel"
            name="phone"
            placeholder="Teléfono"
            value={formData.phone}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.phone && <span style={styles.error}>{errors.phone}</span>}

          <textarea
            name="message"
            placeholder="Mensaje"
            value={formData.message}
            onChange={handleChange}
            style={styles.textarea}
          />
          {errors.message && <span style={styles.error}>{errors.message}</span>}

          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>

        <h3 style={styles.mapTitle}>Nuestra Ubicación 📍</h3>
        <div style={styles.mapContainer}>
          <iframe
            title="Ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.3625421396943!2d-100.98238542507668!3d25.422515623894736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868812b5dfb312d7%3A0xe88d6b64a61231f8!2sBlvrd%20Miner%C3%ADa%20186%2C%20Parque%20Centro%20Metropolitano%2C%2025204%20Saltillo%2C%20Coah.%2C%20Mexico!5e0!3m2!1sen!2sus!4v1710080000000"
            width="100%"
            height="300"
            style={{ border: "0", borderRadius: "10px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* ✅ Botón flotante de WhatsApp */}
      <a
  href="https://wa.me/5218136032232"
  target="_blank"
  rel="noopener noreferrer"
  style={styles.whatsapp}
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
    padding: "50px 20px",
    maxWidth: "600px",
    margin: "auto",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "18px",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  textarea: {
    width: "100%",
    height: "100px",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    padding: "12px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "white",
    background: "linear-gradient(135deg, #0A1F59, #0056b3)",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    marginTop: "10px",
  },
  error: {
    color: "red",
    fontSize: "14px",
  },
  mapTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginTop: "30px",
    marginBottom: "10px",
  },
  mapContainer: {
    width: "100%",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  whatsapp: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: 1000,
    transition: "transform 0.3s ease-in-out",
  },
  whatsappImage: {
    width: "60px",
    height: "60px",
    transition: "transform 0.3s ease-in-out",
  },
};

export default Contacto;
