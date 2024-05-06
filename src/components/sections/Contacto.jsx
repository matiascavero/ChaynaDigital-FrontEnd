import * as React from "react";

function Contacto () {
  return (
    <>
      {" "}
      <main className="main-container">
        {" "}
        <section className="hero-section">
          {" "}
          <div className="hero-content">
            {" "}
            <div className="hero-grid">
              {" "}
              <div className="hero-image-container">
                {" "}
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5c6c58ca162a6aa2dead5d7802d4feba56324d1fb5d09d16b5d38cf0a322bb0?apiKey=de5cfb099ee04049b61ead6e37eed5a0&"
                  alt="Hero image"
                  className="hero-image"
                />{" "}
              </div>{" "}
              <div className="hero-text-container">
                {" "}
                <div className="hero-text-content">
                  {" "}
                  <h2 className="hero-title">
                    {" "}
                    ¿Listo para llevar tu estrategia de email marketing al
                    siguiente nivel?{" "}
                  </h2>{" "}
                  <p className="hero-description">
                    {" "}
                    ¡Contáctanos hoy mismo y descubre cómo podemos ayudarte a
                    conseguir más leads, mejorar tus conversiones y hacer crecer
                    tu negocio! <br />{" "}
                  </p>{" "}
                  <button className="hero-cta">CONTACTANOS</button>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="ebook-section">
          {" "}
          <div className="ebook-content">
            {" "}
            <div className="ebook-grid">
              {" "}
              <div className="ebook-image-container">
                {" "}
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/54f461a72ce60e305bbed33e53b449a0805cfc1da0045ba47f9986fbf7f52c6d?apiKey=de5cfb099ee04049b61ead6e37eed5a0&"
                  alt="Ebook cover"
                  className="ebook-image"
                />{" "}
              </div>{" "}
              <div className="ebook-text-container">
                {" "}
                <div className="ebook-text-content">
                  {" "}
                  <h2 className="ebook-title">
                    {" "}
                    ¿Todavía no tenes una base de datos activa? <br />{" "}
                  </h2>{" "}
                  <p className="ebook-description">
                    {" "}
                    Te regalo este E-Book{" "}
                    <span className="ebook-description-highlight">
                      gratuito
                    </span>{" "}
                    y descubre cómo conseguir leads de manera efectiva.{" "}
                  </p>{" "}
                  <form className="ebook-form">
                    {" "}
                    <div className="form-group">
                      {" "}
                      <label htmlFor="email" className="form-label">
                        Email:
                      </label>{" "}
                      <input type="email" id="email" className="form-input" />{" "}
                    </div>{" "}
                    <div className="form-group">
                      {" "}
                      <label htmlFor="name" className="form-label">
                        Nombre:
                      </label>{" "}
                      <input type="text" id="name" className="form-input" />{" "}
                    </div>{" "}
                    <button type="submit" className="form-submit">
                      ENVIAR
                    </button>{" "}
                  </form>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
      </main>{" "}
      <style jsx>{`
        
      `}</style>{" "}
    </>
  );
}


export default Contacto