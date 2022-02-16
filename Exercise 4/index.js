//Gerald Wuysang
/*
 Nama: Erick
 Exercise #4
 Mobile Application Development
*/

//Nomor 1 Exercise (Promise)
// Part a
function helloWorld() {
  return (helloWorld = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World");
    }, 2000);
  }));
}

// Part b
async function messages() {
  const msg = await helloWorld();
  console.log(msg);
}

// Part c
messages();

//Nomor 2 Exercise(Fetch)
ambilDataUser2 = () => {
  // Part a
  new Promise(() => {
    fetch("https://reqres.in/api/users") // Part b
      .then((response) => response.json()) // Part c
      .then((users) => {
        console.log("\n\n\n2. FETCH");
        console.log(users.data);
      }); // Part d
  });
};

//Nomor 3 Exercise (Async Await)
let ambilDataUser_ = async () => {
  try {
    let response = await fetch("https://reqres.in/api/users");
    let json = await response.json();
    console.log(json.data);
  } catch (err) {
    console.log(err);
  }
};

ambilDataUser_();

// Nomor 4 Exercise (Class)
// Buatlah class bernama Orang
class Orang {
  // Part a
  constructor(nama, umur) {
    // Part b
    this.nama = nama;
    this.umur = umur;
  }

  bekerja() {
    // Part c
    console.log(`${this.nama} sedang bekerja seperti biasa`);
  }
}

user1 = new Orang("Erick", 24); // Part d
console.log(user1.bekerja());

//Nomor 5 Exercise (Inheritance)
class Orang5 {
  // Part a
  constructor(nama, umur) {
    this.nama = nama;
    this.umur = umur;
  }

  tidur() {
    // Part b1
    return `${this.nama} sedang tidur`;
  }

  makan() {
    // Part b2
    return `${this.nama} sedang makan`;
  }
}

class Pelajar extends Orang5 {
  // Part c
  constructor(nama, umur, namaSekolah) {
    // Part d
    super(nama, umur); // Part e
    this.namaSekolah; // Part f
    this.namaSekolah = namaSekolah;
  }

  belajar() {
    // Part h
    return `${this.nama} belajar di ${this.namaSekolah}`;
  }
}

const user = new Pelajar("John", 17, "Unklab"); // Part g
console.log(user.belajar());
