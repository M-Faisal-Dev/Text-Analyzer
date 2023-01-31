import React from 'react';

const Alert = (props) => {
    const capitalize = (word) =>{
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return (
        props.alert && <>
         <div className={`alert alert-dark alert-dismissible fade show`} role="alert">
  {capitalize(props.alert.type)} : {props.alert.msg}
</div>

        </>
    );
}

export default Alert;
