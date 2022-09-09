import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import axios from "axios";
import styles from "./PaymentCreate.module.css";

//clave publica
const stripePromise = loadStripe(
  "pk_test_51LeL9JItJw2qRdRyTqjWxMEj6dNHj5ytf10BX8BxSmB1sjwqUeDZNhY2E7p6pKGYsn1XVvZeyyxPywpV6lUApH7200x4hSwa81"
);

export default function PaymentCreate({ userId }) {
  

  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    axios
      .post("http://localhost:3001/create-payment-intent", {
        userId: userId,
      })
      .then((res) => setClientSecret(res.data.clientSecret));
  }, [userId]);

  const options = {
    clientSecret,
  };

  return (
    <div className={styles.container}>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}