import * as rxjs from 'rxjs'
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

const arr = [];
for(let i=0;i<100;i++){
    arr[i]=i+1;
}
console.log(arr)

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}

from(arr)
  .pipe(filter((value) => isPrime(value)))
  .subscribe((result) => console.log(result));


console.log("\n\n task2");

const observable = new rxjs.Observable((observer) => {
  observer.next(5);
  observer.next(4);
  observer.next(3);
  observer.next(2);
  observer.next(1);
  observer.error("Error");
}).subscribe({
  next: console.log,
  error: console.log
});

function generateColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

const streamBtn1 = rxjs.fromEvent(document.getElementById("button1"), "click");
const streamBtn2 = rxjs.fromEvent(document.getElementById("button2"), "click");
const streamBtn3 = rxjs.fromEvent(document.getElementById("button3"), "click");
const mergedStream = rxjs.merge(streamBtn1, streamBtn2, streamBtn3);
mergedStream.subscribe((event) => {
  document.body.style.backgroundColor = generateColor();
});
