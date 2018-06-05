import React from "react";
import { Elements } from "react-stripe-elements";
import { StripeProvider } from "react-stripe-elements";

import TextFields from "./TextFields";
import InjectedCheckoutForm from "./CheckoutForm";

class RegisterPage extends React.Component {
  render() {
    return (
      <div>
        <TextFields />
        <StripeProvider apiKey="pk_test_12345">
          <Elements>
            <InjectedCheckoutForm />
          </Elements>
        </StripeProvider>
      </div>
    );
  }
}

export default RegisterPage;
