import multer from "multer";
import path, { extname } from "path";

export const UPLOADFILE = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads/",
    filename: (req, file, cb) => {
      const extName = extname(file.originalname);
      const filename = file.originalname.split(extName)[0];

      cb(null, `${filename}-${Date.now()}${extName}`);
    },
    // fileFilter: (req, file, cllb) => {
    //   const MIMETYPES = ["image/jpeg", "image/png"];
    //   if (MIMETYPES.includes(file.mimetype)) cllb(null, true);
    //   else {
    //     cllb(new Error(`El archivo debe ser tipo ${MIMETYPES.join("-")}`));
    //   }
    // },
  }),
});
