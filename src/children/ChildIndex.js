import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, Button, CardImg } from 'reactstrap';
import profile from './cardImg_318x180.svg';
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
                <div>
                <Card key={child.id}>
                    <CardImg top width="100%" src={profile}/>
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
        {childMapper()}
        {updateActive ? <ChildShow showChild={showChild}childToShow={childToShow} updateOff={updateOff} token={props.token } fetchChild={fetchChild} fetchChildren={props.fetchChildren} /> : <></>}
        {/* <ChildShow/> */}
        </div>
        
    );
};

export default ChildIndex;