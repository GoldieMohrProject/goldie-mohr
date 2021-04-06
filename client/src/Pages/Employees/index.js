import React, { Component } from 'react'
import SearchInput from '../../Components/SearchInput/index'
import Content from '../../Components/Content';
// import API from '../../utils/API';

class Employees extends Component {

    // const API = []
    //State
    state = {
        result : [],
        filteredResult : [],
        sortedResult : [],
        search: "",
        counter: 1,
        isGoing: true,

    }

    //react lifecycle

    componentDidMount(){
        this.loadEmployees();
    }

    //Function
    loadEmployees = async() => {
        // API.getEmployeesList().then(response =>{
        //     console.log(response.data.results)
        //     this.setState({result: response.data.results})
        // }).catch(error => console.log(error))
            const fetchOptions = {
              method: 'get',
              headers: {
                  'Content-Type': 'application/json',
                  'email': localStorage.email || '',
              },
              // body : JSON.stringify( userInfo )
          }
        const {userData} = await fetch('/api/users/employees',fetchOptions).then( res=>res.json())
        console.log(userData)
        this.setState({result: userData})
           
    }

    handleInputChange = async(event) => {
        console.log(event.target.value)
        await (this.setState({search :event.target.value}))
        this.filterEmployees()
      }
      
    filterEmployees = () =>{
       
        let newResult = this.state.result.filter((employee)=> employee.first_name.toLowerCase().includes(this.state.search.toLowerCase())
        ||employee.last_name.toLowerCase().includes(this.state.search.toLowerCase()))
        console.log('testing',newResult)
        this.setState({filteredResult: newResult})
        console.log('filtered state',this.state.filteredResult)
    }
    handleCheckBoxChange = async(event)=>{
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    //Render JSX
    render() {
        return (
            <div style={{marginLeft:'10%',marginRight:'10%'}}>
                <p style={{textAlign:'center', color:'#3178C6', cursor:'default'}}>Welcome Back Manager</p>
                <SearchInput  handleInputChange = {this.handleInputChange}/>
                <Content  handleCheckBoxChange = {this.handleCheckBoxChange}
                result={ (this.state.search.length>0) ? this.state.filteredResult: this.state.result} />
            </div>
        )
    }
}


export default Employees;