//arguments object - no longer bound with arrow functions

//OldWay
// const add = function (a,b) {
//     console.log(arguments);
//     return a + b;
// };

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};

console.log(add(55,1));

//this keyword - no longe rbound

// const user = {
//     name: 'Will',
//     cities: ['DC','Cincy','Columbus'],
//     printPlacesLived: function () {
//         this.cities.forEach((city) => {
//             console.log(this.name + ' has lived in ' + city);
//         });
//     }
// };
// user.printPlacesLived();

// es6 method definition syntax

const user = {
    name: 'Will',
    cities: ['DC','Cincy','Columbus'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [2, 3, 4],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};

console.log(multiplier.multiply());