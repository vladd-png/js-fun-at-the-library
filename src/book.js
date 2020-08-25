function createTitle(title) {
  return `The ${title}`
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name,
    age,
    pronouns
  }
}

function saveReview(reviewString, reviewArray) {
  if(!reviewArray.includes(reviewString)) {
    reviewArray.push(reviewString)
  }
}

function calculatePageCount(title) {
  let count = 0
  let split = title.split('')
  for(var i = 0; i < split.length; i ++ ) {
    count += 20
  }
  return count
}

function writeBook(title, mainCharacter, genre) {
  let pageCount = calculatePageCount(title)
  return {
    title,
    mainCharacter,
    pageCount,
    genre
  }
}

function editBook(book) {
  book.pageCount = (book.pageCount * 3) / 4
}

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}
