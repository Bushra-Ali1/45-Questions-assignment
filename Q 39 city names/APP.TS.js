function city_country(nameOfCity, country) {
    return "\"".concat(nameOfCity, ", ").concat(country, "\"");
}
;
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Cape Town", "South Africa"));
console.log(city_country("Berlin", "Germany"));
