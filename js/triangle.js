const side1 = 5;
const side2 = 6;
const side3 = 7;
const s = (side1 + side2 + side3)/2;
const area = Math.round(Math.sqrt(s*((s-side1)*(s-side2)*(s-side3))));
console.log(Math.round(area));

const colorBackground = document.querySelector('body');
colorBackground.style.backgroundColor = '#ffb677';

const headingMain = document.querySelector('h1');
headingMain.style.fontSize = '40px';
headingMain.style.color = '#f67280';

const buttons = document.querySelector('#btn');
buttons.style.padding = '25px';
buttons.textContent = 'Click here';
buttons.style.borderRadius = '10px';
buttons.style.backgroundColor = '#f95959';
buttons.style.border='2px solid white';
buttons.style.color ='white';
buttons.style.fontSize ='18px';
buttons.style.marginTop = '20px';

buttons.addEventListener('click', function(){
    buttons.textContent = `The answer is ${area}`;
})

const points = document.querySelector('ul');
points.style.listStyle = 'none';

