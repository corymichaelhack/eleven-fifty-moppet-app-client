import React, { useState } from 'react';
import { Container, Row, Col, CardDeck } from 'reactstrap';
import ChildCreate from './ChildCreate';
import ChildIndex from './ChildIndex';
import ChildShow from './ChildShow';



const ChildHome = (props) => {
    return (
        <Container className="child-container">
            {/* CREATE A CHILD */}
                {/* <Col sm="12" md={{ size: 6, offset: 3 }} >
                    <ChildCreate/>
                </Col> */}
            
            {/* SHOW ALL CHILDREN */}
                <CardDeck style={{width: "18rem"}} >
                    <ChildIndex  token={props.token}  />
                </CardDeck>

            {/* SHOW INDIVIDUAL CHILD */}
            
            
        </Container>
    )
};

export default ChildHome;