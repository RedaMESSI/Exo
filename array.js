// let nourriture = ['Chocolat', 'Abricot']

// let newElementForNourriture = nourriture.unshift('Strawberry')

// let newElementForNourriture = nourriture.slice()


// console.log(newElementForNourriture)

// nourriture.forEach(function(item, index, array) {
//     console.log(item, index, array)
// })



// let first = nourriture[0]

// const array = [1, 2, 3, 4, 5]

// console.log(array.fill(0, 4))

// console.log(array.fill(99))

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

// const result = words.filter(word => word.length > 6)

// console.log(result)

// const array = [5, 12, 8, 130, 129, 131, 44]

// const found = (element) => element > 13

// console.log(array.findIndex(found))

// function genererEquipes() {
//     const joueurs = ["Reda", "Anouar", "Adlane", "Yohan", "Michel", "Anis", "Anas", "Alpha", "Julia", "Valou"]
//     const equipeA = []
//     const equipeB = []

//     // Mélanger la liste des joueurs de manière aléatoire
//     joueurs.sort(() => Math.random() - 0.5);

//     // Répartir les joueurs dans les deux équipes
//     for (let i = 0; i < joueurs.length; i++) {
//         if (i % 2 === 0) {
//             equipeA.push(joueurs[i])
//         } else {
//             equipeB.push(joueurs[i])
//         }
//     }

//     return [equipeA, equipeB]
// }

// console.log(genererEquipes())

// const array = [0, 1, 2, [3, 4]]

// console.log(array.flat())

// const arr = [0, 1, 2, [
//     [3, 4]
// ]]

// console.log(arr.flat(2))


// const array1 = ['Hello']
// let i = 0

// while (true) {
//     console.log(array1[i])
//     i++
//     if (i === array1.length)
//         i = 0
// }



// console.log(Array.from('LE king'))

// console.log(Array.from('foo'));

// console.log(Array.from([50, 100, 300], x => x + x))

// const array1 = [1, 2, 3]

// console.log(array1.includes(3))

// const pets = ['cat', 'dogs', 'bat']

// console.log(pets.includes('cat'))
// console.log(pets.includes('at'))

// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison']

// console.log(beasts.indexOf('bison', 2))


// console.log(beasts.indexOf('giraffe'))

// console.log(Array.isArray([1, 2, 3]))
// console.log(Array.isArray({ toto: 123 }))
// console.log(Array.isArray("tototruc"))
// console.log(Array.isArray(undefined))

// const elements = ['Fire', 'Air', 'Water']

// console.log(elements.join())
// console.log(elements.join(''))
// console.log(elements.join(' '))
// console.log(elements.join('-'))
// console.log(elements.join('/'))
// console.log(elements.join('reda'))

// const array1 = ['a', 'b', 'c']

// const iterator = array1.keys()

// for (const keys of iterator) {
//     console.log(keys)
// }

// const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo']

// console.log(animals.lastIndexOf('Dodo'))
// console.log(animals.lastIndexOf('Tiger'))

// const array1 = [1, 4, 9, 16]

// const map1 = array1.map(x => x * 2)

// console.log(map1)

// console.log(Array.of(12, 34, 45, "Reda", "456"))

// const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']

// console.log(plants.pop())
// console.log(plants.pop())
// console.log(plants.pop())
// console.log(plants.pop())
// console.log(plants.pop())

// // console.log(plants)

// const animals = ['pigs', 'goats', 'sheep']

// let newAnimals = animals.push("Zèbre")

// console.log(animals.push('Reda'))
// console.log(animals)

// const array1 = [1, 2, 3, 4]

// const initialValue = 0
// const sumWithIitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue,
//     initialValue)

// // console.log(sumWithIitial)

// const array1 = [
//     [0, 1],
//     [2, 3],
//     [4, 5]
// ]

// const result = array1.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue))
// console.log(result)
// const array1 = ['one', 'two', 'three']

// console.log('array1:', array1)
// const reversed = array1.reverse()
// console.log('reversed:', reversed)
// console.log('array1:', array1)

// const array1 = [1, 2, 3]

// const firstElement = array1.shift()

// console.log(array1)
// console.log(firstElement)

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

// console.log(animals.slice(2))
// console.log(animals.slice(2, 4))
// console.log(animals.slice(1, 5))
// console.log(animals.slice(-2))
// console.log(animals.slice(2, -1))
// console.log(animals.slice())

// const array = [1, 2, 3, 4, 5]

// const even = (element) => element % 2 === 0

// console.log(array.some(even))

// const months = ['March', 'Jan', 'Feb', 'Dec']
// months.sort()
// console.log(months)

// const array1 = [1, 30, 4, 21, 100000]
// array1.sort()
// console.log(array1)

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// console.log(months);
// months.splice(4, 1, 'May');
// console.log(months);

const array1 = [1, 'a', new Date('21 Dec 1998 14:12:00 UTC')]
const localeString = array1.toLocaleString('en', { timeZone: 'UTC' })

console.log(localeString)