//
// File: main.js
// Date: 5/24/2022
// 

//test cases
const ex1 = () => {
    const array = [1, '2', 3, 'test', 1.2];
    // const array = [];
    console.log(countNumbers(array));
}

const ex2 = () => {
    // TODO...
    // const array = [12, 55, 2, 22, 11];
    const array = [287, 6, 88, 0, 25]
    console.log(minNumber(array));
}



    const ex3 = () => {
        // TODO...
        // TODO...
        const array1 = [1, 2, 3, 4, 5];
        const array2 = ['a', 'b', 'c', 'd', 'e'];
        console.log(interleave(array1, array2));
    
        // const array1 = [1, 2];
        // const array2 = ['a', 'b', 'c', 'd', 'e'];
        // console.log(interleave(array1, array2));
    }
    
   const ex4 = () => {

    console.log(palidrome('radar'));
    console.log(palidrome('month'));

    //additional test cases
    console.log(palidrome('otto'));
    console.log(palidrome('racecar'));
    console.log(palidrome('cat'));
    console.log(palidrome('dog'));
   } 
    
   const ex5 = () => {
    let str = "today this is a this is a this is a test.";
    console.log(displayThis(str));this
   }
    

/*
-----------------------------------------------------
*/

//ex 1
const countNumbers = (array) => {
   let numberCounter = 0;
   for (let i = 0; i < array.length; i++) {
       if (typeof(array[i]) === 'number') numberCounter++;
   }
   return numberCounter;
}

//ex 2
const minNumber = (array) => {
    let result = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < result) {
            result = array[i]
        }
    }

    return result;
}

//ex 3

const interleave = (array1, array2) => {

    let newStr = "";
    if (array1.length !== array2.length) {
        return "ERROR: Array length mismatch";
    }

    for (let i = 0; i < array1.length; i++) {
        newStr += array1[i];
        newStr += array2[i];

        // newArr.push(array1[i], array2[i]);
    }


    return newStr;
}

//ex4

const palidrome = (string) => {
    for (let i =0; i <string.length; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }

    return true;
    

}

//ex5

const displayThis = (str) => {
    let count = 0;
    let array = str.split(" ");
for (let i =0; i <array.length; i++){
        if (array[i] === 'this' || array[i] === 'this.') {
            count++;
        }

    }
    return "this appears: " + count + " times."
console.log(str.split(" "))
}

               

const main = async () => {
    // ex1();
    ex5(); 
}

main();
