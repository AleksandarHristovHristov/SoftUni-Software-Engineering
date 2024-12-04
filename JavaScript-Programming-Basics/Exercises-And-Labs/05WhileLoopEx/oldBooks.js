function oldBooks(input) {
    let index = 0;
    const favouriteBook = input[index];
    index++;
    let book = "";
    let bookCounter = 0;
    let isFound = true;
    while (book !== "No More Books") {
      book = input[index];
      index++;
      if (book === favouriteBook) {
          break;
      } 
      if (book === "No More Books") {
         isFound = false;
         break; 
      }
      bookCounter++;
    }
    if (isFound) {
        console.log(`You checked ${bookCounter} books and found it.`)
    } else {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${bookCounter} books.`)
    }
}

oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])




