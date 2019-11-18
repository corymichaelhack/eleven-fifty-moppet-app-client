import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, Button, CardImg, CardDeck } from 'reactstrap';
import {Typeahead} from 'react-bootstrap-typeahead';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import APIURL from '../../src/helpers/enviroment';

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
        
        fetch(`${APIURL}/moppet/child/getchild/${props.child.id}`, {
            method: "GET",
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            }) 
        })
        .then((res) => res.json())
        .then((childData) => setChild(childData))
    }

    const calcAge = (birthdate) => {
        let currentDate = new Date();
        birthdate = birthdate.substr(0,4);
        currentDate = currentDate.getUTCFullYear();
        birthdate = parseInt(birthdate); 
        let currentAge = currentDate - birthdate;
        return currentAge  
    }

    const onSubmitSearch = (event) => {
        event.preventDefault();
        console.log('I was submited')
    }

    const childMapper = () => {
        return props.children.map((child, index) => {
            return(
                <div key={index}>
                <Card >
                    <CardImg style={{width: "200px", borderRadius: "100px", }} top src={child.imageUrl}/>
                    <CardBody>
                    
                    <CardTitle>{child.lastName}, {child.firstName}</CardTitle>
                    <p>Age: { calcAge(child.dateOfBirth)}</p>

                    <Button onClick={()=>{showChild(child);toggle()}} color="primary" >Show more...</Button>
                    </CardBody>
               </Card>
                </div>
            )
        })

    }

    return ( 
        <div>
            <div>
                <div style={{ marginBottom: "20px"}}>
                <Typeahead onSubmit={onSubmitSearch} labelKey="firstName" options={props.children} placeholder="Search for a child here..."/>
                </div>

                
             
                
                <h3  style={{ display: 'inline'}}>Enrolled Children</h3>
                <Button style={{float: 'right'}} onClick={()=>{props.updateOn()}}outline color="success" ><FontAwesomeIcon style={{ padding: '2px'}} icon={faPlus} />Enroll Child</Button>
            </div>
            
            
       
            <CardDeck>
            {childMapper()}
            </CardDeck>
        {modal ? <ChildShow showChild={showChild}childToShow={childToShow}  modal={modal} toggle={toggle} token={props.token } fetchChild={fetchChild} fetchChildren={props.fetchChildren} /> : <></>}
        </div>
        
    );
};

export default ChildIndex;