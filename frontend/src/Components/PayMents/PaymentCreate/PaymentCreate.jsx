import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useAuth0 } from "@auth0/auth0-react";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import axios from "axios";
import styles from "./PaymentCreate.module.css";
import { BiUser } from "react-icons/bi";

//clave publica
const stripePromise = loadStripe(
  "pk_test_51LeL9JItJw2qRdRyTqjWxMEj6dNHj5ytf10BX8BxSmB1sjwqUeDZNhY2E7p6pKGYsn1XVvZeyyxPywpV6lUApH7200x4hSwa81"
);

export default function PaymentCreate({ userId }) {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();

  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    axios
      .post("http://localhost:3001/create-payment-intent", {
        userId: user.email,
      })
      .then((res) => setClientSecret(res.data.clientSecret));
  }, [user]);

  const options = {
    clientSecret,
  };

  return (
    <div className={styles.container}>
      {isAuthenticated && clientSecret ? (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      ) : (
        <button
            onClick={() => loginWithRedirect()}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <BiUser size="1.5rem" />
            Ingresar
          </button>
      )}
    </div>
  );
}
