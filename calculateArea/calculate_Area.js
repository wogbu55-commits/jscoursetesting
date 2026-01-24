let length;
let width;

function calculateArea() {
    length = paresFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

let areae = length * width;

document.get ElementById('result').innerText = `The area of the rectangle is: ${area}`;
}