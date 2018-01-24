var nameVar = 'Will';
var nameVar = 'Chuck'
console.log('nameVar', nameVar);

let nameLet = 'Joe';
nameLet = 'Bob';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);


function getPetName () {
    let petName = 'Hal';
    return petName;
}

const petName = getPetName();
console.log(petName);


// Block Scoping - variables must be in the block they are defined or defined up above
// Start all variables as const and then if need to be reassigned change it to let - no more var

const fullName = 'Will Metz';

if (fullName) {
    let firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);