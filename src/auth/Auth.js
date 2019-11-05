import React, {useState } from 'react';
import { Container, Button, Form, FormGroup, Label, Input  } from 'reactstrap';



const Auth = () => {

    const [email, setEmail] = useState('')

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
                <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
            </FormGroup>
            <Button>Submit</Button>
            </Form>
        </Container>
    )
}

export default Auth;
