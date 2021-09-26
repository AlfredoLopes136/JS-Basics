export function getNumberOfChars(name) {
    // number of characters in: name
    return name.length

}

export function getFirstChar(name) {
    // first character of: name
    return name.substring(0, 1)

}

export function getLastChar(name) {
    // last character of: name
    return name.substr(-1, 1)
}

export function getLower(name) {
    // name all in lower case (example: "ABC" becomes "abc")
    return name.toLowerCase(0)

}

export function getUpper(name) {
    // name all in upper case (example: "abc" becomes "ABC")
    return name.toUpperCase(0)

}

export function getCapitalized(name) {
    // capitalized version of name (example: "alEX" becomes "Alex")
    return name[0].toUpperCase(1) + name.substring(1).toLowerCase()
    //Square brackets [index] are used to access a specific index from a string
}