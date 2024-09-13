# JavaScript Built-in Functions, Name Search Program, and Selection of program values

## Task Overview

This project consists of two main tasks:

1. **Explain and Demonstrate 10 Built-in JavaScript Methods**
2. **Create a Name Search Program with a Callback Function**
3. **Selection of program values**

---

## Task 1: 10 Built-in JavaScript Methods

In this task, you will list and explain 10 common JavaScript methods. For each method, provide a clear explanation along with an example of how it is used. The 10 methods include:

- `parseInt()`
- `parseFloat()`
- `isNaN()`
- `typeof()`
- `Object.keys()`
- `Object.values()`
- `JSON.stingify()`
- `JSON.parse()`
- `Math.random()`
- `Array.isArray()`

### Example for `Object.keys()`:

```javascript
const biodata = { name: "Zawil", age: 23 };
const keys = Object.keys(biodata);
console.log(keys); // Output: [ 'name', 'age' ]
```
## Task 2: Name Search Program with a Callback Function
Problem Description
You are provided with an array of names, and you need to create a program that searches for names containing a specific substring and limits the number of results returned. The search should be case-insensitive, and the program should use a callback function to display the results.

### Provided Data:
```const names = [
  'Abigail', 'Alexandra', 'Alison',
  'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline',
  'Carolyn', 'Deirdre', 'Diana', 'Elizabeth',
  'Ella', 'Faith', 'Olivia', 'Penelope'
];
```
### Example call:
```
searchName("an", 3, displayResult);
```
### Expected Output:
```
["Alexandra", "Amanda", "Angela"]
```
## Explanation:
searchName: The main function that accepts three parameters:

searchTerm: The term to search for within the names.
limit: The maximum number of results to return.
callback: The function to be called with the search results.
Filtering and Limiting:

The names are filtered using the .filter() method, which checks if the name contains the search term (case-insensitive using .toLowerCase()).
The results are then limited using the .slice() method to ensure only the specified number of results are returned.
Callback: Once the filtered results are ready, the callback function is invoked, and the results are passed to it. In this case, the callback is displayResult, which simply logs the result to the console.

## Task 3 : selection of program values

This project includes a JavaScript function named `SeleksiNilai` that filters an array of numbers based on a given range. It validates the input parameters and ensures that the data meets certain conditions before performing the filtering process.

### Function Explanation

The `SeleksiNilai` function performs the following steps:

### Parameters:
1. **`nilaiAwal`** (number): The starting value of the range.
2. **`nilaiAkhir`** (number): The ending value of the range.
3. **`dataArray`** (array): An array of numbers to be filtered.

### Function Flow:
1. **Validation of `nilaiAwal` and `nilaiAkhir`:**
   - The function checks if `nilaiAkhir` is greater than `nilaiAwal`. If not, it outputs the message:  
     `"Nilai akhir harus lebih besar dari nilai awal"`  
     and stops execution.

2. **Validation of the Length of `dataArray`:**
   - The function checks if the length of `dataArray` is greater than 5. If the array has 5 or fewer elements, it outputs:  
     `"Jumlah angka dalam data array harus lebih dari 5"`  
     and stops execution.

3. **Filtering the Array:**
   - It filters `dataArray` to only include values that are greater than `nilaiAwal` and less than `nilaiAkhir`.

4. **Handling No Results:**
   - If no numbers fall within the specified range, the function outputs:  
     `"Nilai tidak ditemukan"`  
     and stops execution.

5. **Sorting the Filtered Results:**
   - If the filter returns valid results, the function sorts the numbers in ascending order and logs them to the console.
  
## Detailed Explanation
Validation of nilaiAwal and nilaiAkhir:
The first validation ensures that nilaiAkhir is greater than nilaiAwal. If the condition is not met, the function stops and outputs an error message. This check ensures the range is valid.

Validation of Array Length:
The second validation ensures that the dataArray has more than 5 elements. If not, the function stops and provides an error message. This requirement is necessary for processing arrays with a significant number of elements.

Filtering Process:
The function then filters dataArray, returning only the values that are greater than nilaiAwal and less than nilaiAkhir. This step ensures only relevant data within the specified range is considered.

Handling Empty Results:
If no values in dataArray fall between nilaiAwal and nilaiAkhir, the function logs a "Nilai tidak ditemukan" message, indicating no matches were found.

Sorting and Output:
Once filtered, the matching numbers are sorted in ascending order, and the sorted array is logged to the console.

## How to Run the Program
1. Clone the repository or download the source files.
2. Open the index.js file.
3. Run the JavaScript code in your preferred environment (browser or Node.js).




