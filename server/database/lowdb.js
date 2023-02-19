import path from "path";
import url from "url";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

const fileRute = path.dirname(url.fileURLToPath(import.meta.url));
let database;
export const createConnection = async () => {
  const file = path.join(fileRute, "../db.json");
  const adapter = new JSONFile(file);
  database = new Low(adapter);

  await database.read();

  database.data ||= { models: [] };

  await database.write();
};

export const getConnection = () => database;
