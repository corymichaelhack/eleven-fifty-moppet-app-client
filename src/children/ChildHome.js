import React, { useState, useEffect } from 'react';
import { Container, Button, ButtonGroup } from 'reactstrap';
import { Route, Link, Switch } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import ChildCreate from './ChildCreate';
import ChildIndex from './ChildIndex';
import Calendar from '../calendar/ChildCalendar';
import IncidentReport from '../incident-report/IncidentReport';

import APIURL from '../../src/helpers/enviroment';




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
        fetch(`${APIURL}/moppet/child/allchildren`, {
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

             <div className="">
                
                    <ButtonGroup style={{ marginBottom: '20px'}}>
                        <Button outline color="info" >
                            <Link style={{ textDecoration: 'none', color: 'black'}} to="/children">Children</Link>
                        </Button>
                        <Button outline color="info">
                            <Link style={{ textDecoration: 'none', color: 'black'}} to="/calendar">Calendar</Link>  
                        </Button>
                        <Button outline color="info">
                            <Link style={{ textDecoration: 'none', color: 'black'}} to="/incident">Incident Report</Link>  
                        </Button>
                   
                    </ButtonGroup>
                        
                
            </div>

            <div>
            <Switch>
              
                <Route exact path="/children"><ChildIndex  token={props.token} children={children} fetchChildren={fetchChildren} updateOn={updateOn} showChild={showChild}  />
                </Route>
        
                <Route exact path="/calendar"><Calendar/>
                </Route>
                
                <Route exact path="/incident"><IncidentReport/>
                </Route>
              
            </Switch>
            </div>
        </Container>
    )
};

export default ChildHome;