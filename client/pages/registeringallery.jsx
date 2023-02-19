import React, { useEffect } from "react";
import FormGallery from "../components/FormGallery";
import HeaderComponet from "../components/Header";
import Layout from "../components/Layout";
import ExpandableCard from "../utils/expandibleCart";
import { toast, ToastContainer } from "react-toastify";
import { useHookContext } from "../context/useContext";

const registeringallery = () => {
  const { errors } = useHookContext();
  console.log(errors);
  useEffect(() => {
    if (errors)
      toast(errors, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
  }, [errors]);

  // emptyErrors("");
  return (
    <>
      <Layout>
        <HeaderComponet href={"/subscribe"} textbutton={"Atras"} />
        <div className="note">
          <ExpandableCard title={"Note: "}>
            <p style={{ padding: "auto 5rem" }}>
              Le ofrecemos a nuestro cliente la oportunidad de probar nuestro
              servicio durante una semana antes de realizar el pago. <br />
              Este período de prueba le permitirá evaluar si nuestro servicio
              cumple con sus expectativas y si le gusta o no. Creemos que es
              importante brindarle la oportunidad de experimentar y ver por sí
              mismo la calidad de nuestro servicio antes de tomar una decisión
              de compra. <br />
              <br />
              Estamos seguros de que nuestro servicio lo dejará satisfecho, pero
              queremos asegurarnos de que está completamente seguro antes de
              realizar una inversión. ¡Aproveche esta oportunidad única para
              probar sin compromiso!
              <br />
              <br />
              Solicitamos el permiso de todas tus redes sociales por lo que es
              importante que nos suministre las mas relevantes(ejemplo:
              onlyfans, instragram, tiktok, etc ). con esto lo que queremos es
              que usted tenga mas tiempo para crear contenido y nosotros nos
              encargamos de promocionar su perfil mediante nuestra marca.
            </p>
          </ExpandableCard>
        </div>
        <div className="FormContainer">
          <div className="backgroundForm">
            <h2>JOIN US</h2>
            <div className="formDiv">
              <div className="formContent">
                <FormGallery />
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </Layout>
    </>
  );
};

export default registeringallery;
