function myAlbum(artistName, albumTitle) {
    return { artistName: artistName, albumTitle: albumTitle };
}
var album1 = myAlbum("Atif Aslam", "Tery sang yara");
var album2 = myAlbum("Arijit Singh", "Channa mereya");
var album3 = myAlbum("Ali", "Rang e muhabbat");
console.log(album1);
console.log(album2);
console.log(album3);
function myAlbum2(artistName, albumTitle, numberOfTracks) {
    return { artistName: artistName, albumTitle: albumTitle, numberOfTracks: numberOfTracks };
}
var album4 = myAlbum2("Atif Aslam", "Tery sang yara", 15);
var album5 = myAlbum2("Rahat Fateh Ali Khan", "Rahat", 30);
var album6 = myAlbum2("Ali Zafar", "Jhoom", 20);
console.log(album4);
console.log(album5);
console.log(album6);
