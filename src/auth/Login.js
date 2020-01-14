import React, {useState } from 'react';
import { Button, Form, FormGroup, Label, Input  } from 'reactstrap';
import APIURL from '../helpers/enviroment';


const Login = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    let onSubmitChange = (event) => {
        event.preventDefault();
        fetch( `${APIURL}/moppet/user/signin`, {
            method: "POST",
            body: JSON.stringify({ user: {
                email: email.toLowerCase(),
                password: password
            }
                
            }),
            headers: new Headers({
                'Content-Type' : 'application/json'
            })
        })
        .then(
            (response) => response.json()
        )
        .then((data) => {
            props.updateToken(data.sessionToken)
        })
    }

    return(
        <div>
            <Form onSubmit={onSubmitChange}>
                <h1>Login</h1>
                <FormGroup >
                    <Label for="emailLogin">Email</Label>
                    <Input value={ email } onChange={(event)=>setEmail(event.target.value)} type="email" name="email" id="emailLogin" placeholder="something@idk.cool" required/>
                </FormGroup>
                <FormGroup >
                    <Label for="password">Password</Label>
                    <Input value={ password } onChange={(event)=>setPassword(event.target.value)} type="password" name="password" id="password" placeholder="don't tell!" minLength="5" title="Password must be 5 characters minimum" pattern="[A-Za-z0-9]{5,}" required />
                </FormGroup>
                <Button type="submit" color="primary">Login</Button>
            </Form>
        </div>
            
    )
}

export default Login;
