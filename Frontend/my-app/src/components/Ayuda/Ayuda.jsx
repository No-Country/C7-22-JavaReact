import React from "react";
import '../Ayuda/Ayuda.css'
export default function Ayuda() {
  return (
    <>

      <div className="helpContainer">
        <h2 className="tituloCentro">¿Con qué podemos ayudarte? </h2>
        <div className="accordion divAyudaCentro" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header " id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>
                  Cuenta CriptoAlgo
                </strong>

              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  CriptoAlgo es una plataforma que te permite comprar de las siete criptomonedas y stablecoins más importantes, puedes ver su precio en tiempo real y realizar tus operaciones desde tu cuenta. 
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>
                  Tu perfil
                </strong>

              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  Una vez que hayas iniciado sesión tendras la posibilidad de modificar tus datos. Te dejamos los pasos a seguir:
                  <ul>
                    <li>1. Ingresá a tu cuenta.</li>
                    <li>2. Elegí la opción “Tu perfil”.</li>
                  </ul>
                  Luego podrás modificar tu email y tambien tus contraseñas. 
                  Si todo te parece estar correcto, pulsa el boton CONTINUAR.
                    
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              ><strong>
                  Seguridad
                </strong>

              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  Si recibiste un e-mail donde te dicen que tu cuenta fue bloqueada, restringida o te pide datos de la cuenta o de tu tarjeta de crédito, analizalo detenidamente.
                  Revisá los links y/o botones del e-mail que recibiste. ¿Cuál es la dirección de la página a la que te llevan?
                  Si entrás, verificá que realmente estés en CriptoAlgo (www.criptoalgo.com).
                  Si te lleva a un sitio diferente, denunciá el e-mail falso.
                  ¿Ingresaste datos en un sitio falso? Cambiá la clave de tu cuenta de CriptoAlgo y avisá a tu tarjeta de crédito o debito, si es necesario.
                  Seguí estos consejos y esquivá los e-mails falsos:
                  Nunca te vamos a pedir información personal, como tu número de tarjeta de crédito, identificación, claves de seguridad o número de identificación fiscal, por e-mail o por teléfono.
                  Si te avisamos por e-mail que tu contraparte está inhabilitada y al instante recibís otro e-mail que indica lo contrario, no avances con la operación, mejor contactanos.

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
