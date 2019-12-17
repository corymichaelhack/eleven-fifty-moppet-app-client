import React, { useState } from 'react';
import {  Button, Form, FormGroup, Label, Input } from 'reactstrap';

const IncidentReport = (props) => {
    const [date, setDate] = useState('');
    const [studentName, setStudentName] = useState('');
    const [dateOfIncident, setDateOfIncident] = useState('');
    const [detailsOfIncident, setDetailsOfIncident] = useState('');
    const [reportingAdmin, setReportingAdmin] = useState('');
    const [email, setEmail] = useState('busterk@ymail.com');



    return(
        <div>
            <h1> Incident Report </h1>
            <Form 
            action={`https://formspree.io/${email}`}method="post">
                <FormGroup>
                    <Label htmlFor="date">Date</Label>
                    <Input onChange={(event) => setDate(event.target.value)} type="date" name="date" value={date} pattern="[0-9]{8}"/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="studentName">Student Name</Label>
                    <Input onChange={(event) => setStudentName(event.target.value)} type="text" name="studentName"  value={studentName}>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="details">Details of Incident</Label>
                    <Input onChange={(event) => setDetailsOfIncident(event.target.value)} value={detailsOfIncident} type="text" name="detailsOfIncident" >
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="dateOfIncident">Date of Incident</Label>
                    <Input onChange={(event) => setDateOfIncident(event.target.value)} value={dateOfIncident} type="date" name="dateOfIncident"  pattern="[0-9]{8}">
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="reportingAdmin">Reporting Admin</Label>
                    <Input onChange={(event) => setReportingAdmin(event.target.value)} value={reportingAdmin} type="text" name="reportingAdmin">
                    </Input>
                </FormGroup>
                <Button type="submit">Submit Report</Button>
            </Form> 
        </div>
    )
}

export default IncidentReport;