// function factorial(n) {
//     if (n < 0) {
//       return "Factorial is not defined for negative numbers";
//     }
//     let Factorial = 1;

//     for (let i = 1; i <= n; i++) {
//       Factorial *= i;
//     }
//     return result;
//   }


//   console.log(factorial(5)); 
//   console.log(factorial(0)); 
//   console.log(factorial(-3)); 



// function factorial(num){
//     let s=1;
//     for(let i=num;i>=1;i--){
//         s=s*i;
//     }
//     console.log(s);
// }

// factorial(4);

// count 


// function numbers(n) {
//     if (n > 0) {
//         console.log(n);
//         numbers(n - 1);
//     }
//     return 1;
// }

// numbers(10);


// function count(n){
//     if(n>10){
//         return 1
//     }
//     console.log(n)
//     return count(n+1)
// }
// let num = 1;
// count(num);


// power function 

// function power (a,b){
//     if(b===0){
//         return 1;
//     }
//     return a*power(a,b-1);
// }
// let a=10;
// let b=0;
// console.log (power(a,b));

// const arr=[1,5,2]


//  array sum


// function arraySum(arr, i = 0) {
//     if (i === arr.length) {
//       return 0;
//     }

//     return arr[i] + arraySum(arr, i + 1);
//   }

//   const arr = [1, 5, 2,-1];
//   console.log(arraySum(arr)); 



//   function sumArray(arr) {
//     if (arr.length === 0) {
//       return 0;
//     }
//     return arr[0] + sumArray(arr.slice(1));
//   }
//   const arr = [1, 5, 2];
//   console.log(sumArray(arr));



// callback 


// function sayHi(callback){
//     const data=callback();
//         return "hi "+ data;

// }
// const sayBye =()=>"bye";

// const result=sayHi(sayBye);

// console.log(result);



// ?? hotel 


// function preparedFood(foodDelivered){
//     setTimeout(()=>{
//         console.log("Food is being prepared");
//         console.log("Food is ready");
//         foodDelivered(eatingFood);
//     }, 10000);

// }

// function deliveredFood(eatingFood){
//     setTimeout(()=>{
//         console.log("Food is delivered to your table");
//         eatingFood(payment);
//     }, 5000)

// }

// function eatingFood(payment){
//     setTimeout(()=>{
//         console.log("Eating Food");
//         payment(leaveHotel);
//     }, 2000)
// }

// function payment(leaveHotel){
//     setTimeout(()=>{
//         console.log("Payment");
//         leaveHotel(rating);
//     }, 10000)
// }
// function leaveHotel(){
//     console.log("Leave the Hotel");
//     rating();

// }
// function rating(){
//     console.log("rating");
// }

// function visitingHotel(){
//     console.log("Entering the Hotel");
//     console.log("Order Food - Biryani ");
//     preparedFood(deliveredFood);

// }

// visitingHotel();


// task 

//  ATM
// Enter ATM
// Insert Card
// Processing - 5 seconds
// Enter Pin - 2 seconds
// Withdraw Money - 5 seconds
// Collect Cash - 1 second
// Leave ATM





function insertcard(processing) {

    setTimeout(() => {
        console.log("insert card");
        processing();
    },5000)
}
function processing(enterPin) {
    setTimeout(() => {
        console.log("processing");
        enterPin();
    },2000)

}

function enterPin(withdraw) {
    setTimeout(() => {
        console.log("enter pin");
        withdraw();
    },3000)

}
function withdraw(collect) {
    setTimeout(() => {
        console.log("withdraw cash");
        collect();

    },2000)
}
function collect(leave) {
    setTimeout(()=>{
        console.log("collect money");
        leave();
    },10000)
}
function leave() {
    console.log("leave the atm");
}


function visitingAtm() {
    console.log("enter atm");
    
        insertcard(() => {
            processing(() => {
                enterPin(() => {
                    withdraw(() => {
                        collect(() => {
                            leave(() => {

                            })
                        })
                    })
                })
            })
        })
    
}
visitingAtm();