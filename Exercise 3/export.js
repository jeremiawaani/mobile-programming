//1.1 Melakukan Export Variabel
//export let name = "Agung";
let name = "Agung";

//Export pada objek
//export let universitas = {
let universitas = {
  nama: "Universitas Klabat",
  alamat: "Airmadidi, Jl Arnold Mononutu",
};

//export function sayHi(user) {
function sayHi(user) {
  console.log(`Hello, ${user}`);
}

//export variabel, objek, dan function sekaligus
export { name, universitas, sayHi };

//1.2 Export As
//export { name as nama, universitas as university, sayHi as sayHello };

//1.3 Export default
function bernyanyi() {
  console.log("lalalala");
}

export default bernyanyi;
