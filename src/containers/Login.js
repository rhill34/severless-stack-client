import React, { useState } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import "./Login.css";
import { Auth } from "aws-amplify";

export default function Login(props) {
    // Right at the top of our component, we are using the useState hook (https://reactjs.org/docs/hooks-state.html) to store what the user enters in the form. The useState hook just gives you the current value of the variable you want to store in the state and a func5on to set the new value.
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            await Auth.signIn(email, password);
            console.log("Logged In");
            props.history.push("/");
        } catch (e) {
            console.log(e);
            alert(e.message);
            setIsLoading(false);
        }
    }
    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="email" bsSize="large">
                    <ControlLabel>Email</ControlLabel> <FormControl
                        autoFocus
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <ControlLabel>Password</ControlLabel> <FormControl
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                </FormGroup>
                <LoaderButton
                    block
                    type="submit" 
                    bsSize="large" 
                    isLoading={isLoading} 
                    disabled={!validateForm()}
                >
                    Login
                </LoaderButton>
            </form>
        </div>
    );
}
