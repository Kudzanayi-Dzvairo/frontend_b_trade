import React from 'react'
import Select from 'react-select'



const Results = (props) => {
    const { book, handleClickAddTo } = props;

    const options = [
        {value: 'library', label: 'Library', onClick: (e) => handleClickAddTo('library', book)},
        {value: 'wishlist', label: 'Wishlist', onClick: (e) => handleClickAddTo('wishlist',book)},
        {value: 'trades', label: 'Trades', onClick: (e) => handleClickAddTo('trades',book)}
    ]

    return (
        <div className="column">
                <p>{book.title}</p>
                <p>{book.author}</p>
                <img src={book.image}/>
                <Select className="select" options={options}/>
        </div>
    )
}

export default Results

// const options = [
//         { key: 'Library', text: 'Library', value: 'library', onClick: (e) => props.handleClickAddTo('library', book)},
//         { key: 'Trades', text: 'Trades', value: 'trades', onClick: (e) => props.handleClickAddTo('trades', book) },
//         { key: 'Wishlist', text: 'Wishlist', value: 'wishlist', onClick: (e) => props.handleClickAddTo('wishlist', book) },
//     ];
