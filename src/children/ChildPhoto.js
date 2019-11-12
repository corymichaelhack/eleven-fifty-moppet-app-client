import React, { useState } from 'react';
import { Button, Label, Input } from 'reactstrap';

const ChildPhoto = (props) => {
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');

    const onChange = (event) => {
        setFile(event.target.files[0]);
        setFilename(event.target.files[0].name);
    }



    return(
        <div>
        <form>
        <Label htmlFor="exampleFile">{filename}</Label>
        <Input type="file" name="file" id="exampleFile" onChange={onChange}/>

        <Input type="submit" value="upload">Submit</Input>
        </form>
        </div>
       
    )
}

export default ChildPhoto;