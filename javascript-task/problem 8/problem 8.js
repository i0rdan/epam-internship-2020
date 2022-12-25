//test function
function f(num) {
    return num * 2;
}

//main function
function cache(func) {
    if(typeof func !== 'function') {
        throw new Error('Cache accept only function');
    }

    let store = {};

    return function g(param) {
        if(typeof param !== 'number' && param) {
            throw new Error('Function accept only number');
        }

        if(store.hasOwnProperty(param)) {
            console.log('Return from cache');
            return store[param];
        }
        else {
            let res = func(param);
            store[param] = res;
            console.log('Stored in cache');
            return store[param];
        }
    }
}

//bound
let cashing = cache(f);

//example
console.log(cashing(4));
console.log(cashing(4));
console.log(cashing(10));
console.log(cashing(10));