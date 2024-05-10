import React from "react";
import NavB from "./NavB";



const Header = ()=>{
    return(
        <header>
              <NavB/>
              <div className="header-container" id="sobreMi">
                <img src="../../../assets/icon.png" alt="icono chayna" className="img-header-icon"/>
                <div className="div-header-cart">
                   <div className="div-img-sol">
                   <img src="../../../assets/img-card-new.png" alt="foto de sol" className="img-header-cart"/>
                   </div>
                    <div className="div-container-second">
                        <div className="div-header-cart-text">
                       <h2><b>Hago Emails que impactan</b></h2>
                       <p>Amante de los viajes y apasionada por el Marketing Digital hace mas de 5 años. En este tiempo descubrí y me enamoré del poder del Email Marketing,
                         el cual tiene una fuerza para crear conexiones significativas con nuestros clientes
                         </p>
                        
                        <p>Mi objetivo es ayudarte tus metas de Marketing y hacer crecer tu negocio</p>
                       
                        <p>¿Listo para hacer crecer tu negocio con el poder del email marketing?
                       </p>
                       <div className="div-button-header">
                        <button className="button-header"><a href="https://calendly.com/sol-innovaia" target="_blank"><b>QUIERO SABER MÁS</b></a></button>
                       </div>
                   </div>
                   </div>
                </div>
              </div>
        </header>
        
       
    )
}


export default Header