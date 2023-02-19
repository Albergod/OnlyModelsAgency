import express from "express";
import {
  createModel,
  deleteModels,
  getAllmodels,
  getOndeModel,
} from "../controllers/createModel.js";
import {
  FIELDLONGVALIDATION,
  BODYVALIDATION,
} from "../middleware/validateReqBody.js";

const modelsRoute = express.Router();

modelsRoute.post(
  "/createnewmodel-admin",
  FIELDLONGVALIDATION,
  BODYVALIDATION,
  createModel
);

modelsRoute.get("/all", getAllmodels);
modelsRoute.get("/getone/:id", getOndeModel);

modelsRoute.delete("/deleteonemodel-admin/:id", deleteModels);

export default modelsRoute;
