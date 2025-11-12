//! multiplyer by 10 example
// function createNewMumtiplying(n){
//     return function(){
//         console.log(10 * n);
//     }
// }

// const calc = createNewMultiplying(5);
// calc(); // Outputs: 50

//! example on gifts without closure
// function packGift(item, boxes){
//     return `You have packed ${item} into ${boxes.pop()} boxes. Boxes left: ${boxes.length}`;
// }

// let boxes = Array.from('📦📦🎁📦📦📦📦🎁🎁');

// console.log(packGift('🧸', boxes));
// console.log(packGift('🔑', boxes));
// console.log(packGift('📀', boxes));

//! example on gifts with closure
// function chooseBox(boxes){
//     return function(gift){
//         console.log(`You have packed ${gift} into ${boxes.pop()} boxes. Boxes left: ${boxes.length}`);
//     }
// }

// let box = Array.from('📦📦🎁📦📦📦📦🎁🎁');
// let packGift = chooseBox(box);
// packGift('💐');
// packGift('♥');
// packGift('📱');

//! example on gifts with closure array functions 

// const chooseBox = (boxes) => (gift) => {
//     console.log(`You have packed ${gift} into ${boxes.pop()} boxes. Boxes left: ${boxes.length} and ${boxes}` );
// };

// const box = Array.from('📦📦🎁📦📦📦📦🎁🎁');
// const packGift = chooseBox(box);

// packGift('💐');
// packGift('♥');
// packGift('📱');

//! example callback DO THE CHORES IN OREDER

// function walkTheDog(call){
//     setTimeout(( )=>{
//         console.log("you walk the dog 🐶");
//         call();
//     }, 1500);
// }

// function cleanTheCicthen(callback){
//     setTimeout(( )=>{
//         console.log("you clean the citchen 🧼");
//         callback();
//     }, 2500);
// }

// function takeOutTheTrash(callback){
//     setTimeout(( )=>{
//         console.log("you take out the trash 🦺");
//         callback();
//     }, 500);
// }

// walkTheDog(() => {
//     cleanTheCicthen(() => {
//         takeOutTheTrash(() => console.log("you finished all the chores!"))
//     })
// })

//! example callback DO THE CHORES IN OREDER

function walkTheDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const presenceOfDog = true;
            if (presenceOfDog){
                resolve("you walk the dog 🐶");
            }else{
                reject('you dont have a dog')
            }

        }, 1500)
    })
}

function cleanTheCicthen(){
    return new Promise((resolve, reject) => {
        setTimeout(( )=>{
            const status = false 
            if (status){
                resolve("you clean the citchen 🧼");
            } else{
                reject("kitchen is clean")
            }
        }, 2500);
    })
}

function takeOutTheTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(( )=>{
            resolve("you take out the trash 🦺");
        }, 500);
    })
}

walkTheDog().then(value => {console.log(value); return cleanTheCicthen()})
    .then(value => {console.log(value); return takeOutTheTrash()})
    .then(value => {console.log(value); console.log("all chores are finished")})
    .catch(error => console.error(error));
