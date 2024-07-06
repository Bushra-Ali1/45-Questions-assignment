var personName = "Babar";
console.log("lowerCase:", personName.toLowerCase());
console.log("upperCase:", personName.toUpperCase());
console.log("titleCase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
