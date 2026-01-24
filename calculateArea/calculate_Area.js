let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

let area = length * width;

document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

let first;
let second;
let third;

function groceryTracker() {
    first = parseFloat(document.getElementById('first').value);
    second = parseFloat(document.getElementById('second').value);
    third = parseFloat(document.getElementById('third').value);

let total = first + second + third;

document.getElementById('amount').innerText = `The total amount is: ${total}`;
}