export function selectBook(book) {
    // Selectbook is an action creator and must return an action. An object with a type property
    return {
        type: "BOOK_SELECTED",
        book: book
    }
}