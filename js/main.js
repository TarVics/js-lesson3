/*
- Є змінна х, якій ви надаєте довільне числове значення.
  Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
  Перевірте скрипт при a, що дорівнює 1, 0, -3

- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
  до якої четверті години попадає число
  (в першу, другу, третю или четверту частину години).

- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку
  половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

- Скласти розклад на тиждень за домопоги switch. Користувач вводить
  порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
  (можна замість плану на день, назву дня англійською).

- Користувач вводить або має два числа.
  Потрібно знайти та вивести максимальне число з тих двох .
  Також потрібно врахувати коли введені рівні числа.

- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
  Напишіть код який, за допомоги  оператора || буде присвоювати змінній х значення "default"
  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
*/
const styleBoolean = 'color: mediumpurple;';
const styleHeader = 'border-left: 4px solid green; padding-left: 10px; display: block; white-space: pre-wrap;';
const styleNone = 'color: none;';
const styleNumber = 'color: cornflowerblue;';
const styleString = 'color: hotpink;';
/*******************************************************/

console.log('%c%s', styleHeader,
`- Є змінна х, якій ви надаєте довільне числове значення.
  Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
  Перевірте скрипт при a, що дорівнює 1, 0, -3`);

let res, s, x;

s = prompt('Вкажіть число для перевірки на рівність з 0');
x = +s;

if(s === '' || s === null || (isNaN(x)/* x !== x */)) {
    x = Math.round(Math.random() * 6) - 3;
    console.log('Задане випадкове число: %c%s', styleNumber, x);
} else {
    console.log('Задане число: %c%s', styleNumber, x);
}
//------------------------------------------------------
res = x !== 0 ? 'Вірно' : 'Невірно';
console.log('Варіант 1. Результат: %c\'%s\'', styleString, res);
//------------------------------------------------------
if(x !== 0) {
    res = 'Вірно';
} else {
    res = 'Невірно';
}
console.log('Варіант 2. Результат: %c\'%s\'', styleString, res);
//------------------------------------------------------
const arrAnswer = ['Невірно', 'Вірно'];
res = arrAnswer[+!!x];
console.log('Варіант 3. Результат: %c\'%s\'', styleString, res);

/*******************************************************/

console.log('%c%s', styleHeader,
`- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
  до якої четверті години попадає число
  (в першу, другу, третю или четверту частину години).`);

s = prompt('Вкажіть значення хвилин (0-59)');
let time = +s;

if(s === '' || s === null || (isNaN(time)/* time !== time */)) {
    time = Math.round(Math.random() * 59);
    console.log('Задане випадкове значення: %c%s', styleNumber, time);
} else {
    console.log('Задане значення: %c%s', styleNumber, time);
}
//------------------------------------------------------
res = (time >= 0 && time <= 59) ? Math.ceil((time + 1) / 15) : 0;
console.log('Варіант 1. Результат: %c%s', styleNumber, res);
//------------------------------------------------------
if (time < 0 || time > 59) {
    res = 0;
} else if(time < 15) { // 0-14
    res = 1;
} else if(time < 30) { // 15-29
    res = 2;
} else if(time < 45) { // 30-44
    res = 3;
} else { // 45-59
    res = 4;
}
console.log('Варіант 2. Результат: %c%s', styleNumber, res);

/*******************************************************/

console.log('%c%s', styleHeader,
`- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку
  половину(декаду) місяця потрапляє це число (у першу, другу чи третю).`);

s = prompt('Вкажіть значення хвилин (1-31)');
let day = +s;

if(s === '' || s === null || (isNaN(day)/* day !== day */)) {
    day = Math.round(1 + Math.random() * 30);
    console.log('Задане випадкове значення: %c%s', styleNumber, day);
} else {
    console.log('Задане значення: %c%s', styleNumber, day);
}
//------------------------------------------------------
if(day >= 1 && day <= 30){
    res = Math.ceil(day / 10);
} else {
    res = (day === 31) ? 3 : 0;
}
console.log('Варіант 1. Результат: %c%s', styleNumber, res);
//------------------------------------------------------
if (day < 1 || day > 31) {
    res = 0;
} else if(day <= 10) { // 1-10
    res = 1;
} else if(day <= 20) { // 11-20
    res = 2;
} else { // 21-31
    res = 3;
}
console.log('Варіант 2. Результат: %c%s', styleNumber, res);

/*******************************************************/

console.log('%c%s', styleHeader,
`- Скласти розклад на тиждень за домопоги switch. Користувач вводить
  порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
  (можна замість плану на день, назву дня англійською).`);

day = +prompt('Вкажіть порядковий номер дня тижня (1-7)') || 1;
console.log('Вказано номер дня тижня: %c%s', styleNumber, day);

switch (day) {
    case 1:
        res = 'Monday';
        break;
    case 2:
        res = 'Tuesday';
        break;
    case 3:
        res = 'Wednesday';
        break;
    case 4:
        res = 'Thursday';
        break;
    case 5:
        res = 'Friday';
        break;
    case 6:
        res = 'Saturday';
        break;
    case 7:
        res = 'Sunday';
        break;
    default:
        res = '';
}
if(res) {
    console.log('Результат: %c\'%s\'', styleString, res);
} else {
    console.log('Результат: %cНевірно заданий порядковий номер дня тижня', styleString, day);
}

/*******************************************************/

console.log('%c%s', styleHeader,
`- Користувач вводить або має два числа.
  Потрібно знайти та вивести максимальне число з тих двох .
  Також потрібно врахувати коли введені рівні числа.`);

number1 = +prompt('Вкажіть число №1');
console.log('Вказано число №1: %c%s', styleNumber, number1);

number2 = +prompt('Вкажіть число №2');
console.log('Вказано число №2: %c%s', styleNumber, number2);

if(isNaN(number1)/* number1 !== number1 */) {
    console.log('Результат: %cневірно введене число №1', styleString);
} else if (isNaN(number2)/* number2 !== number2 */) {
    console.log('Результат: %cневірно введене число №2', styleString);
} else {
    if(number1 === number2) {
        console.log('Результат: %cвведені рівні числа', styleString);
    } else {
        res = (number1 > number2) ? number1 : number2;
        console.log('Результат: максимальне число %c%s', styleNumber, res);
    }
}

/*******************************************************/

console.log('%c%s', styleHeader,
`- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null і тд включно).
  Напишіть код який, за допомоги оператора || буде присвоювати змінній х значення "default"
  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)`);

x = 0;
x = x || 1;
console.log('%c0%c || %c1%c -> %c%s',
    styleNumber, styleNone, styleNumber, styleNone, styleNumber, x);

x = false;
x = x || true;
console.log('%cfalse%c || %ctrue%c -> %c%s',
    styleBoolean, styleNone, styleBoolean, styleNone, styleBoolean, x);

x = '';
x = x || '<default>';
console.log('%c\'\'%c || %c\'<default>\'%c -> %c\'%s\'',
    styleString, styleNone, styleString, styleNone, styleString, x);

x = undefined;
x = x || {name: "object"};
console.log('%cundefined%c || {name: %c"object"%c} -> %o',
    styleString, styleNone, styleString, styleNone, x);

x = null;
x = x || [];
console.log('%cnull%c || [] -> %o', styleString, styleNone, x);
