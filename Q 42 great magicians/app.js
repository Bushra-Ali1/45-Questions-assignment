function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magician_names = ["Dynamo", "David", "Herry"];
//let copy_magician_names = magician_names.slice();
var great_magicians = make_great(magician_names);
//let copy_great_magicians = make_great(copy_magician_names)
show_magicians(great_magicians);
