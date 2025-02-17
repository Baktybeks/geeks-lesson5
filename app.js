console.log("lesson5");
console.error("lesson5");
console.log("lesson5");
console.log("lesson5");

var customername = "Bakyt";
var Customername = "Kuban";
console.log("customername:", customername);
console.log("Customername:", Customername);
var names = customername + " " + Customername;
console.log("names:", names);
console.log(`names: ${customername} или ${Customername}`);
console.log('"ОАО" Северэлектро');
console.log("d:\\data\\customer\\name.pdf");

var customer_surname = "Sariev";

var number = 46;
var number1 = 30;
console.log("+", number + number1);
console.log("-", number - number1);
console.log("*", number * number1);
console.log("/", number / number1);
console.log("%", number % 2);
console.log("**", 2 ** 10);
console.log("**", 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2);
console.log("**", 2 / 0 + 654654654654);
console.log("**", 0 / 3151351351351351351351);

var infin = Infinity;

console.log("infin:", infin);
console.log(typeof infin);
console.log(isFinite(number));
console.log(isFinite(infin));
console.log(15 + "15");
console.log(15 + Number("15"));
console.log(15 * "1515");
console.log(15 / "1515");
console.log(15 / "n", "654654");
console.log(15 * "n", "654654");
console.log(15 + "n", "654654");
console.log(15 - "351", "654654");
console.log(15, +"15");

console.log(typeof "321");
console.log(typeof null);
console.log(typeof undefined);
var age = 18;
var age1 = null;
var age2;
var age5 = 15;
var age6 = 15;
console.log(age);
console.log(age1);
console.log(age2);
var age4 = "654654654";
console.log(!(age === 19));

console.log(!!undefined);
console.log(!!null);
console.log(!!"-");
console.log(!!-0);

console.log(age === 18 && age5 > 30 && 15 > 10);
console.log(age === 19 || age5 < 30);
console.log(age === 19 || (age5 < 30 && 60 > age6));

console.log(age != 19);
console.log(!(age >= 19));

var hasCar = false;

if (hasCar) console.log("Есть машина");
if (hasCar !== true) console.log("нет машины");

if (hasCar) console.log("Есть машина");
else if (15===10) console.log("15>10");
else console.log("нет машины")

console.log(!hasCar ? 'Есть машина' : 'нет машины')