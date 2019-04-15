export const searchBooks = (books) => {
    return {
        type: "SEARCH_BOOKS",
        payload: books
    }

};

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