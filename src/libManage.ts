interface Book {
    title: string,
    author: string,
    isbn: string,
    isAvailable: boolean
}
class Library {
    books: Array<Book>
    constructor() {
        this.books = []
    }
    addBook(book: Book) {
    this.books.push(book)
    console.log('Book Added')
    }
    listBooks() {
        console.table(this.books)
    }
    borrowBook(isbn: string) {
        for (let book of this.books) {
            if (book.isbn == isbn) {
                if (book.isAvailable) {
                    book.isAvailable = false
                    console.log(`Book: ${book.title} is borrowed`)
                }
                else {
                    console.log('Book is already borrowed')
                }
                break
            }
        }
    }
    returnBook(isbn:string){
        for (let book of this.books) {
            if (book.isbn == isbn) {
                console.log(`Book: ${book.title} is returned`)
                book.isAvailable = true
                break
            }
        }

    }
}

let library = new Library()

library.addBook({
    title: "Book1",
    author: "Hanzala",
    isbn: "1111000",
    isAvailable: true
})


library.addBook({
    title: "Book2",
    author: "Hammad",
    isbn: "11220",
    isAvailable: true
})

library.addBook({
    title: "Book3",
    author: "Author Unknown",
    isbn: "11000000",
    isAvailable: false
})

library.listBooks()
library.borrowBook("11000000")
library.borrowBook("11220")
library.returnBook("11000000")
library.borrowBook("11000000")
