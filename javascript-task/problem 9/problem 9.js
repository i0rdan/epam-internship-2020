class Shape {
     constructor(name) {
        this.name = name;
    }

    calculateSquare() {}

    calcPer() {}
}

class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);

        if(typeof width !== 'number' && typeof height !== 'number') {
            throw Error ('Width and height should be numbers');
        }
        if(width <= 0 || height <= 0) {
            throw Error ('Width and height should be bigger than 0');
        }

        this.width = width;
        this.height = height;
    }

    calculateSquare() {
        return this.width * this.height;
    }

    calcPer() {
        return 2 * (this.width + this.height);
    }
}

class Square extends Shape {
    constructor(name, sideLength) {
        super(name);

        if(typeof sideLength !== 'number') {
            throw Error ('sideLength should be numbers');
        }
        if(sideLength <= 0) {
            throw Error ('sideLength should be bigger than 0');
        }

        this.sideLength = sideLength;
    }

    calculateSquare() {
        return this.sideLength ** 2;
    }

    calcPer() {
        return 4 * this.sideLength;
    }
}

class ShapesStore {
    constructor(store) {
        if(!Array.isArray(store)) {
            throw new Error('Store should be an array');
        }

        if(store.length) {
            throw new Error('New store should be empty');
        }
        this.store = store;
    }

    addItems(...items) {
        items.forEach(elem => {
            if(!elem instanceof Rectangle || !elem instanceof Square) {
                throw new Error('Store should include only shapes');
            }
        });

        this.store = this.store.concat(items);
    }

    countRecPer() {
        let sumOfRecPer = 0;

        this.store.forEach(shape => {
            if(shape instanceof Rectangle) {
                sumOfRecPer += shape.calcPer();
            }
        });

        return sumOfRecPer;
    }

    countSquareArea() {
        let sumOfSquareArea = 0;
        this.store.forEach(shape => {
            if(shape instanceof Square) {
                sumOfSquareArea += shape.calculateSquare();
            }
        });

        return sumOfSquareArea;
    }
}

let rec1 = new Rectangle('rec1', 4, 5);
let rec2 = new Rectangle('rec2', 40, 15);
let rec3 = new Rectangle('rec3', 3, 25);

let sq1 = new Square('sq1', 50);
let sq2 = new Square('sq2', 30);
let sq3 = new Square('sq3', 4);

let store = new ShapesStore([]);

store.addItems(rec1, rec2, rec3, sq1, sq2, sq3, []);

console.log(store.countRecPer());
console.log(store.countSquareArea());
