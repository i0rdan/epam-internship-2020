// main function
Array.prototype.filter = function (fn) {
    if(typeof fn !== 'function') {
        throw new Error('Argument shold be a function');
    }

    this.forEach(elem => {
        if (typeof elem !== 'number') {
            throw new Error('Array should include only numbers');
        }
    });
    
    let result = [];
	
    for(let i = 0; i < this.length; i++) {
        if(fn(this[i])) {
            result.push(this[i]);
        }
    }
	
    return result;
}

//array
let mas = [1,4,5,6,4];

//examples
console.log(mas.filter((a) => {return a > 4 }));
console.log(mas.filter((a) => {return a % 2 }));
console.log(mas.filter((a) => {return a === 1 }));