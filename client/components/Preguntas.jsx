import React from "react";
import ExpandableCard from "../utils/expandibleCart";

const Preguntas = () => {
  return (
    <>
      <div className="pregunta">
        <ExpandableCard title={"¿Qué servicios ofrecen?"}>
          <p>
            Nuestra aplicacion esta pensada para que sirva como intermediario
            entre sus clientes y sus redes sociales. En nuestra aplicación,
            brindamos la oportunidad de registrarse de forma gratuita y utilizar
            nuestro servicio, sin embargo, de esa forma solo se permiten
            adjuntar 3 links los caules se utilizan para envair clientes
            directamente a sus redes sociales. <br />
            Si desea aprovechar al máximo nuestro servicio, ofrecemos una
            versión premium por un costo de $10, que le permitirá agregar más de
            4 enlaces a su perfil y como resultado mucho más trafico hacia sus
            perfiles.
            <br />
            <hr />
            Además, si desea conocer más sobre cómo manejar e impulsar sus redes
            sociales, nuestro equipo de asesores está disponible para responder
            cualquier pregunta que pueda tener sobre el proceso. Es importante
            destacar que nuestra aplicación es un intermediario para llevar más
            tráfico a sus redes sociales, lo que se traduce en más oportunidades
            de trabajo y un mayor reconocimiento en su área.
            <br />
            <hr />
            En resumen, nuestra aplicación ofrece una oportunidad única para los
            modelos que buscan ampliar su presencia en línea. Ya sea que esté
            buscando la versión gratuita o desee aprovechar al máximo nuestros
            servicios con la versión premium, estamos aquí para ayudarlo a
            conectarse con más clientes y oportunidades en su área. No dude en
            preguntar a nuestros asesores sobre cómo podemos ayudarlo a impulsar
            su carrera como modelo.
          </p>
        </ExpandableCard>
      </div>
      <div className="pregunta">
        <ExpandableCard title={"¿Puedo confiar en ustedes?"}>
          <p>
            En nuestra empresa, nuestra máxima prioridad es garantizar la
            confianza y la satisfacción de nuestros clientes. No solo brindamos
            un servicio de alta calidad, sino que también nos aseguramos de ser
            totalmente transparentes en todas las transacciones y comunicaciones
            con nuestros clientes. Nuestros profesionales son expertos en su
            campo y trabajan duro para entregar resultados concretos y medibles.
            Además, ofrecemos una política de reembolso justa y transparente
            para cualquier insatisfacción o problema. Estamos comprometidos a
            ofrecer un servicio ético y honesto, y estamos dispuestos a tomar
            medidas para asegurar la satisfacción de nuestros clientes.
          </p>
        </ExpandableCard>
      </div>
      <div className="pregunta">
        <ExpandableCard title={"¿Qué tengo que hacer?"}>
          <p>
            Si estás interesado en nuestro servicio de manejo de redes sociales,
            el proceso de suscripción es fácil y sencillo. Primero, debes llenar
            un formulario en nuestro sitio web, en el cual proporcionarás links
            a tus perfiles en las redes sociales en las que desees que
            trabajemos. Una vez recibido el formulario, nuestro equipo de
            expertos comenzará a trabajar en tu estrategia personalizada. El
            valor de la suscripción es de solo $3 dólares mensuales, pagaderos
            mediante PayPal. Con nuestro servicio, no solo tendrás más tiempo
            para enfocarte en lo que realmente importa, sino que también verás
            mejoras en tu presencia en línea en las redes sociales. ¡No pierdas
            la oportunidad de mejorar tu presencia en línea y suscríbete hoy!
          </p>
        </ExpandableCard>
      </div>
    </>
  );
};

export default Preguntas;
