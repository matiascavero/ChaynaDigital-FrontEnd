import * as React from "react";

function Servicios () {
  const instagramImages = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d98ad0a5b4c9d5b953b599dcbdc2244fed0c15a2d904237ad78ba17b8e437512?apiKey=de5cfb099ee04049b61ead6e37eed5a0&", alt: "Instagram image 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c5854c1fb42535e7a46410e9dc2364c9e74eb73c413542e60c6d99e4b76a4f7e?apiKey=de5cfb099ee04049b61ead6e37eed5a0&", alt: "Instagram image 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5de484afd3ea634211e6f7647ad53205db274fe0129077413e7d8d293411b5eb?apiKey=de5cfb099ee04049b61ead6e37eed5a0&", alt: "Instagram image 3" },
  ];
  return (
    <>
      <div className="services-container" id="services">
        <ServicesSection />
        <InstagramSection images={instagramImages} />
      </div>
      
    </>
  );
}
function ServicesSection() {
  return (
    <section className="services-section">
      <div className="services-content">
        <h2 className="services-title">Nuestros Servicios</h2>
        <div className="services-grid">
          <ServiceCard
            backgroundImage="https://cdn.builder.io/api/v1/image/assets/TEMP/317f4dcc5c6108f4700fedf6f1c46a0b289a4dfedeec0977112d40589c773ad7?apiKey=de5cfb099ee04049b61ead6e37eed5a0&"
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/06675474b89ad5a0e0a799ce9dd34ca8c26d80d3e94fcd51f879510b9f9ff171?apiKey=de5cfb099ee04049b61ead6e37eed5a0&"
            title="Mailer"
            description="Tu solución completa de email marketing. MAILER te ofrece todo lo que necesitas para llevar tus emails al siguiente nivel. Atrae a tu audiencia, conviértelos en clientes y haz crecer tu negocio. ¡Mira nuestro video para descubrir cómo!"
            buttonText="CONOCE MÁS"
          />
          <ServiceCard
            image="https://cdn.builder.io/api/v1/image/assets/TEMP/e6d120f5380fb4f36042d5189ee8befff9a518bed6c4043811207c4efc170eca?apiKey=de5cfb099ee04049b61ead6e37eed5a0&"
            title="Asesoría Expert"
            description="Lleva tu estrategia de email marketing al siguiente nivel. En nuestra llamada 1:1, recibirás asesoría experta sobre estrategias, automatizaciones, segmentación de bases de datos y además, recibirás material exclusivo. Mira nuestro video para saber más y reservar tu llamada."
            buttonText="CONOCE MÁS"
          />
        </div>
      </div>
     
    </section>
  );
}
function ServiceCard({ backgroundImage, icon, image, title, description, buttonText }) {
  return (
    <div className="service-card">
      <div className="service-card-content">
        {backgroundImage && (
          <div className="service-card-image-wrapper">
            <img src={backgroundImage} alt="" className="service-card-background" />
            <img src={icon} alt="" className="service-card-icon" />
          </div>
        )}
        {image && <img src={image} alt="" className="service-card-image" />}
        <h3 className="service-card-title">{title}</h3>
        <p className="service-card-description">{description}</p>
        <button className="service-card-button">{buttonText}</button>
      </div>
      
    </div>
  );
}
function InstagramSection({ images }) {
  return (
    <section className="instagram-section">
      <h2 className="instagram-title">Nuestro Instagram</h2>
      <div className="instagram-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`instagram-image instagram-image-${index + 1}`}
          />
        ))}
      </div>
      
    </section>
  );
}

export default Servicios;