import React, {useState } from 'react';
import { Container, Button, Form, FormGroup, Label, Input  } from 'reactstrap';


const Login = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    let onSubmitChange = (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/moppet/user/signin", {
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: password
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
        <Container>
            <Form>
            <h1>Login</h1>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="email" className="mr-sm-2">Email</Label>
                <Input value={ email } onChange={(event)=>setEmail(event.target.value)} type="email" name="email" id="email" placeholder="something@idk.cool" />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="examplePassword" className="mr-sm-2">Password</Label>
                <Input value={ password } onChange={(event)=>setPassword(event.target.value)} type="password" name="password" id="examplePassword" placeholder="don't tell!" />
            </FormGroup>
            <Button>Submit</Button>
            </Form>
        </Container>
    )
}

export default Login;
