import React from 'react';

const AlertMessage = (props) => {
    return (
        <div>
            <div className={`alert alert-${props.type}`}>
               {props.message}
            </div>
        </div>
    );
};

export default AlertMessage;