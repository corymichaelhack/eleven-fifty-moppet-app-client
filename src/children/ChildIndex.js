import React, { useState } from 'react';
import { Card, CardBody, CardTitle, Button, CardImg, CardDeck } from 'reactstrap';

import ChildShow from './ChildShow';



const ChildIndex = (props) => {
   
    const [child, setChild] = useState({});
    const [updateActive, setUpdateActive] = useState(false);
    const [childToShow, setChildToShow] = useState({});

    const showChild = (child) => {
        setChildToShow(child);    
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }

     //FECTH THE CHILD FROM DATABASE
     const fetchChild = () => {
        
        fetch(`http://localhost:3000/moppet/child/getchild/${props.child.id}`, {
            method: "GET",
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            }) 
        })
        .then((res) => res.json())
        .then((childData) => setChild(childData))
    }



    const childMapper = () => {
        return props.children.map((child, index) => {
            return(
                <div key={index}>
                <Card >
                    <CardImg style={{width: "200px", borderRadius: "100px", }} top src={child.imageUrl}/>
                    <CardBody>
                    <CardTitle>{child.lastName}, {child.firstName}</CardTitle>
                    
                    <Button onClick={()=>{showChild(child);updateOn()}}color="primary" >Show more...</Button>
                    </CardBody>
               </Card>
                </div>
            )
        })

    }

    //FUNCTION TO SHOW UPDATE MODAL


    return ( 
        <div>
            <h3>Enrolled Children</h3>
            <CardDeck>
            {childMapper()}
            </CardDeck>
        {updateActive ? <ChildShow showChild={showChild}childToShow={childToShow} updateOff={updateOff} token={props.token } fetchChild={fetchChild} fetchChildren={props.fetchChildren} /> : <></>}
        </div>
        
    );
};

export default ChildIndex;