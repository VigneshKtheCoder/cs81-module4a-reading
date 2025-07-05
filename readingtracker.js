// Weekly reading log
const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];

// Adds a new reading entry to the log

/*Comments:
- This function adds a new reading entry to the reading log
- Kind of data stored and accessed: 
day (string), book (string), minutes (number) - input

Output - Updates reading log array by adding a new entry
 */
function addReadBook(day, book, minutes) {
  const newEntry = { day, book, minutes }; //This line of code is important because it creates a new log object
  readingLog.push(newEntry); //This line of code is important because it basically adds the new object to the reading log
}

// Returns total minutes spent reading all week

/*Comments:
- This function calculates thre total reading minutes in the week
- Kind of data stored and accessed: 
log (array of reading entries)  - input
sum of all entries (number) - output
 */
function totalReadingMinutes(log) {
  let total = 0; //Defining total
  for (let entry of log) { //A lop through each reading log entry
    total += entry.minutes; //Add the minutes read to the total
  }
  return total; //Returns the total number after minutes read
}

// Returns the book read most frequently

/*Comments:
- This function finds which book was read the most during the week
- Kind of data stored and accessed: 
log (array of reading entries) - Input
title of most frequent book (string) - Output
 */
function mostReadBook(log) { 
  const bookCounts = {}; //Defining iterations of each books
  for (let entry of log) { //Loop to all entries
    if (!bookCounts[entry.book]) { //If statement if the book is not yet counted
      bookCounts[entry.book] = 1;
    } else {
      bookCounts[entry.book]++; //Begin count to 1
    }
  }

  let maxBook = null; //Variable for the most readbook so far in this log
  let maxCount = 0; //Highets count of the book being found
  for (let book in bookCounts) { //for loop through book counts
    if (bookCounts[book] > maxCount) { //If statement for if the book has a higher count
      maxBook = book; //Updating maxbook variable to current book
      maxCount = bookCounts[book]; //Final update
    }
  }
  return maxBook;
}

// Prints a summary of minutes read per day

/*Comments:
- This function prints out each day's reading activity in a formatted way
- Kind of data stored and accessed: 
log (arrayof reading entries) - Input

Output- Prints one line per day to console
 */
function printDailySummary(log) {
  for (let entry of log) { //Once again, looping through entries
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}

// Example usage
addReadBook("Saturday", "Dune", 50);
printDailySummary(readingLog);
console.log("Total minutes read:", totalReadingMinutes(readingLog));
console.log("Most read book:", mostReadBook(readingLog));

/*
Suggested Improvement:
I suggest changing the readingLog variable from a global one to an argument passed into functions since this would make the funtions more reusable. 
- This is a good suggestion because it structures the code better and is reusable. 
*/


//TEST CASE ONLY!!!
addReadBook("Friday", "Harry Potter", 75);
console.log("Updated total minutes:", totalReadingMinutes(readingLog));