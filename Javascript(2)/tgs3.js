//! Membuat fungsi yang memiliki parameter
//! Membuat Vadilasi pada fungsi tersebut
//! Mencari data yang ada didalam fungsi tersebut

function SeleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
    if (nilaiAwal >= nilaiAkhir) {
      console.log("Nilai akhir harus lebih besar dari nilai awal");
      return;
    }
  
    if (dataArray.length <= 5) {
      console.log("Jumlah angka dalam data array harus lebih dari 5");
      return;
    }
  
    const filteredData = dataArray.filter(value => value > nilaiAwal && value < nilaiAkhir);
  
    if (filteredData.length === 0) {
      console.log("Nilai tidak ditemukan");
      return;
    }

    filteredData.sort((a,b) => a-b);

    console.log(filteredData);
}
SeleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]); 

SeleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]); 

SeleksiNilai(4, 17, [2, 25, 4]); 

SeleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]); 