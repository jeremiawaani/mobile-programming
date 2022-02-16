//Wahyu Agung

////1.1 ----- DESTRUKTURISASI ARRAY
// let hewan = ["singa", "harimau", "kerbau", "sapi"];

//cara simpan array di variabel
// let hewan1 = hewan[0];
// let hewan2 = hewan[1];
// let hewan3 = hewan[2];
// let hewan4 = hewan[3];

// console.log(hewan1);
// console.log(hewan2);
// console.log(hewan3);
// console.log(hewan4);

//cara destrukturisasi array
// let [hewan1, hewan2, hewan3, hewan4] = hewan;

// console.log(hewan1);
// console.log(hewan2);
// console.log(hewan3);
// console.log(hewan4);

//menukar nilai dari 2 variabel menggunakan cara tradisional

// let bil1 = 5;
// let bil2 = 10;

// let temp = bil1;
// bil1 = bil2;
// bil2 = temp;

// console.log(bil1);
// console.log(bil2);

//menukar nilai dari 2 variabel menggunakan cara destrukturisasi array
// [bil1, bil2] = [bil2, bil1];
// console.log(bil1);
// console.log(bil2);

//// 1.2 ----- DESTRUKTURISASI OBJECT
//cara biasa
// let kelas = {
//   nama: "Mobile Programming",
//   pararel: "A",
//   jam: 8,
//   isFinish: false,
// };

// let nama = kelas.nama;
// let pararel = kelas.pararel;
// let jam = kelas.jam;
// let isFinish = kelas.isFinish;

// console.log(nama);
// console.log(pararel);
// console.log(jam);
// console.log(isFinish);

//cara destruktur
// let { nama, pararel, jam, isFinish } = kelas;
// console.log(nama);
// console.log(pararel);
// console.log(jam);
// console.log(isFinish);

//penamaan variabel yang berbeda dengan nama property
// let { nama: name, pararel: parallel, jam: hour, isFinish: sudahSelesai } = kelas;
// console.log(name);
// console.log(parallel);
// console.log(hour);
// console.log(sudahSelesai);

////2. melewati satu elemen dalam array
// let [hewan1, hewan2, , hewan4] = hewan;

// console.log(hewan1);
// console.log(hewan2);
// console.log(hewan4);

////3. menggunakan default parameter
// let berlari = (jarak = "50 KM", durasi = "8 menit", kecepatan = "100Km/jam") => `Ando berlari sepanjang ${jarak} dengan durasi ${durasi} dengan kecepatan ${kecepatan}`;

// console.log(berlari("40 KM"));

////4. menggunakan rest parameter
// const bilangan = (...angka) => {
//   console.log(angka);
// };

// bilangan(1, 2, 3);

//Rest Parameter Sebagai Parameter Terakhir
// const bilangan = (angka1, angka2, ...angka) => {
//   console.log("Angka pertama ", angka1);
//   console.log("Angka kedua ", angka2);
//   console.log("Sisa angka ", angka);
//   console.log(angka[2]);
// };

// bilangan(1, 2, 3, 4, 5, 6);
