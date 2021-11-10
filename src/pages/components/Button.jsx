//libraries
import React from 'react';
// styles

const Button = ({changingTheCity,city,id,title} ) => {
    return (
        <button onClick={changingTheCity} name={city} id={id} >
            {title}
        </button>
    );
};

export default Button;