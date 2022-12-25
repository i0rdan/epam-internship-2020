//test function 1
function multiply(...args) {
    return args.reduce(
        (a, b) => {
            return a * b;
        },
    1);
}

//test function 2
function sum(...args) {
    return args.reduce(
        (a, b) => {
            return a + b;
        },
    0);
}

//main function
function f(x, ...fns) {
    let checkFunc = true;

    fns.forEach(elem => {
        if(!elem) {
            checkFunc = false;
        }
    });

    if(x && checkFunc) {
        let result = fns.reduce(
            (a, b) => {
                return a + b
            }, 
        0);

        return x + result;
    }

    else {
        throw new Error('Wrong arguments');
    }
}

//bound function f
let partial = f.bind(null, 'Total sum: ');

//example
console.log(partial(sum(1,3,45,6), multiply(1,6,10), sum(11,323,435,644), sum(12,3,4,6),));