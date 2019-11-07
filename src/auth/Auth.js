import React, { useState } from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import Signup from './Signup';
import Login from './Login';

const Auth = (props) => {
    const [login, setLogin] = useState(true);

    const onAuthFieldButton = (event) => {
        event.preventDefault();
        setLogin(!login);
    }

    const authFields = () => {
        return login ? <Login updateToken={props.updateToken}/> : <Signup updateToken={props.updateToken}/>

    }


    return(
        <Container className="auth-container">
            <Row>
            <Col md="6" className="login-col">
                {authFields()}
                <Button id="button" style={{marginTop: "10px"}} onClick={onAuthFieldButton}>Signup an Admin</Button>
            </Col>
            </Row>
        </Container>
    )
}

export default Auth;