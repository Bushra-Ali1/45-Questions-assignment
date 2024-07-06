// function make_car(manufacturer: string,
//     model: string,...options:[string, any][]):object{
// let car = {manufacturer, model}
// options.forEach(([key, value]) => car[key] = value);
// return car;
//     }
// console.log(make_car("Toyota", "Corolla",["colour", "red"], ["year", 2020]));
// console.log(make_car("Ford", "Fiesta",["colour", "blue"], ["sunroof", true]));
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function createCar(manufacturer, model, options) {
    if (options === void 0) { options = {}; }
    return __assign({ manufacturer: manufacturer, model: model }, options);
}
var car = createCar("Toyota", "Ford", { year: 2021, color: "Blue", sunroof: true });
console.log(car);
