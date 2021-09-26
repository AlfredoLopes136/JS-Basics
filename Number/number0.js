let answer = 43
console.log(answer.toString())

function convert(number) {
    return number.toString()
}

console.log(convert(46))

let srt = "55"

console.log(Number.parseInt(srt, 10))
The

// function name is called "Number.parseInt()", Yes, including the Number.
// This is because there 's a global object called Number which contains a method called parseInt().
// Objeto numero que engloba e chama um método parseInt que espera dois parametros.


function nextAge(age) {
    const ageNext = Number.parseInt(age, 10)
    return ageNext + 1
}
console.log(getNextAge(11))
// Antes não estava dando porque eu estava somando duas strings
// Era uma questão realmente simples, bastava converter em número e depois somar

function setNumber(str) {
    return Number.parseInt(str, 10)

}

console.log(setNumber("Alfredo"))

function teste(nam) {
    let name = nam
    return name
}

let abc = "sam";
console.log(abc);