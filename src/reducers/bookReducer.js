const initialState = {
    books: [],
    userBooks: [],
};

/*
* To finish
*
*
* * 1. Finish Add To Shelf
*  - refactor handleClickAddTo to redux async action and dispatch event and put user books in state
*
* 2. More Details
*  - create redux async action `showMoreDetails` that dispatches an event and puts the book to be viewed in store
*  - add new route `/search/books/:bookId` and new component
*
*  - style and do html for that component
*  - option to pass `handleClickAddTo` down as a prop for `AddTo` capability
*
* 3. Profile Page
*  - backend API endpoint to fetch all user books `/api/v1/user_books`
*  - create redux async action `getUserBooks` that dispatchs an event and puts the users books in state
*
*  - style and do html for `Shelf` and `Profile` components
*

*
* 4. SignUp
* - need to add a nav option that says `Sign Up` that links to `/signup`
*
* Wishlist
*
* *** Trades
* */


const bookReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'SEARCH_BOOKS':
            const payload = action.payload;
            const books = payload.items.map(item => ({
                title : item.volumeInfo.title,
                author: item.volumeInfo.authors[0],
                image: item.volumeInfo.imageLinks.smallThumbnail,
                description: item.volumeInfo.description,
                pageCount: item.volumeInfo.pageCount,
                id: item.id
            }));

            return { ...state, books };

        // Happens when user clciks `Add To`
        case 'ADD_TO_SHELF':
            console.log('added')
            return { ...state, userBooks: [...state.userBooks, action.payload]  }

        // Happens when user loads profile and sees shelves
        case 'LOAD_SHELF':

            return { ...state }
        default:
            return state
    }
}

export default bookReducer;