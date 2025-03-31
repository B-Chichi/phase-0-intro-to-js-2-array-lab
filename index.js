const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name)
}
destructivelyAppendCat("Ralph")

console.log(cats)


function destructivelyPrependCat(name) {
    cats.unshift(name)
}

destructivelyPrependCat("Bob")

console.log(cats)

function destructivelyRemoveLastCat(name) {
    cats.pop(name)
}

destructivelyRemoveLastCat()

console.log(cats)

function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
}

destructivelyRemoveFirstCat()

console.log(cats)

function appendCat(name) {
    return [...cats,name]
}

let newCats = appendCat("Broom")

console.log(newCats)
console.log(cats) 


function prependCat(name) {
    return[name,...cats]
}

let newerCats = prependCat("Arnold")

console.log(newerCats)


function removeLastCat() {
    return cats.slice(0,-1)
}
let newArray = removeLastCat()
console.log(newArray)


function removeFirstCat() {
    return cats.slice(1)
    
}

let newerArray = removeFirstCat()

console.log(newerArray)
 