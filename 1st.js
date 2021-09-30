// definition of the array

   let numbers = [
    5,
    8,
    0,
    1,
    9,
    11,
    15,
    16
];

// print the original array

console.log("Original numbers list: ", numbers)

// sort in ASC order

for(let i = 0 ; i < numbers.length ; i++)
{
    for(let j = 0 ; j < (numbers.length -i - 1)  ; j++)
    {
        if(numbers[j] > numbers[j+1])
        {
            let temp = numbers[j];
            numbers[j] = numbers[j+1]
            numbers[j+1] = temp;
        }
    }
}

console.log("Numbers list After sorting: ", numbers)

// sort in DEASC order


for(let i = 0 ; i < numbers.length ; i++)
{
    for(let j = 0; j < numbers.length - i - 1 ; j++)
    {
        if(numbers[j] < numbers[j + 1])
        {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1]
            numbers[j + 1] = temp;
        }
    }
}

console.log("Numbers list After Desc sorting: ", numbers)

// reading data text file (data.txt) using JSON JS as a string
var fs = require('fs');
var text = fs.readFileSync("data.txt").toString('utf-8');

// convert the string to array

var textByLine = text.split(',');

// order the data readed from data.txt file in ASC order

let numbers2 = textByLine;

console.log("Original numbers list: ", numbers2)

for(let i = 0 ; i < numbers2.length ; i++)
{
    for(let j = 0 ; j < (numbers2.length -i - 1)  ; j++)
    {
        if(numbers2[j] > numbers2[j+1])
        {
            let temp = numbers2[j];
            numbers[j] = numbers2[j+1]
            numbers2[j+1] = temp;
        }
    }
}


// writeFile function


// Data which will write in a file.

let data= "the new sorting of data is :" +  numbers2.toString('utf-8');


// Write data in 'Output2.txt' .
fs.writeFile('output2.txt', data, (err) => {

// In case of a error throw err.
    if (err) throw err;
})