import nodemailer from "nodemailer";
import nextconnecter from "next-connect";

const APIEMAILROUTES = nextconnecter({
  onNoMatch(req, res) {
    res.status(405).json({ error: "Method not exist" });
  },
});

export default APIEMAILROUTES;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
