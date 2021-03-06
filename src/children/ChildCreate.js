import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
import APIURL from '../../src/helpers/enviroment';




const ChildCreate = (props) => {
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [meds, setMeds] = useState('');
    const [allergy, setAllergy] = useState('');

    const onSubmitNewChild = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/moppet/child/addnewchild`, {
            method: "POST",
            body: JSON.stringify({
                child: {
                    firstName: firstName,
                    lastName: lastName,
                    dateOfBirth: dateOfBirth,
                    meds: meds,
                    allergy: allergy
                }
                
            }
            ),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
           
        }).then( (response) => {
            props.fetchChildren();
            props.updateOff();
        }).catch((err) => err.message);
    }


    return (

         <div>
        <Modal isOpen={true} >
        <ModalHeader>
        <div>Add Child
        </div>
       
        </ModalHeader>

        
        <ModalBody>
            <h3>Enroll Child</h3>
    
            <Form onSubmit={onSubmitNewChild} 
            
            action={`${APIURL}/moppet/child/addnewchild`} method="post" 
            encType="multipart/form-data"
            
            >
                <FormGroup >
                    <Label htmlFor="image"></Label>
                    <Input type="file" name="image" id="image" onChange={(event) => setFile(event.target.files[0])}/>
                </FormGroup>
               
                <FormGroup>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input onChange={(event) => setFirstName(event.target.value)} type="text" name="child[firstName]" value={firstName}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input onChange={(event) => setLastName(event.target.value)} type="text" name="child[lastName]" value={lastName}>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="dateOfBirth">Date of Birth</Label>
                    <Input onChange={(event) => setDateOfBirth(event.target.value)} value={dateOfBirth} type="date" name="child[dateOfBirth]"  pattern="[0-9]{8}">
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="meds">Medication</Label>
                    <Input onChange={(event) => setMeds(event.target.value)} type="text" name="child[meds]" value={meds}>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="allergy">Allergy</Label>
                    <Input onChange={(event) => setAllergy(event.target.value)} type="text" name="child[allergy]" value={allergy}/>
                </FormGroup>
                
                <Button type="submit">Click to Submit</Button>
                
                <Button style={{float: "right"}} size="sm" color="outline-dark" onClick={() => {props.updateOff()}}>Exit</Button>
            </Form> 
            </ModalBody>
            </Modal>
         </div> 
    )
};

export default ChildCreate;