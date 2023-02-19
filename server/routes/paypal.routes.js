import { Router } from "express";

// import paypal from "paypal-rest-sdk";
import {
  cancelOrder,
  captureOrder,
  Payment,
} from "../controllers/paypal.controllers.js";

export const PaymentsRoutes = Router();

PaymentsRoutes.post("/pay", Payment);
PaymentsRoutes.get("/success", captureOrder);
PaymentsRoutes.get("/cancel", cancelOrder);

// PaymentsRoutes.post("/pay", (req, res) => {
//   const create_payment_json = {
//     intent: "sale",
//     payer: {
//       payment_method: "paypal",
//     },
//     redirect_urls: {
//       return_url: "http://localhost:4000/api/paypal/success",
//       cancel_url: "http://localhost:4000/api/paypal/cancel",
//     },
//     transactions: [
//       {
//         item_list: {
//           items: [
//             {
//               name: "Red Sox Hat",
//               sku: "001",
//               price: "25.00",
//               currency: "USD",
//               quantity: 1,
//             },
//           ],
//         },
//         amount: {
//           currency: "USD",
//           total: "25.00",
//         },
//         description: "Hat for the best team ever",
//       },
//     ],
//   };
//   PaymentsRoutes.get("/success", (req, res) => {
//     const payerId = req.query.PayerID;
//     const paymentId = req.query.paymentId;

//     const execute_payment_json = {
//       payer_id: payerId,
//       transactions: [
//         {
//           amount: {
//             currency: "USD",
//             total: "25.00",
//           },
//         },
//       ],
//     };

//     paypal.payment.execute(
//       paymentId,
//       execute_payment_json,
//       function (error, payment) {
//         if (error) {
//           console.log(error.response);
//           throw error;
//         } else {
//           console.log(JSON.stringify(payment));
//           res.send("Success");
//         }
//       }
//     );
//   });
//   paypal.payment.create(create_payment_json, function (error, payment) {
//     if (error) {
//       throw error;
//     } else {
//       for (let i = 0; i < payment.links.length; i++) {
//         if (payment.links[i].rel === "approval_url") {
//           res.json({ link: payment.links[i].href });
//         }
//       }
//     }
//   });
// });
// PaymentsRoutes.get("/cancel", (req, res) => res.send("Cancelled"));
