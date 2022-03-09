import add from './add';
// LAB: Importar subtraction
import substract from './subtraction'


let result = add(4, 5);
let output = document.querySelector('#output');
if (output) {
    output.innerHTML = result.toString();
}

// LAB: Invocar subtraction

let sub = substract(4, 5);
let output2 = document.querySelector('#sub_output');
if (output2) {
    output2.innerHTML = sub.toString();
}
