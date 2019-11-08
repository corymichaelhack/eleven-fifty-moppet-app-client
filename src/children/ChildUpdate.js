import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

const ChildUpdate = (props) => {

   
    return(
     <Modal isOpen={true}>
         <ModalHeader>Log a Workout</ModalHeader>
         <ModalBody>
         <Form onSubmit={workoutUpdate}>
                <FormGroup>
                    <Label htmlFor="description"/>
                    <Input onChange={(event) => setEditDesc(event.target.value)} name="description" value={editDesc}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="definition"/>
                    <Input onChange={(event) => setEditDef(event.target.value)} type="select" name="definition" value={editDef}>
                        <option value="Time">Time</option>
                        <option value="Weight">Weight</option>
                        <option value="Distance">Distance</option>
                    </Input>

                </FormGroup>
                <FormGroup>
                    <Label htmlFor="result"/>
                    <Input onChange={(event) => setEditRes(event.target.value)} name="result" value={editRes}/>
                </FormGroup>
                <Button type="submit">Update Workout</Button>
            </Form> 
         </ModalBody>

     </Modal>
    )
}

export default ChildUpdate;
