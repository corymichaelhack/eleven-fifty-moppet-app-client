import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';



const ChildCreate = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [meds, setMeds] = useState('');
    const [allergy, setAllergy] = useState('');

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
                        allergy: allergy
                    }
                }),
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Authorization': props.token
            }) 
        })
        .then( (res) => {
            props.fetchChildren();
        })
    }

    return (

        <div>
            <h3>Enroll Child</h3>
            <Form onSubmit={onSubmitChange}>
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
                <Button type="submit">Click to Submit</Button>
            </Form> 
         </div>
    )
};

export default ChildCreate;