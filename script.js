let string = prompt('String typedagi malumotni kiriting');
let string1 = String(string);
let stringItog = typeof string1;

let number = prompt('Number typedagi malumotni kiriting');
let number1 = Number(number);
let numberItog = typeof number1;

let boolean = prompt('Boolean typedagi malummotni kiriting');
let boolean1 = Boolean(boolean);
let booleanItog= typeof boolean1;

alert('Hamma malumotni to`g`ri kiritganizga ishonchiz komilmi?');

alert(`Siz kiritgan ${string} sozi ${stringItog} typega tegishli \n Siz kiritgan ${number} raqami ${numberItog} typega tegishli \n Siz kiritgan ${boolean} elementi ${booleanItog} typega tegishli`);