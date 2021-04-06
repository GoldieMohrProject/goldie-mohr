import React from 'react';
import { Container, Table, Image } from 'react-bootstrap';

function TableList(props) {

  async function propshandleCheckBoxChange(event) {
    console.log('im a hereeeeeeeee',event.target.checked)
    const dataChange = {email :event.target.name, checked: event.target.checked}
    const fetchOptions = {
      method: 'post',
      headers: {
          'Content-Type': 'application/json',
          // 'email': email
      },
      body : JSON.stringify( dataChange )
  }
   const result = await fetch('/api/users/makeAdmin',fetchOptions).then( res=>res.json())
   console.log('it is donee , updated admin')
  }

  return (
    <Container fluid >
      {console.log('props2', props.result)}

      <Table striped bordered hover variant="light" responsive size="sm" style={{color:'#3178C6'}}>
        <thead>
          <tr>
            <th>First Name 
               {/* <button onClick={props.sortEmployees} style={{backgroundColor:'transparent', border:'0%',marginLeft:'5%'}}>
                  <i id='first' className="fas fa-sort" style={{color:'white'}}></i>
              </button> */}
              </th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Is Admin</th>
            <th>Status</th>
          
          </tr>
        </thead>
        <tbody>
          {props.result.map((employee) =>
          // <tr>
             <tr key={employee.userID}>
              {/* <td>
                <Image src={employee.picture.medium} rounded />
              </td> */}
              <td>{employee.first_name}</td>
              <td>{employee.last_name}</td>
              <td>{employee.phone_number}</td>
              <td>{employee.email}</td>
              <td><input
            name={employee.email}
            type="checkbox"
            checked={employee.isAdmin}
            onChange={(event)=>{propshandleCheckBoxChange(event)}} 
            /></td>
              <td>{employee.authId ===1 ? 'Online': 'Offline'}</td>

            </tr>)}

        </tbody>
        {console.log('safsafa',props.result)}
      </Table>
      { (props.result.length === 0)? <h3 style = {{textAlign :'center'}}>There is no employee name containing that search input</h3> : ""
      }
    </Container>
  )

}
export default TableList;