import React, { useState } from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import Signup from './Signup';
import Login from './Login';

const Auth = (props) => {
    



    const onAuthFieldButton = (event) => {
        event.preventDefault();
        props.setLogin(!props.login);
    }

    const authFields = () => {
        return props.login ? <Login updateToken={props.updateToken}/> : <Signup updateToken={props.updateToken}/>

    }

    const authToggleTitle = () => {
        return props.login ? "Admin Sign up" : "Admin Login"
    }


    return(
        <Container className="auth-container">
            <Row>
            <Col md="6" className="login-col">
                {authFields()}
                <Button id="button" style={{marginTop: "10px"}} onClick={onAuthFieldButton}>{authToggleTitle()}</Button>
            </Col>
            </Row>
        </Container>
    )
}

export default Auth;