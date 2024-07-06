function show_magicians(magicians:string[]){
    magicians.forEach(name => console.log(name));
}
function make_great (magicians: string[]): string[] {
    return magicians.map(name => `The great ${name}`);
}
let magicians_names: string[] = ["Dynamo", "David", "Herry"];

let copy_magician_names = magicians_names.slice();
let copy_great_magicians = make_great (copy_magician_names);

console.log("origial Array\n");
show_magicians(magicians_names);

console.log("\nCopied Array\n")
show_magicians(copy_great_magicians);


