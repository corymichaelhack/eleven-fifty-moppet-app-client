import React, { useState } from 'react';
import {  Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
import APIURL from '../../src/helpers/enviroment';


const ChildShow = (props) => {
    console.log(props)

    const [showFirstName, setShowFirstName] = useState(props.childToShow.firstName)
    const [showLastName, setShowLastName] = useState(props.childToShow.lastName)
    const [showDateOfBirth, setShowDateOfBirth] = useState(props.childToShow.dateOfBirth)
    const [showMeds, setShowMeds] = useState(props.childToShow.meds)
    const [showAllergy, setShowAllergy] = useState(props.childToShow.allergy)

 

    const childUpdate = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/moppet/child/update/${props.childToShow.id}`, {
            method: 'PUT',
            body: JSON.stringify(
                { child:
                    {
                        firstName: showFirstName,
                        lastName: showLastName,
                        dateOfBirth: showDateOfBirth,
                        meds: showMeds,
                        allergy: showAllergy
                    }
                }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then((res) => {
            props.fetchChildren();
            props.toggle();
        })
    }

    const deleteChild = (child) => {
        fetch(`http://localhost:3000/moppet/child/delete/${props.childToShow.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then((res) => {
            props.fetchChildren();
            props.toggle();   
        })
    }

    
    

    return( 
        <Modal isOpen={props.modal} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle} >
        <div style={{ display: 'inline'}}>Child Info
        </div>

        </ModalHeader>
        <ModalBody>
   
        <Form onSubmit={childUpdate}>
               <FormGroup>
                   <Label htmlFor="description">First Name:</Label>
                   <Input onChange={(event) => setShowFirstName(event.target.value)} name="description" value={showFirstName}/>
               </FormGroup>
               <FormGroup>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input onChange={(event) => setShowLastName(event.target.value)} type="text" name="lastName" value={showLastName}>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="dateOfBirth">Date of Birth</Label>
                    <Input onChange={(event) => setShowDateOfBirth(event.target.value)} value={showDateOfBirth} type="date" name="dateOfBirth"  pattern="[0-9]{8}">
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="meds">Medication</Label>
                    <Input onChange={(event) => setShowMeds(event.target.value)} type="text" name="meds" value={showMeds}>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="allergy">Allergy</Label>
                    <Input onChange={(event) => setShowAllergy(event.target.value)} type="text" name="allergy" value={showAllergy}/>
                </FormGroup>
               <Button color="primary" type="submit">Save updates</Button>
               <Button style={{float: "right"}} size="sm" color="outline-danger" onClick={() => {deleteChild(props.child)}}>Delete</Button>
           
               
           </Form> 
        </ModalBody>
        </Modal>
    );
};

export default ChildShow;