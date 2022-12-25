// main function
function multiply(a) {
    let current = a;

    function f(b) {

        if(typeof b !== 'number' || typeof a !== 'number') {
            throw new Error('Arguments should have number type');
        }

        current *= b;
        return f;
    }

    f.toString = function() {
        return current;
    };

    return f;
}


// example
console.log(multiply(5)(2)(4)(7)(1).toString());