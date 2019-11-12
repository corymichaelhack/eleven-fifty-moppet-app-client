import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
import axios from 'axios';


const ChildCreate = (props) => {
    const [file, setFile] = useState([]);
    const [filename, setFilename] = useState('Choose File');
    const [uploadedFile, setUploadedFile] = useState({});

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [meds, setMeds] = useState('');
    const [allergy, setAllergy] = useState('');

    const onChanges = (event) => {
        setFile(event.target.files[0]);
        setFilename(event.target.files[0].name)
    }

    const onSubmitPhoto = async (event) => {
        event.preventDefault();
        let formData = new FormData();
        formData.append('image', file);
        var options = { content: formData };
        console.log(options)

        // try {
        //     const res = await axios.post('http://localhost:3000/moppet/upload', formData, {
        //         headers: {
        //             'Content-Type': 'multipart/form-data'
        //         }
        //     });
        //     const {fileName, filePath } = res.data;

        //     setUploadedFile({fileName, filePath});
        // } catch(err) {
        //     if(err.response.status === 500) {
        //         console.log("problem with server")
        //     } else {
        //         console.log(err.response.data.msg)
        //     }
        // }
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
                        allergy: allergy  
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
        
        {/* <Label htmlFor="file">{filename}</Label>
        <Input type="file" name="file" id="file"  onChange={(event) => setFile(event.target.files[0])}/> */}
        

        <Button type="button" onClick={onSubmitPhoto}>Submit</Button>
    
            <Form onSubmit={onSubmitChange} >
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
            </ModalBody>
            </Modal>
         </div> 
    )
};

export default ChildCreate;