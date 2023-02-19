import { v4 } from "uuid";
import { getConnection } from "../database/lowdb.js";

export const createModel = async (req, res) => {
  const {
    nickname,
    email,
    modelImage,
    onlyfanslink,
    instagramlink,
    tiktoklink,
    twitterlink,
    facebooklink,
    telegramlink,
  } = req.body;

  if (
    !nickname ||
    !modelImage ||
    !onlyfanslink ||
    !instagramlink ||
    !tiktoklink
  ) {
    return res
      .status(401)
      .json({ message: "No es posible el registro: Aún faltan datos" });
  }

  try {
    const ModelSchema = {
      id: v4(),
      nickname,
      email,
      modelImage,
      onlyfanslink,
      instagramlink,
      tiktoklink,
      twitterlink,
      facebooklink,
      telegramlink,
    };

    const database = getConnection();
    database.data.models.push(ModelSchema);
    await database.write();

    res.status(200).json({ ModelSchema, message: "Register_successfully" });
  } catch (error) {
    res.status(500).json({ message: "Sorry, the file cant not be saved" });
    console.log(error);
  }
};

export const getAllmodels = (req, res) => {
  const db = getConnection();

  return res.json(db.data.models);
};

export const deleteModels = async (req, res) => {
  const { id } = req.params;

  const db = getConnection();
  const modelFound = db.data.models.find((x) => x.id === id);

  if (!modelFound) return res.status(404).json({ message: "Model not found" });

  const newModelsArray = db.data.models.filter((x) => x.id !== id);
  db.data.models = newModelsArray;
  await db.write();

  res.json(modelFound);
};

export const getOndeModel = (req, res) => {
  const { id } = req.params;
  const db = getConnection();

  const model = db.data.models.find((item) => item.id === id);

  res.json(model);
};
