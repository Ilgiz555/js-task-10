// 2 задание cделал

class Cars {
    constructor(carModel, year, enginePower, color) {
        this.carModel = carModel;
        this.year = year;
        this.enginePower = enginePower;
        this.color = color;
    }

    showInfo() {
        return `This car is a ${this.carModel} model, build in ${this.year} year, car has ${this.enginePower} horsepower engine, car color ${this.color}.`;
    }
}

class ElectroCars extends Cars {
    constructor(carModel, year, enginePower, color, batteryCapacity) {
        super(carModel, year, enginePower, color);
        this.batteryCapacity = batteryCapacity;
    }

    showInfo() {
        return `This is a ${this.year} ${this.carModel} electric car, engine power ${this.enginePower} horsepower, battery capacity ${this.batteryCapacity} kilowatts, car color is ${this.color}.`;
    }

    promote() {
        let currentHour = new Date().getHours()
        if (currentHour > 9 && currentHour < 18) {
            return "Welcome! Only today and only for you we have a limited offer to buy a Tesla model X for only $49999. Do not miss your chanse to become the exclusive onwer of Tesla model X.";
        } else {
            return "We are currently closed, come tomorrow from 9 am to 6 px.";
        }
    }
} 


const BMW = new Cars("BMW", "2019", "350", "black");
const Tesla = new ElectroCars("Tesla", "2020", "450", "white", "85");


console.log(BMW.showInfo());
console.log(Tesla.showInfo());
console.log(Tesla.promote());





// 1 задание не сделал
/*
class Restaurant {
    constructor(name, cuisineType) {
        this.name = name;
        this.cuisineType = cuisineType;
    }

    showInfo() {
        return `${this.name} is a restairant of ${this.cuisineType} meal.`;
    }

    isOpen() {
        let currentHour = new Date().getHours()
        let currentDay = new Date().getDay()
        //0 = sun; 1 = mon; 2 = tue; 3 = wed; 4 = thu; 5 = fri; 6 = sat
        if (currentDay === 6 || currentDay === 0) {          
            return `${this.name} is closed`; 
        } else {
            if (currentHour > 9 && currentHour < 22) {
                return `${this.name} is open.`;
            } else {
                return `${this.name} is closed.`;
            }
        }
    }

    serve() {

    }
}

const beshBarmak = new Restaurant("Besh Barmak", "kyrgyz");
//const vasya = new Restaurant("Vasya", "russian");

console.log(beshBarmak.showInfo());
console.log(beshBarmak.isOpen());
//console.log(vasya.showInfo());
*/





