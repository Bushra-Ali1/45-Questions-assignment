var guestlist = ["Rabia", "Saba", "Javeria", "Zakia", "Maheen", "Manza", "Faria"];
for (var i = 0; i < guestlist.length; ++i) {
    console.log("Respected Madam " + guestlist[i] + ",\nWe invited you to dinner on the first day of eid.\n\nThank You\n");
}
var notcoming = "Saba";
var newguest = "bushra";
guestlist[2] = newguest;
for (var i = 0; i < guestlist.length; ++i) {
    console.log("Respected Madam" + guestlist[i] + ",\nWe invited you to dinner on the first day of eid.\nThank You\n");
}
console.log("Madam.".concat(notcoming, "\nwill not come to dinner on the first day of eid"));
