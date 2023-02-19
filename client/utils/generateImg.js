import { getLocationOrigin } from "next/dist/shared/lib/utils";
import logo from "../img/OnlyModels.png";
import model from "../img/model2.avif";

export function generateImg(imgname) {
  switch (imgname) {
    case "logo":
      return logo;
    case "model":
      return model;
    default:
      break;
  }
}
