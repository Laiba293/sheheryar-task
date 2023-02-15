//reverse array using buildin function

/* let array = [14 , 26 , 28 , 22 , 17]
 
let reversedArray = array.reverse();
console.log(reversedArray);*/






//reverse array without buildin function

/*let array = [20 , 28 , 30 , 32 , 47]

let reversedArray =[];
for(let i = array.length; i>=0; i--){
   reversedArray.push(array[i]);
}
console.log( reversedArray);*/







// remove double array by using set() method
/*var array = [10 , 20 , 30, 10 , 20 , 30, 10 , 20 , 30 , 10 , 20 , 30 , 10 , 20 , 30];

let newUniqueArray = [... new Set(array)];
console.log(newUniqueArray);*/

// remove double array by using filter() method
/*var array = [10 , 20 , 30, 10 , 20 , 30, 10 , 20 , 30 , 10 , 20 , 30 , 10 , 20 , 30];
var removeArray = array.filter((value , index) => array.indexOf(value) == index);
console.log(removeArray);*/







// by using for each loop
/*var array = [10 , 20 , 30, 10 , 20 , 30, 10 , 20 , 30 , 10 , 20 , 30 , 10 , 20 , 30];
let unique =[]
array.forEach(element=>{
    if(!unique.includes(element)){
        unique.push(element)
    }

})
console.log(unique);*/


//find second largest number in array


// let arr = [12, 35, 1, 10, 34, 1] 
// findSecondLargestElem(arr);

// function findSecondLargestElem(arr) {
//     let first = -1, second = -1;
//     for (let i = 0; i <= arr.length - 1; i++) {
//         if (arr[i] > first) {
//             second = first;
//             first = arr[i];
//         } else if (arr[i] > second && arr[i] != first) {
//             second = arr[i];
//         }
//     }
//     console.log(second);
// }



//find a prime number



let num = 10;
var isPrimeNumber = true;
for(let i = 2; i < num; i++){
    if( num % i == 0){
        isPrimeNumber = false;
    }
}
if(isPrimeNumber == true){
    console.log(`${num} is a prime number`);
}else{
    console.log(`${num} is not a prime number`);
}















