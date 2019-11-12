import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';



const ChildCreate = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [meds, setMeds] = useState('');
    const [allergy, setAllergy] = useState('');

    const [file, setFile] = useState('');

    const onFileChange = event => {
        setFile(event.target.files[0])
    }


    const onSubmitChange = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/moppet/child/addnewchild', {
            method: "POST",
            body: JSON.stringify(
                { child:
                    {
                        firstName: firstName,
                        lastName: lastName,
                        dateOfBirth: dateOfBirth,
                        meds: meds,
                        allergy: allergy,
                        image: file   
                    },
                    
                }
                 ),

            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            }) 
            
        })
        .then( (res) => {
            props.fetchChildren();
            props.updateOff();
        })
        .catch((error => {
            console.log("upload error", error)
        }))
    }

    return (

        <div>
        <Modal isOpen={true} >
        <ModalHeader>
        <div>Add Child
        </div>
        <Button style={{float: "right"}} size="sm" color="outline-dark" onClick={() => {props.updateOff()}}>Exit</Button>
        </ModalHeader>
        
        <ModalBody>
            <h3>Enroll Child</h3>
            <Form onSubmit={onSubmitChange} encType="multipart/form-data" >
                <FormGroup>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input onChange={(event) => setFirstName(event.target.value)} type="text" name="firstName" value={firstName}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input onChange={(event) => setLastName(event.target.value)} type="text" name="lastName" value={lastName}>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="dateOfBirth">Date of Birth</Label>
                    <Input onChange={(event) => setDateOfBirth(event.target.value)} value={dateOfBirth} type="date" name="dateOfBirth"  pattern="[0-9]{8}">
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="meds">Medication</Label>
                    <Input onChange={(event) => setMeds(event.target.value)} type="text" name="meds" value={meds}>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="allergy">Allergy</Label>
                    <Input onChange={(event) => setAllergy(event.target.value)} type="text" name="allergy" value={allergy}/>
                </FormGroup>
                <FormGroup >
                    <Label htmlFor="image">Photo</Label>
                    <Input onChange={onFileChange} type="file"  id="image" name="image"/>
                </FormGroup>
                <Button type="submit">Click to Submit</Button>
            </Form> 
            </ModalBody>
            </Modal>
         </div>
    )
};

export default ChildCreate;