import React, { useState } from "react";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.nombre) newErrors.nombre = "Nombre es obligatorio.";
    if (!formData.email) {
      newErrors.email = "Correo es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Correo inválido.";
    }
    if (!formData.telefono) newErrors.telefono = "Teléfono es obligatorio.";
    if (!formData.mensaje) newErrors.mensaje = "Mensaje es obligatorio.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      alert("Formulario enviado correctamente ✅");
      setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Contáctanos</h2>
      <p style={styles.subtitle}>
        Llena el siguiente formulario y nos pondremos en contacto contigo.
      </p>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.nombre && <span style={styles.error}>{errors.nombre}</span>}

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
          name="telefono"
          placeholder="Teléfono"
          value={formData.telefono}
          onChange={handleChange}
          style={styles.input}
        />
        {errors.telefono && <span style={styles.error}>{errors.telefono}</span>}

        <textarea
          name="mensaje"
          placeholder="Mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          style={styles.textarea}
        />
        {errors.mensaje && <span style={styles.error}>{errors.mensaje}</span>}

        <button type="submit" style={styles.button}>Enviar</button>
      </form>

      {/* Google Maps Integration */}
      <h3 style={styles.mapTitle}>Nuestra Ubicación 📍</h3>
      <div style={styles.mapContainer}>
        <iframe
          title="Ubicación"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.3625421396943!2d-100.98238542507668!3d25.422515623894736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868812b5dfb312d7%3A0xe88d6b64a61231f8!2sBlvrd%20Miner%C3%ADa%20186%2C%20Parque%20Centro%20Metropolitano%2C%2025204%20Saltillo%2C%20Coah.%2C%20Mexico!5e0!3m2!1sen!2sus!4v1710080000000"
          width="100%"
          height="300"
          style={{ border: "0", borderRadius: "10px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
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
  buttonHover: {
    filter: "brightness(1.1)",
    boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.15)",
    transform: "translateY(-2px)",
    
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
};

export default Contacto;
