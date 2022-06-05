const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (names, callback) => {
  let hasil = [];

  for (let i = 0; i < names.length; i++) {
    if (callback(names)) {
      hasil[i] = (i + 1) + ". " + names[i];
    }
  }

  return hasil;
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (names) => {
  let tmp;
  for(let i = 0; i < names.length; i++){
    for(let j = i + 1; j < names.length; j++){
      if(names[i] > names[j]){
          tmp = names[i];
          names[i] = names[j];
          names[j] = tmp;
      }
    }
  }
  
  return names;
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (names) => {
  let tmp;
  for(let i = 0; i < names.length; i++){
    for(let j = i + 1; j < names.length; j++){
      if(names[i] < names[j]){
          tmp = names[i];
          names[i] = names[j];
          names[j] = tmp;
      }
    }
  }
  
  return names;
};

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
