//! Membuat program searching nama yang dapat dibatasi jumlah Outputnya
//! yang Menerapkan callback function

const names =['Abigail','Alexandra','Alison',
'Amanda', 'Angela', 'Bella', 
'Carol', 'Caroline','Carolyn',
 'Deirdre', 'Diana', 'Elizabeth',
'Ella', 'Faith', 'Olivia', 'Penelope'
];  //Ini adalah array yang berisi daftar nama dalam bentuk string. Array names digunakan sebagai 
//basis data untuk mencari nama yang sesuai dengan kriteria yang akan ditentukan.

function searchName(searchTerm, limit, callback){ 
    const filteredNames = names.filter(name =>  
        name.toLowerCase().includes(searchTerm.toLowerCase()) // Filter nama berdasarkan term yang diberikan
      );

      const limitedNames = filteredNames.slice(0, limit); // Membatasi hasil sesuai limit yang diberikan

      callback(limitedNames); // Memanggil callback dengan hasil pencarian
    }

function displayResult(result) {
  console.log(result);
}
//Fungsi displayResult ini berfungsi sebagai callback yang akan menampilkan hasil pencarian ke layar. 
//Hasil pencarian diterima dalam parameter result dan dicetak ke console menggunakan console.log.

searchName("an", 3, displayResult)

//! PENJELASAN !!!

//- *Parameter searchTerm*: Merupakan kata kunci yang akan dicari dalam array names. Pencarian ini tidak peka terhadap huruf besar atau 
//kecil karena dalam filter, kita menggunakan .toLowerCase() untuk mengonversi string ke huruf kecil.

//- *Parameter limit*: Menentukan jumlah maksimal nama yang akan dihasilkan dari pencarian.
// Misalnya, jika limit adalah 3, maka hanya 3 nama pertama yang cocok yang akan ditampilkan.

//- *Parameter callback*: Merupakan fungsi yang akan dipanggil setelah pencarian selesai. 
//Hasil pencarian akan dikirimkan sebagai argumen ke fungsi callback ini.

//- *Filter names*: Kode names.filter(name => name.toLowerCase().includes(searchTerm.toLowerCase())) akan menyaring nama-nama dalam array names yang mengandung searchTerm. Fungsi includes() memeriksa apakah searchTerm ada dalam setiap nama.
//- *Batasi Hasil slice(0, limit)*: Setelah nama-nama yang sesuai ditemukan, mereka dibatasi jumlahnya sesuai dengan limit yang ditentukan menggunakan .slice(0, limit). Metode slice ini mengambil elemen dari indeks 0 hingga indeks limit-1.

//- *Callback*: Setelah nama-nama yang sesuai ditemukan dan dibatasi, hasil ini diteruskan ke fungsi callback, yang bertugas untuk menangani hasil tersebut, misalnya, menampilkannya ke layar.



