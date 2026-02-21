//1
let i = 3;

while (i) {
  alert( i-- );
} //1


//2
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
}

//3
let j = 0;
while (j < 3) {
  alert( `number ${j}!` );
  j++;
}

//4
let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);





























