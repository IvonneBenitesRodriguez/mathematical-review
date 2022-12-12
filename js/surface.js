let r = 4;
let surface = Math.round((3.1415) * (r*r));
console.log('Surface of a area is:  ' +  surface);

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
    buttons.textContent = `The answer is ${surface}`;
})
