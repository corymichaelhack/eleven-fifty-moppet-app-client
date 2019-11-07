import React, { useState } from 'react';
import { Card, CardBody, CardTitle, Button, CardImg, CardFooter, Form, FormGroup, Label, Input} from 'reactstrap';
import profile from './cardImg_318x180.svg';

const ChildShow = (props) => {
    console.log(props)
    const [child, setChild] = useState({});
    const [showFirstName, setShowFirstName] = useState(props.child.firstName)
    const [showLasttName, setShowLastName] = useState(props.child.lastName)
    const [showDateOfBirth, setShowDateOfBirth] = useState(props.child.dateOfBirth)
    const [showMeds, setShowMeds] = useState(props.child.meds)
    const [showAllergy, setShowAllergy] = useState(props.child.allergy)

    //FECTH THE CHILD FROM DATABASE
    const fetchChild = () => {
        fetch(`http://localhost:3000/moppet/child/getchild/2`, {
            method: "GET",
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            }) 
        })
        .then((res) => res.json())
        .then((childData) => setChild(childData))
    }
    
    return(
       
        
        <Card >
             <h1>Lets show/edit the child</h1>       
            <CardImg top width="18rem" src={profile}/>
            <CardBody>
            <CardTitle></CardTitle>
            <Form>
                <FormGroup>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input onChange={(event) => setShowFirstName(event.target.value)} type="text" name="firstName" value={showFirstName}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input onChange={(event) => setShowLastName(event.target.value)} type="text" name="lastName" value={showLasttName}>
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
                {/* <Button color="warning" onClick={() => {props.editUpdateChild(); props.updateOn()}}>Update</Button> */}
                    {/* <Button color="danger" onClick={() => {deleteWorkout(workout)}}>Delete</Button> */}
                {/* <Button type="submit">Update Information</Button> */}
            </Form> 
            <CardFooter>
            <Button type= "submit">Update Information</Button>  
            </CardFooter>
            
            </CardBody>
        </Card>

    );
};

export default ChildShow;