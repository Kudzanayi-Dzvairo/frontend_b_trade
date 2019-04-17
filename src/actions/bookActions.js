export const searchBooks = (books) => {
    return {
        type: "SEARCH_BOOKS",
        payload: books
    }

};

export const addBook = (book) => {
    return {
        type:"ADD_TO_SHELF",
        payload: book
    }
}

export const showBook = (book) => {
    return {
        type: "SHOW_BOOK",
        payload: book
    }
}



export const searchForBooks = (query) => {
    const GOOGLE_BOOKS_API_BASE_URL = `https://www.googleapis.com/books/v1/volumes?q=${query}`;

    return dispatch => {
        return fetch(GOOGLE_BOOKS_API_BASE_URL, {method:"GET"})
            .then(response =>  response.json())
            .then( books => {
                dispatch(searchBooks(books))
            })
    }
}

export const addBookToShelf = (book) => {
    const API_URL = `http://localhost:3000/api/v1`;

    return dispatch => {
        return  fetch(`${API_URL}/user_book`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(book)
        }, )
            .then(response => response.json())
            .then(data => {
                console.log(data)
                dispatch(addBook(data))
            })
    }


}