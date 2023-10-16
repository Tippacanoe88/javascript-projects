// Define your Book class here:
class Books {
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

class Manual extends Books {
    constructor(title, author, copyrightDate, isbn, pageCount, checkoutCount, discard) {
        super(title, author, copyrightDate, isbn, pageCount, checkoutCount, discard);
    }
    ageOut(currentYear) {
        if (currentYear-this.copyrightDate > 5) {
            this.discard = true;
        }
    }
}

class Novel extends Books {
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
let shipBuilding = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, 'No');

// Code exercises 4 & 5 here:
deadText.checkout(5);
deadText.checkoutDispose();