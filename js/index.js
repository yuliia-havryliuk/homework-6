//1. Створити обєкт який описує тварину (назву, вагу, вік, середню швидкість), і наступні функції для роботи з ним:
//
// Функція яка виведе всю інформацію про тварину. Функція яка виведе за скільки тварина зможе подолати 1000 км.
// (врахуйте що тварина може рухатись не більше 12 годин у день). Функція яка зможе змінити назву тварини на більш детальну.

const animalsObj = {
    name: 'Cow',
    weight: 230,
    age: 4,
    midSpeed: 15,
    getInfo(){
        console.log(animalsObj)
},
    changeAnimalName(value){
        this.name = value //не змінює назву в консолі, якщо об'єкт не розкрити, в самому об'єкті name: 'Lidia'
}
}
/*console.log(animalsObj.name = 'Lidia') //--> змінює назву тварини в самому об'єкті*/

/*function changeAnimalName() {
    let newName = 'Lidia';
    animalsObj.name = newName
}*/

function task1(){
    animalInfo()
    animalSpeed(Speed, animalsObj.midSpeed)

    //змінюємо ім'я тварини на більш детальне
    animalsObj.changeAnimalName('Lidia')
}

//видає всю інформацію протварину
function animalInfo(){
    animalsObj.getInfo()
}

//рахує час за який тварина може подолати 1000 км
const Speed =1000;

function animalSpeed(a,b){
    let s = a / b;
    let less12 = Math.floor(s/12);
    let more12 = Math.floor(s);
    if(s>12){
        console.log(`Тварина пройде: ${less12} днів.`)
    } else if(s<12){
        console.log(`Тварина пройде: ${more12} годин.`)
    }

    return s
}


//2. Створіть обєкт який має у собі 2 довжини сторін фігури. Додайте методи які будуть робити наступне - рахувати площу фігури,
// периметр фігури, зроблять фігуру 3-д, зададуть назву фігури, переведуть значення з сантиметрів у метри.

const firstLength = 40000;
const secondLength = 8000;
const thirdLength = 600000;

//переводимо значення сантиметрів у метри
const firstLengthM = firstLength/1000 + 'm';
const secondLengthM = secondLength/1000 + 'm';
const thirdLengthM= thirdLength/1000 + 'm';

const figureObj = {
    firstLength,
    secondLength,

    //рахуємо площу фігури
    figureSquare(){
        console.log(firstLength * secondLength)
    },

    //рахуємо периметр фігури
    figurePerimeter(){
        console.log((firstLength + secondLength) * 2)
    },

    //робимо фігуру 3D
    figure3D(){
        console.log(2*((firstLength*secondLength)+(firstLength*thirdLength)+(secondLength*thirdLength))) //площа 3Д фігури
    },

    //змінюємо фігурі ім'я
    figureName(value){
        console.log(figureObj.name = value)
    },

    //конвертуємо значення фігри в метри
    figureConvert(){
        console.log(firstLengthM, secondLengthM, thirdLengthM)
    },
}
function task2() {
    console.log(figureObj)
    figureObj.figureSquare()
    figureObj.figurePerimeter()
    figureObj.figure3D()
    figureObj.figureName('Lidia')
    figureObj.figureConvert()
}

//3. Створимо аналог списка покупок (мінімум 5 покупок з всіма заданими пропертями. )
//
// {
//
//   tomato: {
//
//     count: 5,
//     price: 50,
//     buy: false,
//     outOfstore: true
//
//   } , ...
//
// }
//  Виводимо список покупок - спочатку ті які є в магазині потім яких немає,
// Виводимо список покупок які ми купили.
// Додаємо функцію яка дозволить купити продукт.
// Додаємо функцію яка просумує всі зроблені покупки і виведе результат.(не забуваємо що є значення кількості та ціни за одиницю товару)
// Додаємо можливість збільшувати кількість товару.
// Додаємо можливість зменшувати кількість товару(менше 0 бути не може).

const productsObj = {
    tomato: {
        count: 5,
        price: 50,
        buy: false,
        outOfstore: true,

    },
    apricot: {
        count: 55,
        price: 8,
        buy: true,
        outOfstore: true,

    },
    bread: {
        count: 20,
        price: 16,
        buy: true,
        outOfstore: true,

    },
    popcorn: {
        count: 2,
        price: 14,
        buy: false,
        outOfstore: false,

    },
    milk: {
        count: 11,
        price: 20,
        buy: true,
        outOfstore: false,

    },

 /*   countIncrease(){
        productsObj.count = 120
        console.log(productsObj)
    },*/
}

//визначаємо чи продукт є в магазині
function isInStock(){
    for(key in productsObj){
        if (productsObj[key].outOfstore === true){
            console.log(`Є в магазині: ${key}.`)
        } else if(productsObj[key].outOfstore === false){
            console.log(`Немає в магазині: ${key}.`)
        }
    }
}
//визначаємо чи продукт куплений
function isProductBought() {
    for(key in productsObj){
        if(productsObj[key].buy === true){
            console.log(`Куплено: ${key}.`)
        }
    }
}
//дозволяє купити продукт і змінює значення на true
function letBuy() {
    for(key in productsObj){
        if(productsObj[key].buy === false) {
            productsObj[key].buy = true
        }
    }  console.log(productsObj)
}

//сумуємо кількість витрачених грошей
let summaryShopping = 0;

function sumShopping(){
    for (key in productsObj){
        let sum =0;
        let sumPrices = productsObj[key].price;
        let sumProducts = productsObj[key].count;
        let summary = sumPrices*sumProducts;
        summaryShopping +=summary
    } console.log(`Зроблено покупок на суму: ${summaryShopping}.`)
}

//функція, яка збільшує кількість товару
let riseC = 5;

function riseCount() {
    for (key in productsObj) {
        console.log(productsObj[key].count += riseC);
    }
}

//функція яка зменшує кількість товару
let lowC = 14;

function lowCount() {
    for(key in productsObj){
        let r = productsObj[key].count-=lowC
        if(r<0){
            console.log(`Неможливо замовити менше 0 продуктів.`)
        } else if(r>0){
            console.log(r)
        }
    }
}

function task3(){
    isInStock();
    isProductBought();
    sumShopping();
    riseCount();
    lowCount()
}


//4. Задана колекція [{name: "Yura", age: 55, hobby: ["films", "games", "hiking"], type: "Admin"}, {}, {},{}]. Вивести всіх адмінів.
// Вивести середній вік усіх працівників. Вивести тільки унікальні хоббі працівників.


const firstCollection = [
    {
        name: "Yura",
        age: 55,
        hobby: ["films", "games", "hiking"],
        type: "Admin"
    },
    {
        name: "Max",
        age: 15,
        hobby: ["games", "painting", "reading"],
        type: "student"
    },
    {
        name: "Pablo",
        age: 42,
        hobby: ["skiing", "riding", "reading"],
        type: "Admin"
    },
    {
        name: "Helen",
        age: 34,
        hobby: ["knitting", "painting", "gardening"],
        type: "student"
    },
]

//визначаємо хто є адміном
function showAdmin() {
    for (key in firstCollection) {
        if (firstCollection[key].type === "Admin") {
            console.log(`Admin is: ${firstCollection[key].name}`)
        }
    }
}

let sum = 0;
let userCount = 0;

//рахуємо середній вік юзерів
function midAge() {
    for(key in firstCollection){
        sum +=firstCollection[key].age
    }console.log(sum/userCount)
}

//рахуємо кількість юзерів
function userCounter(){
    for(key in firstCollection) {
        if (firstCollection[key].age) {
            userCount++
        }
    }
}

let allHobbies =[]

//з'єднуємо всі хоббі в один масив
function uniqueHobbies(){
    allHobbies = firstCollection[0].hobby.concat(firstCollection[1].hobby, firstCollection[2].hobby, firstCollection[3].hobby)
    console.log(allHobbies)

    return allHobbies
}

//фільтруємо масив хоббі - спосіб 1
function findUniqueHobby(){
    const findUniqueHobbies = allHobbies.filter(a => allHobbies.filter(b => b === a).length === 1)
    console.log(`Унікальні хоббі юзерів: ${findUniqueHobbies.join(' , ')}.`)
}

//фільтруємо масив хоббі - спосіб 2
function findUniqueHobby2(){
    const findUniqueHobbies = allHobbies.filter(
        (item) => allHobbies.indexOf(item) === allHobbies.lastIndexOf(item)
    );
    console.log(`Унікальні хоббі юзерів: ${findUniqueHobbies.join(' , ')}.`)
}
function task4(){
    showAdmin()
    userCounter()
    midAge()
    uniqueHobbies()
    findUniqueHobby()
    findUniqueHobby2()
}