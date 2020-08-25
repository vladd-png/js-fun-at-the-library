function createLibrary(name, shelves) {
  var library = {
    name,
    shelves: { fiction: [],  nonFiction: [], fantasy: [],
      }
    }
  return library;
}

function addBook(library, book) {
  library.shelves[book.genre].push(book);
  return;
}

function checkoutBook(library, bookString) {
  if(library.shelves.fiction.length === 0) {
    return `Sorry, there are currently no copies of ${bookString} available at the Denver Public Library`
  } else if (library.shelves.fiction[0].title === bookString) {
    library.shelves.fiction.pop()
  } else if (library.shelves.nonFiction[0].title === bookString) {
    library.shelves.nonFiction.pop()
  } else if (library.shelves.fantasy[0].title === bookString) {
    library.shelves.fantasy.pop()
  }
  return `You have now checked out ${bookString} from the Denver Public Library`;
}

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
