interface Builder<T> {
    build(): T
}

class CarNoodlesSet {
    carNoodles: CarNoodles
    beverage: string
    
    private constructor (carNoodles: CarNoodles, beverage: string) {
        this.carNoodles = carNoodles;
        this.beverage = beverage;
    }

    static Builder = class implements Builder<CarNoodlesSet> {
        carNoodles: CarNoodles
        beverage: string = "Hot Water";

        constructor(carNoodles: CarNoodles) {
            this.carNoodles = carNoodles;
            return this;
        }

        setBeverage(beverage: string) {
            this.beverage = beverage;
            return this;
        }

        build() {
            return new CarNoodlesSet(this.carNoodles, this.beverage);
        }
    }

    toString() {
        return `${this.carNoodles.toString()}, ${this.beverage}`;
    }
}

enum RiceOrNoodle {
    Rice,
    Noodle
}

interface CarNoodles {
    riceOrNoodle: RiceOrNoodle
    toString(): string
}

class TwoSideCarNoodles implements CarNoodles {
    riceOrNoodle: RiceOrNoodle = RiceOrNoodle.Rice;
    
    private constructor (riceOrNoodle: RiceOrNoodle) {
        this.riceOrNoodle = riceOrNoodle;
    }

    static Builder = class implements Builder<TwoSideCarNoodles> {
        riceOrNoodle: RiceOrNoodle = RiceOrNoodle.Rice

        constructor(riceOrNoodle: RiceOrNoodle) {
            this.riceOrNoodle = riceOrNoodle;
        }

        set_TwoSideCarNoodles_OptionalChoice() {
            // placeHolder
            return this;
        }

        build() {
            return new TwoSideCarNoodles(this.riceOrNoodle);
        }
    }

    toString() {
        return `TwoSideCarNoodles: ${this.riceOrNoodle}}`;
    }
}

class ThreeSideCarNoodles implements CarNoodles {
    riceOrNoodle: RiceOrNoodle = RiceOrNoodle.Rice

    private constructor (riceOrNoodle: RiceOrNoodle) {
        this.riceOrNoodle = riceOrNoodle;
    }

    static Builder = class implements Builder<ThreeSideCarNoodles> {
        riceOrNoodle: RiceOrNoodle = RiceOrNoodle.Rice

        constructor(riceOrNoodle: RiceOrNoodle) {
            this.riceOrNoodle = riceOrNoodle;
        }

        set_ThreeSideCarNoodles_OptionalChoice() {
            // placeHolder
            return this;
        }

        build() {
            return new ThreeSideCarNoodles(this.riceOrNoodle);
        }
    }

    toString() {
        return `ThreeSideCarNoodles: ${this.riceOrNoodle}}`;
    }
}

console.log(
    new CarNoodlesSet
    .Builder(new TwoSideCarNoodles
        .Builder(RiceOrNoodle.Rice)
        .set_TwoSideCarNoodles_OptionalChoice()
        .build()
    )
    .setBeverage("Ice Milk Tea")
    .build()
);

console.log(
    new CarNoodlesSet
    .Builder(new ThreeSideCarNoodles
        .Builder(RiceOrNoodle.Noodle)
        .set_ThreeSideCarNoodles_OptionalChoice()
        .build()
    )
    .setBeverage("Ice Lemon Tea")
    .build()
);

// // Error is intended
// new TwoSideCarNoodles('Khalil Stemmler');

// // Error is intended
// new ThreeSideCarNoodles('Khalil Stemmler');

// // Error is intended
// new CarNoodlesSet('Khalil Stemmler');
