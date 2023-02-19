import Link from "next/link";
import React from "react";
import HeaderComponet from "../../components/Header";
import Layout from "../../components/Layout";
import { useHookContext } from "../../context/useContext";

const paysuccessfully = () => {
  const { changeShowBg } = useHookContext();
  changeShowBg(false);
  return (
    <>
      <Layout>
        <HeaderComponet textbutton={"Models"} href={"/"} />
        <div className="pay_content">
          <div className="messagecontainer">
            <div className="message">
              <div className="title">
                <h1
                  style={{
                    borderBottom: "1px solid black",
                    marginBottom: "1rem",
                  }}
                >
                  ¡El pago fue exitoso!
                </h1>
              </div>
              <div className="parrapho">
                <p>
                  Ahora puedes suministrar otros links a nuestro equipo para que
                  puedan registrarlos en tu perfil.
                  <br />
                  También nos aseguraremos de promocionar con más intencidad tus
                  perfiles.
                  <br />
                  Muchas gracias por la compra!
                </p>
                <Link href={"/"} style={{ color: "blue" }}>
                  ¡Quiero ver mi perfil!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default paysuccessfully;
