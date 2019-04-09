import React from 'react'

const Search = (props) => {

    return (
        <input className='search-bar' type='text' placeholder="Search Book" value={props.value} onChange={props.handleChange} onKeyPress={props.handleKeyPress} />
    )
}

export default Search