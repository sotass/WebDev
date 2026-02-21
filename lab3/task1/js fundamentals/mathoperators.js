let a = 1, b = 1;

alert( ++a ); // 2, prefix form returns the new value
alert( b++ ); // 1, postfix form returns the old value

alert( a ); // 2, incremented once
alert( b ); // 2, incremented once

let c = prompt("First number?", 1);
let d = prompt("Second number?", 2);

alert(+d + +d); // 3