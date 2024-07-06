var myPizza = ["pepperoni", "bbq chicken", "cheeze"];
for (var i = 0; i < myPizza.length; i++) {
    console.log(myPizza[i]);
    for (var i_1 = 0; i_1 < myPizza.length; i_1++) {
        console.log("I like to eat ".concat(myPizza[i_1]));
    }
}
console.log("\n I really like to eat pizzas.pizzas comes in a varity of flavors and toppings,allowing individuals to customize it to their liking");
