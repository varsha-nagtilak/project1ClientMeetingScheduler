import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'Space';
  // isActive = true;
  // src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Webb%27s_First_Deep_Field.jpg/310px-Webb%27s_First_Deep_Field.jpg";

  // counter = 0;

  // increment() {
  //  this.counter = this.counter + 1;
  // }

  // decrement() {
  //   this.counter = this.counter - 1;
  //  }
  
  //  className=""

  //  handleRedBtnClick () {
  //   this.className = "redClass";
  //  }

  //  handleBlueBtnClick () {
  //   this.className = "blueClass";
  //  }

//Task: Number is prime or not
// inputNum = "";
// result=""

// isPrimeNum(num:number) {
//     if (num <= 1)
//       return false;
//     for (let i = 2; i < num; i++)
//       if (num % i == 0)
//         return false;
//     return true;
// }

// checkNumIsPrime() {
//   const inputNumber = parseInt(this.inputNum);
//   let isPrime = this.isPrimeNum(inputNumber);
//   if(isPrime) {
//     this.result = "Entered number is Prime Number"
//   } else {
//     this.result = "Entered number is not Prime Number"
//   }
// }

//Task Switch
inputNum1 = "";
inputNum2 = "";
opr = "/"
result = 0;
num1=0;
num2=0;
showResult = () => {
  this.num1 = parseInt(this.inputNum1);
  this.num2 = parseInt(this.inputNum2);
}
wish = "Good Morning";
person={"name":"Gandhi","gender":"m"}

}
