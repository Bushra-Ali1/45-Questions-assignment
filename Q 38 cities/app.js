function describe_city(nameOfCity, country) {
    if (country === void 0) { country = "Germany"; }
    return "".concat(nameOfCity, " is in ").concat(country);
}
var city1 = describe_city("Karachi", "Pakistan");
var city2 = describe_city("Cape Town", "South Africa");
var city3 = describe_city("Berlin");
console.log(city1);
console.log(city2);
console.log(city3);
