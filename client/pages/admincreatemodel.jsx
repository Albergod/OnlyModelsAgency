import React, { useState } from "react";

import { FORMFETCH } from "../utils/formFecth";
import { UPLOADPHOTO } from "../utils/uploadPhoto";

const Admincreateuser = () => {
  const [date, setDate] = useState("");
  const [image, setImage] = useState([]);

  const handleData = (e) => {
    const { name, value } = e.target;
    setDate({ ...date, [name]: value });
  };

  const handleSubmit = async (e) => {
    date["modelImage"] = image[0].name;
    try {
      e.preventDefault();
      await FORMFETCH(date);
      await UPLOADPHOTO(image);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(date);
  return (
    <div className="formAdminContainer">
      <div>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <input type="text" name="nickname" onChange={handleData} />
          <input
            type="file"
            name="modelImage"
            onChange={(e) => {
              setImage(e.target.files);
            }}
          />
          <input type="text" name="onlyfanslink" onChange={handleData} />
          <input type="text" name="instagramlink" onChange={handleData} />
          <input type="text" name="tiktoklink" onChange={handleData} />
          <input type="text" name="twitterlink" onChange={handleData} />
          <input type="text" name="facebooklink" onChange={handleData} />
          <input type="text" name="telegramlink" onChange={handleData} />
          <textarea
            name="description"
            id=""
            cols="10"
            rows="10"
            onChange={handleData}
          />
          <button type="submit">Crear</button>
        </form>
      </div>
    </div>
  );
};

export default Admincreateuser;
