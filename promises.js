// let treet = new Promise(function(resolve ,reject){
//     // let party=false;
//     let gift=false;
//     if(gift){
//         resolve("party on");
//     }
//     else{
//         reject("party off");
//     }
// });
// // console.log(treet);
// treet.then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })
// treet.catch((result)=>{
//     console.log(error);
// })


// let treet = new Promise(function(resolve ,reject){
//     let party=false;
//     let gift=false;
//     if(gift){
//         resolve();
//     }
//     else{
//         reject();
//     }
//     function partyon(){
//         if(partyon){
//             resolve("party on");
//         }
//         else{
//             reject("no party");
//         }
//     }
// });
// // console.log(treet);
// treet.then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })

// let treet = new Promise(function(resolve ,reject){
//     let party=false;
//     let gift=true;
//     if(gift){
//         if(party){
//             resolve("party on");
//         }
//         else{
//             reject("no");
//         }
//     }
//     else{
        
//             reject("party off");
        
//     } 
// });

// treet.then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })



let enter = new Promise(function(resolve, reject) {
    resolve("Enter the ATM");
});

let insert = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            let isInserted = true;
            if (isInserted) {
                resolve("Insert the card");
            } else {
                reject("No card inserted");
            }
        }

       ,10000 )
    });
}

let pin = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            let isPinEntered = true;
        if (isPinEntered) {
            resolve("Enter the pin");
        } else {
            reject("Pin not entered");
        }
        },10000)
    });
}

let withdraw = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            let isWithdrawn = true;
        if (isWithdrawn) {
            resolve("Withdraw the money");
        } else {
            reject("No money withdrawn");
        }
        },5000)
    });
}
let cash = function(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            let isCash = true;
        if(isCash){
            resolve("collect the cash");
        }else{
            reject("no collect");
        }
        },5000)
    })
}
let leave = function(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            let isLeave = true;
        if(isLeave){
            resolve("leave the Atm");
        }else{
            reject("no leave");
        }
        },5000)
    })
}

// Chaining the promises


enter
    .then((message) => {
        console.log(message);
        return insert();
    })
    .then((message) => {
        console.log(message);
        return pin();
    })
    .then((message) => {
        console.log(message);
        return withdraw();
    })
    .then((message) => {
        console.log(message);
        return cash();
    })
    .then((message) => {
        console.log(message);
        return leave();

    }).then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });

