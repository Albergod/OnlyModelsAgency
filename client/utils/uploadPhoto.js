import axios from "axios";

const formDate = new FormData();
export const UPLOADPHOTO = async (image) => {
  formDate.set("modelImage", image[0]);
  const response = await axios.post(
    "http://localhost:3000/api/uploadphoto",
    formDate
  );
  const result = await response.data;

  return result;
};
