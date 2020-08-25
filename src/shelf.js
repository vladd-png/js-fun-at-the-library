function shelfBook(book, shelf) {
  if (book.genre === "sciFi" && shelf.length !== 3){
    shelf.unshift(book);
  }
  return shelf;
}

function unshelfBook(title, shelf){
  shelf.forEach(book => {
    if(book.title.includes(title)) {
      shelf.splice(1, 1)
    }
  })
}

function listTitles(shelf) {
  let titles = ''
  shelf.forEach(book => {
    titles += book.title + ', '
  });
  let output = titles.slice(0, -2)
  return output
}

function searchShelf(shelf, title) {
  let value = false
  shelf.forEach(book => {
    if(book.title === title) {
      value = true
    }
  });
  return value
}

module.exports = {


  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
