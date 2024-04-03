import React from 'react';

const LoginButton = ({onclick, children}) => {
    return(
        <button className="btn btn-primary" onClick={onclick} >
            {children}
            </button>
    );
};

export default LoginButton;