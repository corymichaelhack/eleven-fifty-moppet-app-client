import React, { useState } from 'react';
import { Card, CardBody, CardTitle, Button, CardImg, CardDeck, FormGroup, Input, Form, Label } from 'reactstrap';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import APIURL from '../../src/helpers/enviroment';

import ChildShow from './ChildShow';
import SearchResults from '../search/SearchResults'



const ChildIndex = (props) => {
    console.log(props)
    
    const [child, setChild] = useState({});

    const [searchterm, setSearchTerm] = useState();
    
    const [childToShow, setChildToShow] = useState({});

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal); 

    const showChild = (child) => {
        setChildToShow(child);    
    }

     //FECTH THE CHILD FROM DATABASE
     const fetchChild = () => {
        
        fetch(`${APIURL}/moppet/child/getchild/${props.children.id}`, {
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

    const handleChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
        console.log(searchterm)
    }



    return ( 
        <div>
            <div>
                <Form >
                    <FormGroup>
                        <Label>
                            <Input  onInput={handleChange}/>
                        </Label>
                        <SearchResults children={props.children} searchterm={searchterm}/>
                    </FormGroup>
                </Form>

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