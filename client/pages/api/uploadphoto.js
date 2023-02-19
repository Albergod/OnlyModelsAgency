import nextConnter from "next-connect";
import multer from "multer";

const UPLOAD = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) => {
      const EXTNAME = file.originalname.split(".")[1];
      const FILENAME = file.originalname.split(".")[0];

      cb(null, `${FILENAME}.${EXTNAME}`);
    },
  }),
});

const APIROUTES = nextConnter({
  onNoMatch(req, res) {
    res.status(405).json({ error: "Method not exist" });
  },
});

APIROUTES.use(UPLOAD.single("modelImage"));

APIROUTES.post((req, res) => {
  res.status(200).json({ data: "success" });
});

export default APIROUTES;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
