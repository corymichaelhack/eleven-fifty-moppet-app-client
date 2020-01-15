import React, { useState } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const SearchResults = (props) => {
    console.log(props)

const results = () => {
    console.log(props)
    return props.children.map((child, index) => {
        let searchedChild = child.firstName.toLowerCase();
       
       if (searchedChild.indexOf(props.searchterm) != -1){
       console.log(searchedChild)
       return <ListGroupItem>{searchedChild}</ListGroupItem>
       } 
   })
}
    



    return (
        <div>
            <ListGroup >
                {results()}
            </ListGroup>
        </div>
    )
}

export default SearchResults;