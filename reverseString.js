// Create a function that reverses a string:
// 'Hi my name is Juan' should be: 
// 'nauJ si eman ym iH'

// solution 1

function reverseString(str) {
    // check to see if input is a string or isn't just one letter
    if (!str || str.length < 2 || typeof str !== 'string') return "Hmm that's not a string";

    // make a variable that converts our string to an array
    // create 2 pointers. 1 at the beggining and one at the end
    let strArr = [...str];
    let left = 0;
    let right = strArr.length - 1;
    
    // create a while loop that stops when beggining pointer > end pointer
    while (left < right) {
        // swap values at the indexes of our pointers
        [strArr[left], strArr[right]] = [strArr[right], strArr[left]];

        // move beggining pointer up and end pointer down
        left++;
        right--;
    }
    
    // convert our array to a string and return our string
    return strArr.join("");
    
}

// solution 2

function reverseString2(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('Hi my name is Juan')); // 'nauJ si eman ym iH'
console.log(reverseString2('Hi my name is Juan')); // 'nauJ si eman ym iH'
// console.log(reverseString3('Hi my name is Juan')); // 'nauJ si eman ym iH'
