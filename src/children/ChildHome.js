import React, { useState, useEffect } from 'react';
import { Container, Button } from 'reactstrap';
import ChildCreate from './ChildCreate';
import ChildIndex from './ChildIndex';




const ChildHome = (props) => {

    const [children, setChildren] = useState([]);
    const [childToUpdate, setChildToUpdate] = useState({});
    const [updateActive, setUpdateActive] = useState(false);

    const showChild = (child) => {
        setChildToUpdate(child);
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }
 

    //IMMEDIATELY LOAD THE CHILD UPON PAGE RENDER
    useEffect(() => {
        fetchChildren();   
    }, [])

     //FECTH THE CHILD FROM DATABASE
    const fetchChildren = () => {
        fetch('http://localhost:3000/moppet/child/allchildren', {
            method: "GET",
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            }) 
        })
        .then((res) => res.json())
        .then((childData) => setChildren(childData))
    }

    
    return (
        <Container className="child-container">

            {/* CREATE A CHILD */}

                {updateActive ? <ChildCreate token={props.token } updateOff={updateOff} fetchChildren={fetchChildren}/> : <></>}

                <Button style={{float: 'right'}} onClick={()=>{updateOn()}}color="primary" >Create Child</Button>
       
           
            
            {/* SHOW ALL CHILDREN */}
                <ChildIndex  token={props.token} children={children} fetchChildren={fetchChildren} showChild={showChild}  />
                
        </Container>
    )
};

export default ChildHome;