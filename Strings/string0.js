// Estrings = operador "+="  concatena, mas se for numeros ele vai somar //
let name1 = 2
let name2 = 2

console.log(name1 += name2)


function concatenate(name01, name02) {
    return name01 += name02

}

console.log(concatenate("O", " A"))

// "" aspas simples e aspas duplas não suportam quebra de linha tal como ``


const text = `Using the backtick character
you can define a string that
spans multiple lines.`;

console.log(`Helllo John you ${text}`)

const Uname = "John";

console.log(`Welcome ${Uname}.
You have ${2 * 6} new notifications!`);

// Arrumando palavras
function capitalize(word) {
    return word[0].toUpperCase() + word.substring(1).toLowerCase(1)

}
console.log(capitalize("alfredolopes"))
console.log(capitalize("olamundo"))
console.log(capitalize("adjKLMbo"))

function asdf(a) {
    // Primeiro amentamos a primeira letra, subtraimos as restantes e diminuimos
    return a[0].toLowerCase(1) + a.substring(1).toUpperCase(1)

}

console.log(asdf("Alfredolopes"))

function sub(name) {
    return name.substring(0, )
}

console.log("Alfredo")


// Do not use the .substr method as it's deprecated and works differently. 
// Always use the .substring method.
// the indexEnd argument is optional which means you can leave it out.
// In cases that L have only the final "of the" argument
const language = "JavaScript";
// console.log(language.substr(-1,1)); //"ava"
// Assim podemos ver quantas letras tem um texto
console.log(language.lastIndexOf("t"))