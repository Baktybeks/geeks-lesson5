// console.log("lesson5");
// console.error("lesson5");
// console.log("lesson5");
// console.log("lesson5");

// var customername = "Bakyt";
// var Customername = "Kuban";
// console.log("customername:", customername);
// console.log("Customername:", Customername);
// var names = customername + " " + Customername;
// console.log("names:", names);
// console.log(`names: ${customername} или ${Customername}`);
// console.log('"ОАО" Северэлектро');
// console.log("d:\\data\\customer\\name.pdf");

// var customer_surname = "Sariev";

// var number = 46;
// var number1 = 30;
// console.log("+", number + number1);
// console.log("-", number - number1);
// console.log("*", number * number1);
// console.log("/", number / number1);
// console.log("%", number % 2);
// console.log("**", 2 ** 10);
// console.log("**", 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2);
// console.log("**", 2 / 0 + 654654654654);
// console.log("**", 0 / 3151351351351351351351);

// var infin = Infinity;

// console.log("infin:", infin);
// console.log(typeof infin);
// console.log(isFinite(number));
// console.log(isFinite(infin));
// console.log(15 + "15");
// console.log(15 + Number("15"));
// console.log(15 * "1515");
// console.log(15 / "1515");
// console.log(15 / "n", "654654");
// console.log(15 * "n", "654654");
// console.log(15 + "n", "654654");
// console.log(15 - "351", "654654");
// console.log(15, +"15");

// console.log(typeof "321");
// console.log(typeof null);
// console.log(typeof undefined);
// var age = 18;
// var age1 = null;
// var age2;
// var age5 = 15;
// var age6 = 15;
// console.log(age);
// console.log(age1);
// console.log(age2);
// var age4 = "654654654";
// console.log(!(age === 19));

// console.log(!!undefined);
// console.log(!!null);
// console.log(!!"-");
// console.log(!!-0);

// console.log(age === 18 && age5 > 30 && 15 > 10);
// console.log(age === 19 || age5 < 30);
// console.log(age === 19 || (age5 < 30 && 60 > age6));

// console.log(age != 19);
// console.log(!(age >= 19));

// var hasCar = false;

// if (hasCar) console.log("Есть машина");
// if (hasCar !== true) console.log("нет машины");

// if (hasCar) console.log("Есть машина");
// else if (15===10) console.log("15>10");
// else console.log("нет машины")

// console.log(!hasCar ? 'Есть машина' : 'нет машины')

// var cutomer = null
// console.log('null:', cutomer.verification);

// var color = 'yellowyellow';

// var color = prompt('Напишите цвет')

// console.log(typeof color)

// if (color==='red') console.log('цвет красный')
// else if (color==='green') console.log('цвет зеленый')
// else if (color==='yellow') console.log('цвет желтый')
// else console.log('цвет не правильный')

// var num1 = Number(prompt('Введите первое число'))
// var operator = prompt('оператор (+,-,*,/)')
// var num2 = Number(prompt('Введите второе число'))

// var result

// switch (operator) {
//   case '+':
//     result = num1+num2;
//     break;
//   case '-':
//     result = num1-num2;
//     break;
//   case '*':
//     result = num1*num2;
//     break;
//   case '/':
//     result = num2 !==0 ? num1/num2 : 'Ошибка';
//     break;
//   default:
//     result = 'Неверный оператор';
// }

// console.log(result)

// var a = 5;

// var b;

// console.log(a && "555555555555555");
// console.log(a === null ? "555555555555555" : "");
// console.log(a ?? "555555555555555");
// console.log(b ?? "true");

// console.log(a, "a");
// console.log(b, "b");

// var massive = [1, "second", true, 4.5, 5, 6, 7, 5, 6, 6, 78, 8, 9, 8, 100];
// var massive = [];

// console.log("massive:", massive[6]);
// console.log("massive:", massive[massive.length - 1]);
// console.log("massive:", massive);

// for (var i = 29; i >= 0; i--) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// var i = 0;
// while (i<5) {
//   console.log('i:', i);
//   i++
// }

var arr = [1, 2, 3, 4, 5];
// var arr3 = arr.push(8)
// var arr3 = arr.push(8)
// var arr2 = new Array(55).fill(99)
// console.log('arr:', arr);
// console.log('arr2:', arr2);
// console.log('arr3:', arr3);

// arr.pop()
// arr.pop()
// arr.shift()
// arr.unshift(654654)
// arr[2] = 99999
// console.log("arr", arr);

// var b = arr.map((a) => (a % 2 === 0 ? a ** 2 : a));

// console.log("b", b);

// var c = arr.filter((num) => num % 2 === 0);
// console.log("c", c);

// var d = arr.reduce((acc, num) => acc * num, 1);
// console.log("d", d);

// var name = "Baktybek";
// var surname = "Sariev";
// var age = 20;

// var person = {
//   name: "Baktybek",
//   'surname asd': "Sariev",
//   age: 18,
//   address: {
//       country: 'KG',
//       city: "Bishkek",
//       house: '35'
//   }
// };

// console.log('person.name:', person['name']);
// console.log('person.name:', person["surname asd"]);
// console.log('address999999999:', person["address"]['city']);
// console.log('person.city:', person.address.city);
// console.log('person.name:', person.name);
// console.log('person.surname:', person.surname);
// console.log('person.age:', person.age);

// var persons = [
//   {
//     name: "Baktybek",
//     age: 39
//   },
//   {
//     name: "Нургелди",
//     age: 28,
//   },
//   {
//     name: "Закир",
//     age: 18,
//   },
//   {
//     name: "Айтенир",
//     age: 8,
//   }
// ]

// console.log('persons:', persons);

// var ages = persons.filter(person=> person.age > 18 )
// console.log('ages:', ages);
// var names = ages.map(person=> console.log(`Имя: ${person.name}, Возраст: ${person.age}`))

// // console.log('basd:', basd);
// // let basd = 140
// // basd=150
// // basd='asdfasdf'

// // console.log('c:', casdf);
// // const casdf = 160
// // // casdf='wed'

// console.log('zxcv:', zxcv);
// var zxcv = 'zxcv'

// if(25>15) {
//   var red = 'red'
//   console.log('red:', red);
// }

// console.log('red:', red);

// let arr5 = [1,2,3,4,5,6]
// arr5=[1,5,6,5,4]
// const obj = {
//   name: 'sad',
//   age: 18
// }

// obj.name='wef'
// console.log('arr5:', arr5);
// console.log('obj:', obj);

// const person = {
//   name: "Bakyt",
//   age: 18,
// };

// const { name, age } = person;

// console.log(person.age);

// console.log("name:");
// console.log("age:");

// let a = 5;
// console.log("a:", a);
// let b = a++;
// console.log("a:", a, b);

// let g = 10;
// let f = ++g;
// console.log("c:", g, f);

// for (let i = 1; i <= 20; i++) {
//   console.log(i);
// }
// for (let i = 1; i <= 20; ++i) {
//   console.log(i);
// }

// let str = "Кыргызстан";

// console.log(str.length);
// console.log(str[3]);

// for (let i = 0; i < str.length; i++) console.log(str[i]);
// for (let char of str) console.log(char)

// var person123 = {
//   name: "Baktybek",
//   'surname asd': "Sariev",
//   age: 18,
//   address: {
//       country: 'KG',
//       city: "Bishkek",
//       house: '35'
//   }
// };

// console.log('Object.entries(person123):', Object.entries(person123));

// const person12 = Object.entries(person123).forEach(([key, value]) => {
//   console.log(`${key}, ${value}`);
// });

// console.log(str.toUpperCase() );
// console.log(str.toLowerCase()  );

// let sl = str.slice(0,4)
// console.log(sl);
// let sl1 = str.slice(5,7)
// console.log(sl1);
// let sl2 = str.slice(-1)
// console.log(sl2);
// let sl23 = str.slice(0,1).toUpperCase()+str.slice(1,str.length-1)+str.slice(-1).toUpperCase()
// console.log(sl23);


let role = ['admin', 'user', 'driver', 'user']

console.log(role.indexOf('user'));
console.log(role.indexOf('admin'));
console.log(role.indexOf('driver'));
console.log(role.indexOf('driverцуацу'));

let str = "Кыргызстан";
console.log(str.indexOf('р'));


console.log(role.includes('driver'))

let as= 8
let df= 2.7
let vb=as*df
console.log('random:', (Math.random()*1000).toFixed(0));
console.log('vb:', Math.floor(12.9));
console.log('vb:', Math.ceil(12.3));
console.log('vb:', (12.3654654654).toFixed(2));

const numbers = [1,2,3,4,5,6,7,8,9,10]

const [, b,,d, ...rest] = numbers

console.log('bcd',d);
console.log('rest',rest);

const animals = ['sheep', 'monkey', 'hourse']

const count = [...numbers , animals]

console.log('count:', count);

const obj1= {a: 1, b: 2}
const obj2= {c: 1, d: 2}

const merged = {...obj1, ...obj2}
const merged1 = {obj1, obj2}

console.log('merged:', merged);
console.log('merged1:', merged1);
console.log('saf:', saf);

const saf = 5;

