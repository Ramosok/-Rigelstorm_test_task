//libraries
import React from 'react';

const Search = ({searchTheCity}) => {

    return (
        <div>
            <p>Search</p>
            <input type="text" onInput={searchTheCity}/>
        </div>
    );
};

export default Search;