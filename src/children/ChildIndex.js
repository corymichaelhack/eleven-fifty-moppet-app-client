import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, Button, CardImg } from 'reactstrap';
import profile from './cardImg_318x180.svg';
import ChildShow from './ChildShow';



const ChildIndex = (props) => {
    const [children, setChildren] = useState([]);

    
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


    const childMapper = () => {
        return children.map((child, index) => {
            return(
                <div>
                <Card key={child.id}>
                    <CardImg top width="100%" src={profile}/>
                    <CardBody>
                    <CardTitle>{child.lastName}, {child.firstName}</CardTitle>
                    
                    <Button color="primary">Show more...</Button>
                    </CardBody>
                    
                
                    
                </Card>
                <ChildShow token={props.token} child={child}/>
                </div>
            
            )
        })

    }


    return ( 
        <div>
        {childMapper()}
        </div>
        
    );
};

export default ChildIndex;