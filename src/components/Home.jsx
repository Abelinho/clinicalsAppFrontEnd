import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
class Home extends React.Component{

    state = {
         patientsData : []
    }

    //use constructor instead
   componentWillMount(){
        //make API call here
        axios.get("http://localhost:8080/clinicalservices/api/patients").then(
            res=>{const patientsData = res.data
              this.setState = patientsData;
              console.log(patientsData);
            }
        )
   }
    
   render(){
       return(<div>
       <h2>List of Patients</h2>
       <table className="table table-dark">
  <thead>
    <tr>
      <th>id</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
  { this.state.patientsData.map(patientData=>
    <RowCreator item={patientData}/>
        )}
  </tbody>
</table>
        <Link  to={'/addPatient'}>Register Patient</Link>
       </div>)
   }
}

class RowCreator extends React.Component{
    
    render(){
        var patient = this.props.item;
      return(
               <tr>
      <td>{patient.id}</td>         
      <td>{patient.firstName}</td>
      <td>{patient.lastName}</td>
      <td>{patient.age}</td>
    </tr>
    
    
          
      )
    }
    
  }
  export default Home;