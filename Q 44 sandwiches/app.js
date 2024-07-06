function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with: ".concat(items.join(","), "."));
    console.log("Enjoy your sandwich!");
}
make_sandwich("tomato", "club");
make_sandwich("chicken", "cucumber", "cheese");
make_sandwich("mayo", "mustard", "herby");
