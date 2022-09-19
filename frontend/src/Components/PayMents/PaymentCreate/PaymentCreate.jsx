import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useAuth0 } from "@auth0/auth0-react";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import axios from "axios";
import styles from "./PaymentCreate.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getClientSecret } from "../../../redux/actions/Stripe/Stripe";

//clave publica
const stripePromise = loadStripe(
  "pk_test_51LeL9JItJw2qRdRyTqjWxMEj6dNHj5ytf10BX8BxSmB1sjwqUeDZNhY2E7p6pKGYsn1XVvZeyyxPywpV6lUApH7200x4hSwa81"
);

export default function PaymentCreate() {
  const clientSecret = useSelector((state) => state.stripeReducer.clientSecret)

  const options = {
    clientSecret: clientSecret.clientSecret ,
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
