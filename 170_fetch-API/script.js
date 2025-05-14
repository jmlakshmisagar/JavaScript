// function loadScript(src, callback) {
//     const script = document.createElement('script');
//     script.src = src;
//     script.onload = () => callback(null, script);
//     script.onerror = () => callback(new Error('Script load error'));
//     document.head.append(script);
// }


// function loadScript(src) {
//     return new Promise((resolve, reject) => {
//         const script = document.createElement('script')
//         script.src = src

//         script.onload = () => resolve(src)
//         script.onerror = () => reject(new Error('Error'))

//         document.head.append(script)
//     })
// }

// loadScript('./script-two.js')
//     .then(script => {
//         console.log('Script loaded : ', script)
//     }).catch(error => {
//         console.log('Failed to load script :', error);
//     })

// function delay(time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             return resolve('Resolved')
//         }, time)
//     })
// }

// let r = delay(2000)

// console.log(r);

// Promise.race([fetcher(api2), fetcher(api1)])
//     .then(data => console.log(data))
//     .catch(error => console.log(error))


// Promise.resolve()
//   .then(() => console.log("First"))
//   .then(() => console.log("Second"));
// console.log("Outside");

// const api1 = 'https://fake-store-api.mock.beeceptor.com/api/products'
// const api2 = 'https://jsonplaceholder.typicode.com/todos'

// const fetccher = (url) => {
//     return new Promise((resolve, reject) => {
//         fetch(url)
//             .then(data => data.json())
//             .then(result => resolve(result))
//             .catch(error => reject(error))
//     })
// }


// function promiseAll(array) {
//     const promises = array.map(data => fetccher(data))
//     return Promise.all(promises)
// }

// promiseAll([api1, api2])
//     .then(data => console.log(data))
//     .catch(error => error)