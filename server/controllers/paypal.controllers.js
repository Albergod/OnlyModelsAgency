import paypal from "paypal-rest-sdk";

export const Payment = (req, res) => {
  const create_payment_json = {
    intent: "sale",
    payer: {
      payment_method: "paypal",
    },
    redirect_urls: {
      return_url: "http://localhost:4000/api/paypal/success",
      cancel_url: "http://localhost:4000/api/paypal/cancel",
    },
    transactions: [
      {
        item_list: {
          items: [
            {
              name: "Payment for register",
              price: "50.00",
              currency: "USD",
              quantity: 1,
            },
          ],
        },
        amount: {
          currency: "USD",
          total: "50.00",
        },
        description: "Register in OnlyModelsAgency.",
      },
    ],
  };

  paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
      console.log(error.response);
      throw error;
    } else {
      console.log(payment);
      payment.links.forEach((item) => {
        if (item.rel === "approval_url") {
          return res.json({ link: item.href });
        }
      });
    }
  });
};

export const captureOrder = (req, res) => {
  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;

  const execute_payment_json = {
    payer_id: payerId,
    transactions: [
      {
        amount: {
          currency: "USD",
          total: "10.00",
        },
      },
    ],
  };

  paypal.payment.execute(
    paymentId,
    execute_payment_json,
    function (error, payment) {
      if (error) {
        console.log(error.response);
        throw error;
      } else {
        console.log(JSON.stringify(payment));
        res.redirect(
          "https://onlymodelsagency.vercel.app/paypal/paysuccessfully"
        );
      }
    }
  );
};

export const cancelOrder = (req, res) => {
  res.json("El pago fue cancelado.");
};
