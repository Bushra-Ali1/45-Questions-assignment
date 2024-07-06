function describe_city(nameOfCity:string, country:string = "Germany"){
    return `${nameOfCity} is in ${country}`;};
let city1 = describe_city("Karachi", "Pakistan");
let city2 = describe_city("Cape Town","South Africa")
let city3 = describe_city( "Berlin" )

console.log(city1);
console.log(city2);
console.log(city3);
