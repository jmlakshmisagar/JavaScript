// // const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


// // const filteredMap = months.filter((month, index, array) => {
// //     return filtered = array.filter((m, i, a) => {
// //         return closedFilter = a.filter(i => {
// //             return i.length <= 3
// //         })
// //     })
// // })

// // console.log(closedFilter);


// // const students = [
// //     { name: 'Sagar', age: 21 },
// //     { name: 'Aditi', age: 22 },
// //     { name: 'Rohan', age: 20 },
// //     { name: 'Priya', age: 23 },
// //     { name: 'Vikram', age: 21 },
// //     { name: 'Neha', age: 22 },
// //     { name: 'Aman', age: 20 },
// //     { name: 'Kavya', age: 23 },
// //     { name: 'Rahul', age: 21 },
// //     { name: 'Sneha', age: 22 }
// // ];

// // const filterStudent = students.filter((student) => {
// //     return student.age >= 23
// // }).map(student => {
// //     return student.name
// // })

// // console.log(filterStudent);


// // const numbers = [0, 1, 2, 3, 4, 5]

// // const result = numbers.reduce((accumulator, current) => {
// //     return accumulator + current
// // })

// // console.log(result);


// // const numbers = [1, 2, 3, 4, 5];


// // const product = numbers.reduce((a,c)=>a*c)

// // console.log(product);

// // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // const result = numbers.filter(i => i % 2 != 0).map(i => i * i)

// // console.log(result);


// // const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// // const counter = {}

// // fruits.map((element) => {
// //     counter[element] ? counter[element] += 1 : counter[element] = 1
// // })

// // console.log(counter);




// //Given an array of objects representing products with a price property,
// // calculate the total cost of all products after applying a 10% discount.

// // const products = [

// //     { name: 'Product 1', price: 100 },

// //     { name: 'Product 2', price: 200 },

// //     { name: 'Product 3', price: 300 }

// // ];

// // let discountedPrize = 0;

// // const finalPrize = products.map(element => {
// //     discountedPrize += element.price - (element.price * 0.10)
// // })

// // console.log(discountedPrize);







// // const names = ['Alice', 'Bob', 'Charlie'];

// // const ages = [25, 30, 35];

// // const cities = ['New York', 'Los Angeles', 'Chicago'];

// // const output = []

// // names.map((e,i)=>{
// //     output.push({
// //         name : names[i],
// //         age:ages[i],
// //         city:cities[i]
// //     })
// // })

// // console.log(output);






// // const evenNumber = [0, 2, 3, 4, 6, 8]

// // const result = evenNumber.some((e, i) => {

// //     if (e % 2 !== 0) {
// //         console.log(e, i);
// //         return true;
// //     }
// //     return false;

// // })

// // console.log(result);



// // function add() {
// //     let sum=0
// //     for(let i=0; i<arguments.length; i++){
// //         sum+=arguments[i]
// //     }
// //     return sum
// // }

// // console.log(add(1,2,3,4,5));




// // let user = {
// //     a: 1,
// //     b: 1,
// //     c: {
// //         d: 1,
// //         e: 1
// //     }
// // }

// // let copy = JSON.parse(JSON.stringify(user))

// // copy.c.d = 2
// // console.log(user.c.d);
// // console.log(copy.c.d);

// let num='hello'


// function add(...num) {
//     return num.reduce((a, c) => a + c)
// }

// console.log(add(num));


// // function sum(x, y, z) {

// //     return x + y + z;

// // }

// // const numbers = [1, 2, 3];

// // console.log(sum(...numbers));


// // function add() {
// //     return [...arguments].reduce((a, c) => a + c)
// // }

// // console.log(add(1,2,3,4,5,6,7));


// const color = ['pink', 'grey', 'green', 'yellow']
// const { 3: color4 } = color

// console.log(color4);



// setInterval(()=>{
//     setTimeout(()=>{
//         console.log('hello');
//     },2000)
// },2000)

// setTimeout(()=>{
//     setInterval(()=>{
//         console.log('hello');
//     },2000)
// },5000)


// fetch('https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore&appid=8925502a781648f4443f9e01d96c7ff5')
//     .then(data => data.json())
//     .then(data => {
//         console.log(data);
//         document.writeln(JSON.stringify(data))
//     }).catch(e => {
//         console.log(e);
//     })