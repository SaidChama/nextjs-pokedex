
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
            return `${name[0]} ${name[1]}`
        case 'mime':
            return `${name[0]} ${name[1]}.`
        default: 
            return name[0]
    }
}

export { firstUpper, removeSpecialChars, pokemonNameFormat }