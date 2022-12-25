//filter function
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

//main function
function averageEven(mas) {
    if(!Array.isArray(mas)) {
        throw new Error('Argument should be an array');
    }

    mas.forEach(elem => {
        if(typeof elem !== 'number') {
            throw new Error('Array should include only numbers');
        }
    });

    let evenNumbers = mas.filter((a) => {
        return !(a % 2);
    });
    
    return evenNumbers.reduce((a, b) => {
        return a + b
    }, 
    0) / evenNumbers.length;
}


//example
console.log(averageEven([1,4,5,6]))