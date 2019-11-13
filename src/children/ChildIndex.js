import React, { useState } from 'react';
import { Card, CardBody, CardTitle, Button, CardImg, CardDeck } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import ChildShow from './ChildShow';



const ChildIndex = (props) => {
   
    const [child, setChild] = useState({});
    const [childToShow, setChildToShow] = useState({});

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const showChild = (child) => {
        setChildToShow(child);    
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

                    <Button onClick={()=>{showChild(child);toggle()}}color="primary" >Show more...</Button>
                    </CardBody>
               </Card>
                </div>
            )
        })

    }

    //FUNCTION TO SHOW UPDATE MODAL


    return ( 
        <div>
            <div>
                <h3  style={{ display: 'inline'}}>Enrolled Children</h3>
                <Button style={{float: 'right'}} onClick={()=>{props.updateOn()}}outline color="success" ><FontAwesomeIcon style={{ padding: '2px'}} icon={faPlus} />Enroll Child</Button>
            </div>
            
            {/* <Button style={{float: 'right'}} onClick={toggle}color="primary" ><FontAwesomeIcon style={{ padding: '2px'}} icon={faPlus} />Enroll Child</Button> */}
            <CardDeck>
            {childMapper()}
            </CardDeck>
        {modal ? <ChildShow showChild={showChild}childToShow={childToShow}  modal={modal} toggle={toggle} token={props.token } fetchChild={fetchChild} fetchChildren={props.fetchChildren} /> : <></>}
        </div>
        
    );
};

export default ChildIndex;