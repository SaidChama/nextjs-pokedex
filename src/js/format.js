
function firstUpper(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

function removeSpecialChars(str) {
    return str.replace('-', ' ')
}

function pokemonNameFormat(name) {
    name = name.split('-')
    
    switch(name[0]) {
        case 'nidoran':
            return `${firstUpper(name[0])} ${firstUpper(name[1])}`
        case 'mime':
            return `${firstUpper(name[0])} ${firstUpper(name[1])}.`
        default: 
            return name[0]
    }
}

export { firstUpper, removeSpecialChars, pokemonNameFormat }