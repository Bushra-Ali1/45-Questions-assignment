let personName: string= "Babar"
console.log("lowerCase:",personName.toLowerCase());
console.log("upperCase:",personName.toUpperCase());
console.log("titleCase:",personName.replace(/\bw/g,c=>c.toUpperCase()));
