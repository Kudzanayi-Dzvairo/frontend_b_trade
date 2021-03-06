import React from 'react'

const Search = (props) => {

    return (
        <div>
            <div>
                <input 
                className='centered'
                type='text' 
                placeholder="Search Book" 
                value={props.value} 
                onChange={props.handleChange} 
                onKeyPress={props.handleKeyPress} 
                />
            </div>
        </div>
    )
}

export default Search