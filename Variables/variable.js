//Is a great idea to use the plural name for "array" and the singular for the item in the array.

// grades => item is a grade
// people => item is a person 

const grades = [{
    pessoa: 'fisica',
    pessoa: ' juridica'
}, {
    sexo: 'masculino',
    sexo: 'feminino'
}, {
    idade: 27
}]

function logUser(grade) {
    grade.forEach(function (grad) {
        console.log(grad)
    })
    return true;
})

console.log(grades)