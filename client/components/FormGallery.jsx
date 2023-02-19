import React, { useState } from "react";
import { SiPaypal } from "react-icons/si";
import Router from "next/router";
import { useHookContext } from "../context/useContext";

import { FORMFETCH } from "../utils/formFecth";
import { FORMSUBMIT } from "../utils/FormSubmit";
import { UPLOADPHOTO } from "../utils/uploadPhoto";

const FormGallery = () => {
  const [data, setData] = useState({});
  const [image, setImage] = useState([]);
  const [checked, setCheked] = useState({
    test_service: true,
  });
  const [submit, setSubmit] = useState(false);
  const { showError, emptyErrors } = useHookContext();

  const getData = (e) => {
    const { name, value, pattern } = e.target;
    let regEx = new RegExp(pattern);
    if (name === "email") {
      if (!regEx.exec(value)) return showError("El email es invalido");
    }
    setData({
      ...data,
      [name]: value,
    });

    console.log(data);
  };

  const checkHandle = (e) => {
    const { id, checked } = e.target;
    setCheked({ [id]: checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (image.length <= 0) return alert("Prorciona una imagen");
    data["modelImage"] = image[0].name;

    try {
      const result = await FORMFETCH(data);
      if (!result.ok) {
        const error = result.message;
        throw error;
      }
      await FORMSUBMIT(data);
      await UPLOADPHOTO(image);

      alert(
        "Te has registrado correctamente, ahora tienes un lugar en nuestra galería. tus clientes podran visitar los links que has proporcionado. ¡Gracias por confiar en nosotros!"
      );
      Router.push("/");
      emptyErrors();
    } catch (error) {
      console.log(error);
      showError(error);
    }
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    if (image.length <= 0) return alert("Prorciona una imagen");
    data["modelImage"] = image[0].name;

    try {
      setSubmit(!submit);
      const response = await fetch("http://localhost:4000/api/paypal/pay", {
        method: "POST",
      });
      const result = await response.json();

      // const formResult = await FORMSUBMIT(data);
      // if (!formResult.ok) {
      //   const error = result.message;
      //   throw error;
      // }

      // await UPLOADPHOTO(image);
      emptyErrors();
      window.location.href = result.link;
    } catch (error) {
      console.log(error);
      showError(error);
    }
  };

  return (
    <>
      <form
      // onSubmit={handleSubmit}
      //   action="https://formsubmit.co/onlymodelsagencycontact@gmail.com"
      //   method="POST"
      >
        <label htmlFor="nickname">Nickname</label>
        <input
          type="text"
          placeholder="nickname"
          name="nickname"
          onChange={getData}
          required
        />
        <label htmlFor="email">Email to contact</label>
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={getData}
          pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
          required
        />
        <label htmlFor="Phonenumber">Phone number</label>
        <input
          type="number"
          placeholder="Phone number(include your country code)"
          name="Phonenumber"
          onChange={getData}
          required
        />
        <label htmlFor="onlyfanslink">Onlyfans link</label>
        <input
          type="text"
          placeholder="Onlyfans link"
          name="onlyfanslink"
          onChange={getData}
          required
        />
        <label htmlFor="instagramlink">Instagram Link</label>
        <input
          type="text"
          placeholder="Instagram link"
          name="instagramlink"
          onChange={getData}
          required
        />

        <label htmlFor="tiktoklink">Tiktok Link</label>
        <input
          type="text"
          placeholder="tiktok link"
          name="tiktoklink"
          onChange={getData}
          required
        />
        <label htmlFor="nacionality">Nacionality</label>
        <input
          type="text"
          placeholder="Nacionality"
          name="nacionality"
          onChange={getData}
          required
        />
        <label htmlFor="">Profile Image</label>
        <input
          type="file"
          name="modelImage"
          onChange={(e) => {
            setImage(e.target.files);
          }}
        />
        <div className="checkboxses">
          <div>
            <label htmlFor="test service">Test Service</label>
            <input
              type="radio"
              name="service"
              id="test_service"
              onChange={checkHandle}
              defaultChecked={checked.test_service}
            />
          </div>
          <div>
            <label htmlFor="purchase service">Premium service</label>
            <input
              type="radio"
              name="service"
              id="purchase_service"
              onChange={checkHandle}
            />
          </div>
        </div>
        {checked.test_service == true ? (
          <button type="submit" className="submitButton" onClick={handleSubmit}>
            Start Free
          </button>
        ) : checked.purchase_service == true ? (
          <button
            type="submit"
            className="paypalButton"
            onClick={handlePayment}
            disabled={submit}
          >
            <SiPaypal />
          </button>
        ) : (
          ""
        )}
      </form>
    </>
  );
};

export default FormGallery;
