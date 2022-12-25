//main function
function reduce(array, callback, initial) {
    if(!Array.isArray(array)) {
        throw new Error('Function should accept array argument');
    }

    array.forEach(item => {
        if(typeof item !=='number') {
            throw new Error('Array should include only numbers');
        }
    });

    if(typeof callback !== 'function') {
        throw new Error('Function should accept function argument');
    }

    if(typeof initial !== 'number') {
        throw new Error('Initital value should be number');
    }

    array.forEach(item => {
        initial = initial !== undefined 
        ? callback(initial, item) 
        : item;
    })

    return initial;
}

//test function factorial
function factorial(num) {
    return num === 1 
    ? 1 
    : num * factorial(num - 1);
}

//example
console.log(reduce([1,4,5,2,4], (a, b) => {return a + factorial(b)}, 0));