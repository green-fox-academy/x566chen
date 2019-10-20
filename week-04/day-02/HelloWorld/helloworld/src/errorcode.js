import React from 'react';



const ErrorCode = ({match}) =>{
    return(
        <div>
            <h1>Error: {match.params.id}</h1>
        </div>
    )
}





export default ErrorCode