//  1. Dodaj poprawnie plik 'script.js' do pliku index.html. Wyświetl w konsoli: 'Poprawnie dodany skrypt';

// 2. Napisz funkcję, która przyjmuje 2 argumenty i zwraca większy z nich.
// Input: 2, 5 Output: 5
// Input: 2, -5 Output: 2
// Input: 'aaa', -5 Output: 'argumenty to nie liczby`

function maxNumber(a, b) {
    if (typeof(a) === "number" && typeof(b) === "number") {
        return Math.max(a, b)
    } else {
        return "argumenty to nie liczby"
    }


}

console.log(maxNumber(2, 5))
console.log(maxNumber(2, -5))
console.log(maxNumber("aaa", -5))
console.log(maxNumber(2, "bb"))

// 3. Napisz funkcję, która zwraca stringa z dużą pierwszą literę.
// Input: uppercaseFirstLetter('kamil') Output: 'Kamil'
// Input: uppercaseFirstLetter(12) Output: 'to nie jest string'
function uppercaseFirstLetter(name) {

    if (typeof(name) === "string") {
        let mainWord = name.toLocaleLowerCase();
        let firstBigLetter = name[0].toUpperCase()
        let wholeWord = firstBigLetter + mainWord.slice(1)
        return wholeWord;

    } else {
        return "It's not a string";
    }

}
console.log(uppercaseFirstLetter("kamil"))
console.log(uppercaseFirstLetter(12))

// 4. Wyświetl wartość w konsoli z obiektu labyrinth:
//     a)
// 'Garfield'
// b)
// 'elephant'
// c)
// 'flying'

// const labirynth = {
//     animals: [
//         { name: 'Pluto', species: 'dog' },
//         { name: 'Garfield', species: 'cat' },
//         { name: 'Simba', species: 'lion' },
//         { name: 'Maniek', species: 'elephant' }
//     ],
//     nonAnimals: [
//         { name: 'R2D2', species: 'robot', skills: ['fixing', 'flying'] },
//         { name: 'C3PO', species: 'robot', skills: ['talking'] }
//     ],
//     showAnimals: function() { console.log(this.animals) },
//     showNonAnimals: function() { console.log(this.nonAnimals) }
// }

console.log(labirynth.animals[1].name);
console.log(labirynth.animals[3].species);
console.log(labirynth.nonAnimals[0].skills[1]);
// 5. Napisz pętle, która iteruje od 1 do 50 i na każdej wielokrotności 3 wyświetl Fizz, na każdej wielokrotności 5 Buzz,
//     a na wielokrotności 3 i 5 FizzBuzz.

for (i = 1; i <= 50; i++) {
    if (i % 15 === 0) {
        console.log("FizzBuzz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    }

}

// 6. Napisz pętle wyświetlającą nazwę pizzy i jej składniki w nawiasie oraz po myślniku cenę.
// Input: [
//     { name: 'Margarita', price: 15, ingredients: ['ser', 'sos', 'oregano'] },
//     { name: 'Roma', price: 18, ingredients: ['ser', 'sos', 'szynka', 'pieczarki'] },
//     { name: 'Salami', price: 18, ingredients: ['ser', 'sos', 'salami'] }
// ]
// Output:
//     'Margarita (ser, sos, oregano) - 15
// Roma(ser, sos, szynka, pieczarki) - 18
// Salami(ser, sos, salami) - 18 '
let menuPizza = [
    { name: 'Margarita', price: 15, ingredients: ['ser', 'sos', 'oregano'] },
    { name: 'Roma', price: 18, ingredients: ['ser', 'sos', 'szynka', 'pieczarki'] },
    { name: 'Salami', price: 18, ingredients: ['ser', 'sos', 'salami'] }
]

menuPizza.forEach(pizza => console.log(pizza.name + ` (${pizza.ingredients}) ` + `- ${pizza.price}`));

// for (i = 0; i < menuPizza.length; i++) {
//     let pizzaName = menuPizza[i].name;
//     let pizzaIngredients = menuPizza[i].ingredients;
//     let piizaPrice = menuPizza[i].price;
//     let pizza = pizzaName + ` (${pizzaIngredients}) ` + `- ${piizaPrice}`;
//     console.log(pizza)
// }


// 7 * .Napisz funkcję, która w przypadku kiedy jako argument otrzyma string, zwróci liczbę z tego stringa.
// W przeciwnym przypadku niech zwróci string: 'to nie string'.
// Input: 'Kartagina'
// Output: 4
// Input: 'Mezopotamia'
// Output: 6
// Input: 'Wielki Zderzacz Hadronów'
// Output: 8
// Input: {}
// Output: 'to nie string'
// Input: 345 Output: 'to nie string'
// Input: undefined Output: 'to nie string'

function countVowel(string) {
    if (typeof(string) === "string") {
        let count = string.match(/[aeiouąęó]/g).length;
        return count;
    } else {
        return "to nie string"
    }
}
console.log(countVowel('Kartagina'));
console.log(countVowel('Mezopotamia'));
console.log(countVowel('Wielki Zderzacz Hadronów'));
console.log(countVowel({}));
console.log(countVowel(345));
console.log(countVowel(undefined));