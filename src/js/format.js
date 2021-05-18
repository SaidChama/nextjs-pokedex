
function firstUpper(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

function numberFormat(id) {
    if (id.toString().length == 1) {
        return id = '00' + id
    } else if (id.toString().length == 2) {
        return id = '0' + id
    } else {
        return id
    }
}

function removeSpecialChars(str) {
    return str.replace('-', ' ')
}

function pokemonNameFormat(name) {
    console.log(name)
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

export { firstUpper, removeSpecialChars, pokemonNameFormat, numberFormat }