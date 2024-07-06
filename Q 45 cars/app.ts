// function make_car(manufacturer: string,
//     model: string,...options:[string, any][]):object{
// let car = {manufacturer, model}
// options.forEach(([key, value]) => car[key] = value);
// return car;
//     }
// console.log(make_car("Toyota", "Corolla",["colour", "red"], ["year", 2020]));
// console.log(make_car("Ford", "Fiesta",["colour", "blue"], ["sunroof", true]));



interface Car {
    manufacturer: string;
    model: string;
    color?: string;
    [key: string]: any; // Allow any other properties
}

function createCar(manufacturer: string, model: string, options: { [key: string]: any } = {}): Car {
    return { manufacturer, model, ...options };
}


const car = createCar("Toyota", "Ford", { year: 2021, color: "Blue", sunroof: true });
console.log(car);