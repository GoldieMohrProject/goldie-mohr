import React from 'react'
import './style.css'

function SearchInput(props){

return <div>  
    <input onChange={props.handleInputChange} 
    value = {props.search}
    type="text" 
    placeholder="Filter employees by name" 
    className=" searchFilter"/>
    </div>
}

export default SearchInput