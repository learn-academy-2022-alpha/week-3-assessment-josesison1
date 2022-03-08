// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

describe("fibonacciSeq", () => {
  it("returns an array that length containing the numbers of the Fibonacci sequence", () => {
    // Example input: 6
    // Expected output: [1, 1, 2, 3, 5, 8]

    // Example input: 10
    // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(fibonacciSeq(6)).toEqual([1, 1, 2, 3, 5, 8]),
    expect(fibonacciSeq(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

// b) Create the function that makes the test pass.

//************************* PSEUDO CODE *************************//
//understand the concept of fibbonacci sequence
//create a function
//must take in a number as a parameter
//create a new variable that holds an array and give it two values of 1 and 1
//use a for loop for iteration, start the loop at value 1 and loop through
//push the first value of the array into the new variable created
//and add the next value, so on and so forth
//return the new variable that contains all the values
//***************************************************************//

const fibonacciSeq = (num) => {
  let newArr = [1, 1]
  for (let i = 1; i < num - 1; i++) {
    newArr.push(newArr[i] + newArr[i-1])
  }
  return newArr
}






// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

  describe("oddSort", () => {
    it("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
      const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
      // Expected output: [-9, 7, 9, 199]
      const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
      // Expected output: [-823, 7, 23]
      expect(oddSort(fullArr1)).toEqual([-9, 7, 9, 199]),
      expect(oddSort(fullArr2)).toEqual([-823, 7, 23])
    })
  })

// b) Create the function that makes the test pass.

//************************* PSEUDO CODE *************************//
// create a function
// must take in an array as a parameter
// create a new variable
// iterate through the array and filter by using higher order function .filter method
// return the data that's only numbers by using "typeof" method and setting it strictly equals to the value type of "number"
// use the logical operator of "&&" to strictly return numbers that are divisible by 2 but dont have the remainder of 0, which are odd numbers
// return the new variable that contains these values and use the .sort() method and sort the values from least to greatest
//***************************************************************//

  const oddSort = (array) => {
    let newNum = array.filter(value => {
     return typeof value === "number" && value % 2 !== 0
    })
    return newNum.sort((a,b) => a-b)
  }






// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("sumArr", () => {
  it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () => {
    const numbersToAdd1 = [2, 4, 45, 9]
    // Excpected output: [2, 6, 51, 60]
    const numbersToAdd2 = [0, 7, -8, 12]
    // Expected output: [0, 7, -1, 11]
    const numbersToAdd3 = []
    // Expected output: []
    expect(sumArr(numbersToAdd1)).toEqual([2, 6, 51, 60])
    expect(sumArr(numbersToAdd2)).toEqual([0, 7, -1, 11])
    expect(sumArr(numbersToAdd3)).toEqual([])
  })
})

// b) Create the function that makes the test pass.

//************************* PSEUDO CODE *************************//
// create a function
// must take in an array as a parameter
// create a new variable and set it to 0
// iterate through the array and by using .map() higher order function since it will be return the same amount of values
// set the new variable created to add to every index of the array and return the sum
// return the new variable created that contains the new added values
//***************************************************************//

const sumArr = (array) => {
  let newSum = 0
  return array.map(value => {
    return newSum += value
  })
  return newSum
}
