import React, { useState } from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import APIURL from '../../src/helpers/enviroment';

const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let onSubmitChange = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/moppet/user/signup`,  {
            method: "POST", 
            body: JSON.stringify({ user: {
                email: email.toLowerCase(), 
                password: password   
                }            
            }
            ),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(
            (response) => response.json()
        )
        .then((data) => {
            props.updateToken(data.sessionToken)
           
        })
    }

    return (
        <div>
            <h1>Admin Signup</h1>
            <Form onSubmit={onSubmitChange}>
                <FormGroup >
                    <Label htmlFor="emailSignup">Email</Label>
                    <Input onChange={(event)=>setEmail(event.target.value)} value={email}  type="email" name="email" id="emailSignup" placeholder="something@idk.cool" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(event) => setPassword(event.target.value)} type="password" name="password" value={password} placeholder="password...don't tell" minLength="5" title="Password must be 5 characters minimum" pattern="[A-Za-z0-9]{5,}" required/>
                </FormGroup>
                <Button type="submit" color="primary">Signup</Button>
            </Form>
        </div>
    )
}

export default Signup;