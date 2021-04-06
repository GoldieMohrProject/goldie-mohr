import React from 'react';
import TableList from '../TableList'

function Content(props){

    return <div>
        <TableList
        handleCheckBoxChange = {props.handleCheckBoxChange}
        result={props.result} />
        {console.log('props',props.result)}
    </div>
}

export default Content;