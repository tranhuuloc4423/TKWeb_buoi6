



// var a = 22

// var b = 10

// console.log(a + b); 

// a % 2 == 0 ? console.log("so chan") : console.log("so le")
// var i = 0;
// while(i <= 400) {
//     if(i % 2 == 0) {
//         console.log(i)
//     }
//     i++
// }
// for(var i = 0; i < 100; i += 5) {
//     console.log(i)
// }


// let sl = document.querySelector('#num1').value
// let dongia = document.querySelector('#num2').value


// function tinhGiaTien(sl, dongia) {
//     console.log(sl * dongia)
// }

// tinhGiaTien();

var num1 = document.getElementById('num1');

var num2 = document.getElementById('num2');

document.getElementById('submit').onclick = function () {
    if(isFinite(num1.value && num2.value)) {
        console.log(num1.value*1 + num2.value*1)
    }
}

var ho = "tran"

var ten = "loc"

// console.log(`my name is : ${ten} ${ho}`)


// const tien = (a, b) => {
//     return a * b;
// }
// console.log(tien(23, 32))

var courses = ["javascript","PHP","C++"]

courses.push("python")

// for(var i = 0;i < courses.length; i++) {
//     console.log(courses[i])
// }
// console.log(" ")
// courses.pop("python")

// for(var i = 0;i < courses.length; i++) {
//     console.log(courses[i])
// }

// for(var course of courses) {
//     console.log(course);
// }

const clothes = ['ao','giay','quan']

const test = clothes.map(clothe => {
    if(clothe === "giay") {
        return `doi ${clothe}`
    } else {
        return `cai ${clothe}`
    }   
})

const A = [1, 2, 3, 4, 5]

const test2 = A.map(num => {
    return num += 1;
})

console.log(test2)