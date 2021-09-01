//1. Duotas masyvas, console.log atspausdinti masyvo ilgį
const mas1 = [12, 5, 9, 7, 5, 4]
console.log(mas1.length);
console.log("----------------");

//2. Duotas masyvas, masyvą iteruoti ciklu for ir console.log kiekvienoje
// iteracijoje atspausdinti indeksą ir jo reikšmę;
const mas2 = [13, '785', 92, 'labas', 522, 6984];
for (let i=0; i < mas2.length; i++) {
    console.log(`${mas2.indexOf(mas2[i])} : ${mas2[i]}`);
}
console.log("----------------");
//3. Duotas masyvas, masyvą iteruoti ciklu for ir console.log kiekvienoje
// iteracijoje atspausdinti indeksą ir jo reikšmę, jeigu ta reikšmė yra lyginė (porinė)
const mas3 = [889, 52, 698, 752, 9333, 7];
for (let i =0; i< mas3.length; i++){
    if ( mas3[i] % 2 == 0) {
        console.log(`${mas3.indexOf(mas3[i])} : ${mas3[i]}`);
    }
}
console.log("----------------");

//4. Duotas masyvas, masyvą iteruoti ciklu forEach ir console.log kiekvienoje
// iteracijoje atspausdinti indeksą ir jo reikšmę, jeigu ta reikšmė prasideda raide A arba a
const mas4 = ['Agurkas', 'Bananas', 'arbūzas', 'Bebras', 'Voverė', 'Ąžuolas', 'Mažas triušis'];
mas4.forEach(element => (element.startsWith('a') || element.startsWith('A')) ?
 console.log(`${mas4.indexOf(element)} : ${element}`) : '')


// console.log(str.startsWith('Быть'));        // true
// array1.forEach(element => console.log(element));
console.log("----------------");


//5. Duotas stringas, suskaičiuoti kiek stringe yra raidžių z
const str1 = 'Storas zebras, bėga nuo zuulu genties nedžiotojų.';
let ilgis = str1.length
let a = str1.split("z").join("")
console.log(ilgis - a.length);
console.log("----------------");
//6. Duotas Setas, į kurį reikia pridėti reikšmes (stringus) 'Labas' ir 'Ate' ir console.log
// atspausdinti Seto ilgį
const set1 = new Set(['Labas', 'Vakaras', 'Rytas', 'Valio'] ) ;
set1.add("Labas")
set1.add("Ate")
console.log(set1.size);
console.log("----------------");


//7. Suprototaipinti standartinį String tipo objektą, pridedant metodą lastCharIs(), 
// kuris grąžintų paskutinį stringo simbolį. Pademonstruoti veikimą su stringu 'Ku Ku';
const str2 = 'Ku ku';
String.prototype.lastCharIs = function() {
    let a = str2.split(""); 
    return a[a.length-1]
};
console.log(str2.lastCharIs())
console.log("----------------");
// console.log(str2.lastCharIs()) po prototaipinimo eilutė turi veikti

//8. Duotas objektas, kurį reikia iteruoti, kiekvienoje iteracijoje išvedant savybę
// ir jos reikšmę
const obj1 = { labas: 'vakaras', laba: 'diena', labs: 'ryts' };
for (const [key, value] of Object.entries(obj1)) {
    console.log(`${key}: ${value}`);
  }
  console.log("----------------");
//9. Sukurti klasę Grybas. Klasėje sukurti savybė tipas. Iš klasės sukurti
// 3 Grybo objektus, savybei tipas priskiriant "Baravykas", "Ūmedė" ir "Lepšis"
class Grybas {
    constructor(tipas) {
        this.tipas = tipas
    }
}

let baravykas = new Grybas("Baravykas")
let umede = new Grybas("Umede")
let lepsis = new Grybas("Lepsis")

console.log(baravykas, umede, lepsis);