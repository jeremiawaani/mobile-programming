//1.1 Melakukan Import Variabel
//import { name } from "./export.js";
console.log(name);

//Import objek
//import { universitas } from "./export.js";
console.log(universitas);

//import { sayHi } from "./export.js";
sayHi(universitas.nama);

//Import variabel, objek dan function sekaligus
import { name, universitas, sayHi } from "./export.js";
//1.2 Import As
//import {nama, university, sayHello} from "./export.js";

import bernyanyi from "./export.js";
bernyanyi();

//2.1 Asynchronous menggunakan set TimeOut
setTimeout(() => {
  console.log("Cuci Baju"); //proses asynchronous
}, 1000);
console.log("Menyapu");
console.log("Mengepel");

//1000ms = 1 second

//2.2 Penggunaan Promise
let newPromise = new Promise((resolve, reject) => {
  if (true) {
    //apa yang dilakukan jike promise fulffiled
    resolve("Berhasil");
  } else {
    //apa yang dilakukan jika promise rejected
    reject("Gagal");
  }
});

//2.3 Penggunaan Promise Then
newPromise.then((result) => {
  console.log(result);
});

//2.4 Penggunaan Promise (Asyn & Await)
//Penggunaan Asyn

async function tesAsyncAwait() {
  return "Fulfilled";
}

console.log(tesAsyncAwait());

//Penggunaan Await
async function tes() {
  await "Fulfilled";
}
console.log(tes());

//3. Class in JS
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

let myCar = new Car("Toyota", "2015");
console.log(myCar);
