// const arrImage = [
//     'https://th.bing.com/th/id/R.80048c94faacac8b7ff6af18efa3d92a?rik=Ac82coHKVHLVyg&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2016%2f01%2fnature-wallpapers-8.jpg&ehk=GoUR7nA3jNm0gIdWFJoMVL1iu%2bJuWOU7Nu7KkgKZzeQ%3d&risl=&pid=ImgRaw&r=0',
//     'https://tse2.mm.bing.net/th/id/OIP._7tu13cN9x5uSIq8M1bnfgHaEK?cb=iwc1&w=1600&h=900&rs=1&pid=ImgDetMain',
//     'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?cs=srgb&dl=daylight-environment-forest-459225.jpg&fm=jpg'
// ]

// const allImages = document.querySelectorAll('img')

// console.log(allImages);

// allImages.forEach((ele, index) => {
//     ele.src = arrImage[index]
// })


const qq = [...document.getElementsByTagName('img')].forEach(element => {
    console.log(element);
});
console.log(qq)