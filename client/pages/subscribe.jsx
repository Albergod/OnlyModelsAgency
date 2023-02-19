import Link from "next/link";
import React from "react";
import HeaderComponet from "../components/Header";
import Layout from "../components/Layout";
import Preguntas from "../components/Preguntas";

import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

const Subscribe = () => {
  return (
    <Layout>
      <HeaderComponet textbutton={"Models"} href={"/"} />
      <section className="infoSubs">
        <div className="preguntas">
          <Preguntas />
        </div>
      </section>
      <section className="">
        <div className="buttonContainer">
          <Link className="button" href={"/registeringallery"}>
            ¡Promocionate en nuestra página!
          </Link>
        </div>
      </section>
      <section className="redIcons">
        <div className="iconsContainer">
          <Link href={""} className="icon">
            <FaFacebook />
          </Link>
          <Link href={""} className="icon">
            <FaInstagram />
          </Link>
          <Link href={""} className="icon">
            <FaTelegram />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Subscribe;
