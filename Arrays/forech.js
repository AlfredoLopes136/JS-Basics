// const grades = [10, 9, 7]
// grades.forEach(function (grade) {
//     console.log(grades)
// });

// grades.forEach(function (grade) {
//     // do something with individual grade
//     console.log(grade);
// });

// console.log(grade)

// const name1 = ["a", "b", "c"]
// name1.forEach(element => console.log(element))

// function exec(fn, a, b) {
//     return fn(a, b)
// }

// const sub = (w, z) => w - z

// const r = exec(sub, 40, 40)
// console.log(r)

// function test2(fn, c, d) {
//     return fn(c, d)
// }

// const somar = (e, f) => e + f

// console.log(test2(somar, 2, 3))

const nome = "alfredo"

console.log(nome)

function loopThroughElements(elements) {
    elements.forEach(function (element) {
        console.log(element);
    });
}

// Sample usage - do not modify
loopThroughElements(["Sam", "Charlie", "Alex"]);

function nameLoop(elemento) {
    elemento.forEach(function (elemento) {
        console.log(elemento);
    })
}

nameLoop(["oi", "meu nome", "é", "alfredo"]);


const abc = [1, 2, 3, 4, 5, 6]

abc.forEach(function (elemento, indice) {
    console.log(elemento, indice)
})

console.log(abc)

const names = ["eu", "gosto", "de", "maça"]

names.forEach(function (primeiro, segundo) {
    console.log(primeiro, segundo)
})

console.log(names)

let carros = [{
        fabricante: 'Volkswagen',
        modelo: 'Brasilia',
        combustivel: 'Alcool'
    },
    {
        fabricante: 'Chevrolet',
        modelo: 'Chevete',
        combustivel: 'Gasolina'
    },
    {
        fabricante: 'Audi',
        modelo: 'A3',
        combustivel: 'Flex'
    }
]
for (let i = 0; i < carros.length; i++) {
    console.log(carros[i].combustivel)
    // }

    // carros.forEach(function(carros){
    //     console.log(carros.modelo)
    // })

    // function logUser(log) {
    //     log.forEach(function(log) {
    //         console.log(log)
    //     })
    // }

    // logUser(["maça ","pera","beterraba"])
// Somando items de um array
    function sumGrades(grades) {
        let sum = 0
        grades.forEach(function (grade) {
            sum = sum + grade
        })
        return sum
    }
}

console.log(sumGrades([12, 10, 13, 19]));


const numPar = [2,4,6,9,10]
function verificaPar(number) {
    if (number % 2 === 0){
        console.log(number + number)
    }    
}
numPar.forEach(verificaPar)
