// const obj = {
//     name: "Ali"
// }

// let a = obj
// obj.id = 1;
// console.log(a, obj);

// let a = ["ABC"];

// let b = a;
// console.log(b);

// b.push(123);

// console.log(a);

// let a = {
//     name: "ABC"
// }

// let b = a;

// b.id = 123
// console.log(a);


/// ===== Spread Operator =====//spread means dusre object ki properties copy krna "..." sign
//if 2 key name are same to 2nd wali overwrite hojayegi object main  alphabetically
// properties save hogi and ARRAY main index wise

// let config = {
//     inst:'SAIMS',
//     course:'Web and Mobile',
//     batch:6,
//     year:2023
// }

// let std1 = {
//     ...config,
//     name:'EFG',
//     age:18,
//     sec:'A'
// }

// console.log(std1)


// let a = ['a', 'b', 'c']
// let c = [1,2,3,...a]
// console.log(c)

///FOR OBJECTS =================================

// let a = {
//     name: 'EFG',
// }

// let b = { ...a }
// b.id = 123
// console.log(a, b);

///FOR ARRAY =================================


// let a = [
// 'a','b','c'
// ]

// let b = [ ...a]
// b.push(123)
// console.log(a, b);

// let a = [{
//     name: 'Abc',
//     id: 1,
//     details: {
//         city: 'Karachi',
//         country: 'pakistan'
//     }
// }]

// let b = [...a];
// delete b[0].details;
// console.log(a);

// let stringifyArray = JSON.stringify([...a])


// let b = JSON.parse(JSON.sstringify([...a])


// let b = JSON.parse(stringifyArray)
// delete b[0].details;
// console.log(a, b);


/// Rest Operator =================================
//indexing agr array ki hai to array main chalegi object hai object main  chalegi object

// function abc(...rset) {
//     console.log(rest)

// }

// abc(1,2,3,4)

// let a = ['a', 'b', 'c', 'd']
// function mySplice(index, deleteCount, ...rest) {
//     a[index] = rest;
//     console.log(a)
// }

// mySplice(1, 2, 3, 4, 'a', 'b', 'c')

// ====== DeStructuring ================

//For Object

// let dataFromLocalStorage = {
//     id : 1,
//     name : 'Abc',
//     userNamed : 'Abc123',
//     contact: '123456'
// }

// let {name,userNamed,id,contact} = dataFromLocalStorage

// console.log(userNamed)
// console.log(name)
// console.log(id)
// console.log(contact)

//For Array //Index ki value ka name kuch bhi de skte hain
// agr next index value chahiye to previous index value khali chorni hogi

// let arr = ['abc', 'mno', 'pqr', 'djkl']

// let [val1, val2, , val4] = arr

// console.log(val1, val2)

// for(let i = 0; i < arr.length; i++){
//     let vari   
// }

let arr = [
    2,
    2,
    3,
    "abc",
    "ty",
    [
        true,
        {
            id: 374,
            details: [{
                id: 1, name: "Abu Bakar",
                dt: [1, 2, 3, 4, 5]
            }]
        },
    ],
];

let [, { id, details: [{, name, dt: []}]}] = arr[5][0][1];

console.log(id, details)

// let { name } = arr[5][1].details[0]
// console.log(name)
