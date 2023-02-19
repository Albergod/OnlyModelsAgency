import express from "express";
import cors from "cors";
import { createConnection } from "./database/lowdb.js";
import modelsRoute from "./routes/modelsRoute.js";
import { PaymentsRoutes } from "./routes/paypal.routes.js";
import paypal from "paypal-rest-sdk";
import nodemailer from "nodemailer";

const app = express();
app.use(cors());

app.use(express.json());

paypal.configure({
  mode: "sandbox", //sandbox or live
  client_id:
    "ASULv7nymJiaoViE12eBj5sMPR3IH4jS6VJAsP9nsR0__v2EaYw_rEfGwMCGXzAgbxhKAlzGMqXJtmKJ",
  // PAYPALAPICLIENT,
  client_secret:
    "EF-UulP1aATa9pTIXOegyrU-Yqy3OYLsyczbknxqZfnSRH-3gnEXBFbPOd-2hTZJd3X5T041xzGPFm1Y",
  // PAYPALAPISECRET,
});

await createConnection();

app.use("/api/models", modelsRoute);
app.use("/api/paypal", PaymentsRoutes);

app.post("/api/sendemail", (req, res) => {
  const TRANSPORT = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "onlymodelsagencycontact@gmail.com",
      pass: "mkdxnlxpebnbxhcz",
    },
  });
  try {
    const mailOptions = {
      from: "onlymodelsagencycontact@gmail.com",
      to: req.body.email,
      subjet: "Thank you for choosing us!",
      text: `Hello ${req.body.username}, we appreciate your trust, we have attached our employment contract which has written the guidelines that both parties will have to comply with. To obtain the file key you must confirm your subscription by sending us a screenshot of the payment to our whaptsApp bussiness.`,
      attachments: [
        {
          filename: "contrato.rar",
          path: "public/files/contrato.rar",
        },
      ],
    };

    TRANSPORT.sendMail(mailOptions, (err, info) => {
      if (err) console.log(err);
      console.log("Email sent: " + info.response);
    });
    res.send("Email sending");
  } catch (error) {
    console.log(error);
  }
});

app.listen(4000 || process.env.PORT, () => console.log("servido"));
