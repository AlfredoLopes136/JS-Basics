const array = ["maça", "pera", "banana"]
// Get element by index
console.log(array.length)
console.log(array[2])

// Using push for add a new element 
array.push("melancia")
console.log(array)

// colocando um parametro dentro de um array
function useApp(apps, app) {
    apps.push(app)
    return apps

}

console.log(useApp(['maça', "pera", ], "eu sou"))

// Pegando o ultimo elemento de um array
function lastName(name) {
    return name[name.length - 1]

}

console.log(lastName(["eu", "sou", "legal"]))

//  exemplo
a = [1, 2, 3]
document.write(a.slice(-1)[0])

function lastN(nam) {
    return nam[nam.length - 1]
    
}

console.log(lastN(["alfredo", "eu"]))