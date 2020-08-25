var checkoutBook = require('../src/library.js').checkoutBook;
var searchShelf = require('../src/shelf.js').searchShelf;

class Librarian {
  constructor(name, library) {
    this.name = name,
    this.library = library
  }
  greetPatron(name, morning) {
    if(morning) {
      return `Good morning, ${name}!`
    } else {
      return `Hello, ${name}!`
    }
  }
  findBook(title) {
    let value = searchShelf(this.library.shelves.fantasy, title)
    if(value) {
      this.library.shelves.fantasy.pop()
      return `Yes, we have ${title}`
    } else {
      return `Sorry, we do not have ${title}`
    }
  }
  calculateLateFee(n) {
    return Math.ceil(n * 0.25)
  }

}

module.exports = Librarian;
