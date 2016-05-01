export function selectBook(book) {
  //selectBook is an ActionCreator. It must return an action
  //An object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}