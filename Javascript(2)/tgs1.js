//! Buat 10 method bawaan JavaScript (Built-in Functions)
//! Beserta contoh penggunaannya

// "Contoh 1" parseInt()
// Method ini berfungsi untuk mengonversi string menjadi bilangan bulat (integer).
// Jika sting dimulai dengan angka, maka angka tersebut akan dikonversi menjadi integer.

//! Contoh :

const num = parseInt("666");
console.log(num);

// "Contoh 2" parseFloat()
// Method ini Mengonversi string menjadi bilangan desimal (floating-point number).
// Jika string berisi angka desimal, maka angka tersebut akan dikonversi.

//! Contoh :

const number = parseFloat("999.99");
console.log(number);

// "Contoh 3" isNaN()
// Method ini Memeriksa apakah nilai yang diberikan adalah NaN (Not a Number). 
// Mengembalikan true jika nilai adalah NaN.

//! Contoh :

const result = isNaN("Hello Fazztrack");
console.log(result);

// "Contoh 4" typeof
// Mengembalikan tipe dari suatu variabel atau nilai.
// Ini bukan fungsi tetapi operator

//! Contoh :

const dataType = typeof 666;
console.log(dataType);

// "Contoh 5" Object.keys()
// Method ini Mengembalikan array yang berisi semua nama properti
// yang dapat di-enumerasi dari suatu objek.

//! Contoh :

const biodata = { name: "Zawil", age: 23 };
const keys = Object.keys(biodata);
console.log(keys);

// "Contoh 6" Object.values()
// Method ini megembalikan arrayyang berisi semua nilai properti
// yang dapat di-enumerasi dari suatu objek.

//! Contoh :

const person = { name: "Zawil", age: 23 };
const values = Object.values(person);
console.log(values);

// "Contoh 7" JSON.stingify()
// Method ini Mengonversi objek JavaScript menjadi string JSON.
// Berguna untuk menyimpan atau mentransmisikan data.

//! Contoh :
const datadiri = { name: "John", age: 30 };
const jsonString = JSON.stringify(datadiri);
console.log(jsonString);

// "Contoh 8" JSON.parse()
// Method ini Mengonversi string JSON menjadi objek JavaScript.

//! Contoh :

const jsonStrings = '{"name":"Zawil","age":23}';
const personaldata = JSON.parse(jsonStrings);
console.log(personaldata.name);

// "Contoh 9" Math.random()
// Method ini menghasilkan angka acak antara 0 (inklusif) dan 1 (ekslusif)

//! Contoh :

const randomNumber = Math.random();
console.log(randomNumber);

// "Contoh 10" Array.isArray()
// Method ini Memeriksa apakah suatu nilai adalah array.
// Mengembalikan true jika nilai tersebut adalah array.

//! Contoh :

const fruits = ["Apple", "Banana"];
const isArray = Array.isArray(fruits);
console.log(isArray);



