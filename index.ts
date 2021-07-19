// Import stylesheets
//import './style.css';

// Write TypeScript code!
//const appDiv: HTMLElement = document.getElementById('app');
//appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;   
const output: HTMLElement = document.getElementById("Output");
const button: HTMLElement = document.getElementById("Custom-btn");
button.addEventListener('click', fizzbuzz);

function fizzbuzz() {
  const startNumInput : HTMLInputElement = <HTMLInputElement> {
    document.getElementById("start-num")
  }
  for (let i = 1; i <=100; i++) {
    if (i % 3 ==0 && i %5 == 0) {
      console.log('fizzbuzz', i);
    } else if (i % 3 == 0) {
      console.log('fizz',i);
    } else if (i % 5==0) {
      console.log('buzz', i);
    }
   
    fizzbuzz();
      }
    }
  