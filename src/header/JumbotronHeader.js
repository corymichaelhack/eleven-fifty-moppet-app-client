import React from 'react';
import { Jumbotron  } from 'reactstrap';
import './jumbotron.css';
import bgimage from '../assets/daycare-heart.jpeg';


const JumbotronHeader = (props) => {
    console.log(props);

  return (
     <div>
      <Jumbotron className="jumbotron" style={{backgroundImage: `url(${bgimage})`, backgroundSize: '100%'}}>
        <div>
            <h1 className="greeting">Hello, </h1>
            <p className="lead">Tackle the day, not the children.</p>
        </div>
        
        <hr className="my-2" />
      </Jumbotron>
    </div> 
  );
};

export default JumbotronHeader;