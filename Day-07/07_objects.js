// Activity - 1
const bookDetails = {
    title: "The Great Gatsby",
    author: "Sreephaneesha Kanugovi",
    year: 2024
}

console.log(bookDetails);

console.log(`Title: ${bookDetails.title} - Author: ${bookDetails.author}`);

console.log("-------------------------------------------------------------------------------------------");
console.log("-------------------------------------------------------------------------------------------");

// Activity - 2

bookDetails["returnDetails"] = function () {
    return `Title: ${this.title}   Author: ${this.author}`
}

console.log(bookDetails.returnDetails());


bookDetails["updateBookYear"] = function (newYear) {
    this.year = newYear;
}
bookDetails.updateBookYear(2025);

console.log(bookDetails);

console.log("-------------------------------------------------------------------------------------------");
console.log("-------------------------------------------------------------------------------------------");

// Activity -3
const library = {
    name : "Public library",
    books : [
        {title: "Book 1", author: "Author 1"},
        {title: "Book 2", author: "Author 2"},
        {title: "Book 3", author: "Author 3"}
    ],
    
}

console.log(library);

console.log(`Name of Library ${library.name} \t  ${library.books[0].title} -- ${library.books[1].title} -- ${library.books[2].title}`);

console.log("----------------------------------------------------------------------------------------------------");
console.log("----------------------------------------------------------------------------------------------------");

// Activity - 5

for (const key in bookDetails) {
    console.log(key,bookDetails[key]);
    
}

console.log();

Object.keys(bookDetails).forEach(key => {
    console.log(key);
});

console.log();

Object.values(bookDetails).forEach(value => {
    console.log(value);
});
