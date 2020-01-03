import React, { useState } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { CardElement, injectStripe } from "react-stripe-elements";
import LoaderButton from "./LoaderButton";
import { useFormFields } from "../libs/hooksLib";
import "./BillingForm.css";


/**
     * 
    To begin with we are going to wrap our component with a Stripe module using the injectStripe HOC. This gives our component access to the props.stripe.createToken method.

    As for the fields in our form, we have input field of type number that allows a user to enter the number of notes they want to store. We also take the name on the credit card. These are stored in the state through the handleFieldChange method that we get from our useFormFields custom React Hook.

    The credit card number form is provided by the Stripe React SDK through the CardElement component that we import in the header.

    The submit button has a loading state that is set to true when we call Stripe to get a token and when we call our billing API. However, since our Settings container is calling the billing API we use the props.isLoading to set the state of the button from the Settings container.

    We also validate this form by checking if the name, the number of notes, and the card details are complete. For the card details, we use the CardElement’s onChange method.

    Finally, once the user completes and submits the form we make a call to Stripe by passing in the credit card name and the credit card details (this is handled by the Stripe SDK). We call the props.stripe.createToken method and in return we get the token or an error back. We simply pass this and the number of notes to be stored to the settings page via the onSubmit method. We will be setting this up shortly.
 * @param {*} param0 
 */
function BillingForm({ isLoading, onSubmit, ...props }) {
  const [fields, handleFieldChange] = useFormFields({
    name: "",
    storage: ""
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCardComplete, setIsCardComplete] = useState(false);

  isLoading = isProcessing || isLoading;

  function validateForm() {
    return (
      fields.name !== "" &&
      fields.storage !== "" &&
      isCardComplete
    );
  }

  async function handleSubmitClick(event) {
    event.preventDefault();

    setIsProcessing(true);

    const { token, error } = await props.stripe.createToken({ name: fields.name });

    setIsProcessing(false);

    onSubmit(fields.storage, { token, error });
  }

  return (
    <form className="BillingForm" onSubmit={handleSubmitClick}>
      <FormGroup bsSize="large" controlId="storage">
        <ControlLabel>Storage</ControlLabel>
        <FormControl
          min="0"
          type="number"
          value={fields.storage}
          onChange={handleFieldChange}
          placeholder="Number of notes to store"
        />
      </FormGroup>
      <hr />
      <FormGroup bsSize="large" controlId="name">
        <ControlLabel>Cardholder&apos;s name</ControlLabel>
        <FormControl
          type="text"
          value={fields.name}
          onChange={handleFieldChange}
          placeholder="Name on the card"
        />
      </FormGroup>
      <ControlLabel>Credit Card Info</ControlLabel>
      <CardElement
        className="card-field"
        onChange={e => setIsCardComplete(e.complete)}
        style={{
          base: { fontSize: "18px", fontFamily: '"Open Sans", sans-serif' }
        }}
      />
      <LoaderButton
        block
        type="submit"
        bsSize="large"
        isLoading={isLoading}
        disabled={!validateForm()}
      >
        Purchase
      </LoaderButton>
    </form>
  );
}

export default injectStripe(BillingForm);