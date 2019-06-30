import React from 'react';

const ErrorPage = ({ErrorMessage}) => {
    return(
        <div>
            <b>{ErrorMessage}</b>
        </div>
    )
}

export default ErrorPage