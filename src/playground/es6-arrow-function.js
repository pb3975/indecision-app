// const square = function (x) {
//     return x * x;
// };

// // const squareArrow = (x) => {
// //     return x *x;
// // };

// const squareArrow = (x) => x * x;



// console.log(squareArrow(3));

const getFirstName = (fullName) => {
   return fullName.split(' ')[0];
}

const getFirstNameArrow = (fullName) => fullName.split(' ')[0];




console.log('Regular: ', getFirstName('Chck Polaris'));
console.log('Arrow: ', getFirstNameArrow('Chuck Polaris'));