function removeSpecialChars(str) {
    return str.replace('-', ' ')
}


function firstUpper(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export { removeSpecialChars, firstUpper }