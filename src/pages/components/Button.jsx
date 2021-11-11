//libraries
import React from 'react';
// styles
import './weather.css';
const Button = ({changingTheCity,city,id,title} ) => {
    return (
        <button className="button__city" onClick={changingTheCity} name={city} id={id} >
            {title}
        </button>
    );
};

export default Button;