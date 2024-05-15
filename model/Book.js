class Book {
  constructor(id, title, ISBN, publishedDate, author) {
    this.id = id;
    this.title = title;
    this.ISBN = ISBN;
    this.publishedDate = publishedDate;
    this.author = author;
  }
  toString() {
    return `Book(id=${this.id}, title=${this.title}, ISBN=${this.ISBN}, publishedDate=${this.publishedDate}, author=${this.author})`;
  }
}

module.exports = Book;
