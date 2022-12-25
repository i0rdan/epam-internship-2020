// main function
function multiply(...args) {
    args.forEach(elem => {
        if(typeof elem !== 'number') {
            throw new Error('Arguments should be numbers');
        } 
    });

    return args.reduce((a, b) => {
        return a * b;
    }, 1);
}

//example
console.log(multiply(1,4,2,5,6,2))