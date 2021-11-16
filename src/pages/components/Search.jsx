//libraries
import React from 'react';
// styles
import './weather.css';

const Search = ({searchTheCity}) => {

    return (
        <div className='search'>
            <form action="" onSubmit={searchTheCity}>
                <p>Search</p>
                <input name="search" type="text"/>
                <input name="submit" type="submit"/>
            </form>

        </div>
    );
};

export default Search;