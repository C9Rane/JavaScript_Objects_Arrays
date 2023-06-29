console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];


function arraySum(numbers){
    let sum = 0;
    numbers.forEach(number => {
        sum += number;
    });
    return(sum);
}

console.log(arraySum(numbers));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

const book = {
    title: "The Legend of The Northern Blade",
    pages: 450,
    readCount: 2,
    info(){
        return `${this.title}, ${this.pages}, ${this.readCount}`;
    }
};

const book2 = {};
book2.title = "Harry Potter";
book2.pages = 750;
book2.readCount = 6;
book2.info = function(){
    return `${this.title}, ${this.pages}, ${this.readCount}`;
}

console.log(book.info());
console.log(book2.info());

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

//create variables+arrays
let sentence = "The quick brown fox jumps over the lazy dog";
const array = sentence.split(" ");
const newArray = [];

//array loop, take string => split words into data, reverse data, push data to empty array
array.forEach(word => {
    const characters = word.split("");
    characters.reverse();
    newArray.push(characters.join(""));
});

// create new variable that puts spaces between reversed words in newArray
let newSentence = newArray.join(" ");

// do the thing
console.log(newSentence);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";
//parse into an array of rows V then rows into headers
let parse = csvData.split("\n");
let headers = parse[0].split(",");
const dataTable = [];

for (i = 1; i < parse.length; i++){
    const rowArray = parse[i].split(",");
    const rowObject = {
        name: rowArray[0],
        age: rowArray[1],        
    };
    dataTable.push(rowObject);
};

console.log(dataTable);

