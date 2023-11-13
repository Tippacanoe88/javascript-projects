// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, isbn, pageCount, checkoutCount, discard) {
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn;
        this.pageCount = pageCount; 
        this.checkoutCount = checkoutCount;
        this.discard = discard; 
    }
    checkout(uses=1) {
        this.checkoutCount += uses;
    }
}   

class Manual extends Book {
    constructor(title, author, copyrightDate, isbn, pageCount, checkoutCount, discard) {
        super(title, author, copyrightDate, isbn, pageCount, checkoutCount, discard);
    }
    ageOut(currentYear) {
        if (currentYear-this.copyrightDate > 5) {
            this.discard = true;
        }
    }
}

class Novel extends Book {
    constructor(title, author, copyrightDate, isbn, pageCount, checkoutCount, discard) {
        super(title, author, copyrightDate, isbn, pageCount, checkoutCount, discard);
    }
    checkoutDispose(){
        if (this.checkoutCount > 100) {
            this.discard = true;
        }
    }
}

// Define your Manual and Novel classes here:


// Declare the objects for exercises 2 and 3 here:
const shipBuilding = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, 'No');

const prideAndPrejudice = new Novel(
    'Pride and Prejudice',
    'Jane Austen',
    1813,
    '1111111111111',
    432,
    32,
    'No'
);

// Code exercises 4 & 5 here:
prideAndPrejudice.checkout(32);
prideAndPrejudice.checkoutDispose(32);
prideAndPrejudice.ageOut(1813);
shipBuilding.checkout(1);
shipBuilding.checkoutDispose(1);
shipBuilding.ageOut(2013);