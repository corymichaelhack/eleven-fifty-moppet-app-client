import React from 'react';
import Calendar from 'react-calendar';
import { Table } from 'reactstrap';


const ChildCalendar = () => {
    return(
        <div>
        <h1> Calendar Info </h1>
        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
        <Calendar/>
       
        <Table className='dayInfo'>
        <thead>
        <tr>
          <th>Time</th>
          <th>Event</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">6:00am</th>
          <td>Open Doors for School</td>
        </tr>
        <tr>
          <th scope="row">7:00am</th>
          <td>Prep Breakfast</td>
        </tr>
        <tr>
          <th scope="row">8:00am</th>
          <td></td>
        </tr>
        <tr>
          <th scope="row">9:00am</th>
          <td></td>
        </tr>
        <tr>
          <th scope="row">10:00am</th>
          <td></td>
        </tr>
        <tr>
          <th scope="row">11:00am</th>
          <td></td>
        </tr>
        <tr>
          <th scope="row">12:00pm</th>
          <td></td>
        </tr>
        <tr>
          <th scope="row">1:00pm</th>
          <td></td>
        </tr>
        <tr>
          <th scope="row">2:00pm</th>
          <td></td>
        </tr>
        <tr>
          <th scope="row">3:00pm</th>
          <td></td>
        </tr>
        <tr>
          <th scope="row">4:00pm</th>
          <td></td>
        </tr>
        <tr>
          <th scope="row">5:00pm</th>
          <td></td>
        </tr>
        <tr>
          <th scope="row">6:00pm</th>
          <td>Close Doors for the Day</td>
        </tr>
      </tbody>
        
        </Table>

        
        </div>
        </div>
    )
}

export default ChildCalendar;