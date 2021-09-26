// // if
// const grade = 3;

// if (grade >= 10) {
//     console.log("Passing grade");
// } else {
//     console.log("Failing grade");
// }


// // else if
// const grade = 10;

// if (grade > 10) {
//     console.log("Passing grade");
// } else if (grade === 10) {
//     console.log("Passing on the limit");
// } else {
//     console.log("Failing grade");
// }

// function NextAge(age) {
//     if (age === "") {
//         return 0
//     }
//     return Number.parseInt(age, 10)

// 
//Text ellipsis Project III
function getDescription(text) {
    if (text.length > 10) {
        return text.substring(0, 10) + "...";
    } else {
        return text
    }
}
console.log(getDescription("alfredo lopes"))
// This is redundant because grade >= 10 on its own, evaluates to true or false depending on the grade.
//This means you don 't need to wrap it with an if/else statement.

function pass(grade) {
    return grade >= 10
}

console.log(pass(13))

// Get division remainder by 2
function remainder(number) {
    if (number % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }

}

console.log(remainder(4))




function name(fn,a,b) {
return fn(a,b)
}

const subtrair = (w,y) => w - y

console.log(name(subtrair(2,3:)))
