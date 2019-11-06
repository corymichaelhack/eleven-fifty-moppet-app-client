import React, { useState } from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let onSubmitChange = (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/moppet/user/signup",  {
            method: "POST", 
            body: JSON.stringify({ user: {
                email: email, 
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
            <h1>Signup</h1>
            <Form onSubmit={onSubmitChange}>
                <FormGroup >
                    <Label htmlFor="emailSignup">Email</Label>
                    <Input onChange={(event)=>setEmail(event.target.value)} value={email}  type="email" name="email" id="emailSignup" placeholder="something@idk.cool" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(event) => setPassword(event.target.value)} type="password" name="password" value={password} placeholder="password...don't tell"/>
                </FormGroup>
                <Button type="submit">Signup</Button>
            </Form>
        </div>
    )
}

export default Signup;