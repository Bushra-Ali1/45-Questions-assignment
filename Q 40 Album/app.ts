function myAlbum(artistName: string, 
    albumTitle :string
){
    return{artistName, albumTitle}
}
let album1 = myAlbum("Atif Aslam", "Tery sang yara");
let album2 = myAlbum("Arijit Singh", "Channa mereya");
let album3 = myAlbum("Ali", "Rang e muhabbat");

console.log(album1);
console.log(album2);
console.log(album3);

function myAlbum2(artistName: string,  albumTitle :string,numberOfTracks?: number){
    return{artistName, albumTitle, numberOfTracks}
}
let album4 = myAlbum2("Atif Aslam", "Tery sang yara", 15);
let album5 = myAlbum2("Rahat Fateh Ali Khan", "Rahat", 30);
let album6 = myAlbum2("Ali Zafar", "Jhoom", 20);

console.log(album4);
console.log(album5);
console.log(album6);