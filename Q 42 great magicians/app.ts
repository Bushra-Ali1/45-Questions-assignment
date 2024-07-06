function show_magicians(magicians:string[]):void {
    magicians.forEach(name => console.log(name))} 

    function make_great (magicians: string[]): string[] {

 return magicians.map(name => `The Great ${name}`);
    }
let magician_names = ["Dynamo", "David", "Herry"];
let copy_magician_names = magician_names.slice();

let great_magicians = make_great(magician_names);
let copy_great_magicians = make_great(copy_magician_names)

show_magicians(great_magicians);
