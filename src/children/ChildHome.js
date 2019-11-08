import React, { useState, useEffect } from 'react';
import { Container, Row, Col, CardDeck } from 'reactstrap';
import ChildCreate from './ChildCreate';
import ChildIndex from './ChildIndex';
import ChildShow from './ChildShow';



const ChildHome = (props) => {

    const [children, setChildren] = useState([]);
    const [childToUpdate, setChildToUpdate] = useState({});

    const showChild = (child) => {
        setChildToUpdate(child);
        console.log(child)
    }


 

    //IMMEDIATELY LOAD THE CHILD UPON PAGE RENDER
    useEffect(() => {
        fetchChildren();   
    }, [])

     //FECTH THE CHILD FROM DATABASE
    const fetchChildren = () => {
        fetch('http://localhost:3000/moppet/child/allchildren', {
            method: "GET",
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            }) 
        })
        .then((res) => res.json())
        .then((childData) => setChildren(childData))
    }

    
    return (
        <Container className="child-container">
            {/* CREATE A CHILD */}
                <Col sm="12" md={{ size: 6, offset: 3 }} >
                    <ChildCreate fetchChildren={fetchChildren}/>
                </Col>
            
            {/* SHOW ALL CHILDREN */}
                <ChildIndex  token={props.token} children={children} fetchChildren={fetchChildren} showChild={showChild}  />
                
        </Container>
    )
};

export default ChildHome;