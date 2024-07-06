let guestlist : string[]=[`Rabia`,`Saba`,`Javeria`,`Zakia`,`Maheen`, `Manza`,`Faria`];
// for(let i=0; i<guestlist.length; ++i){
//     console.log(`Respected Madam `+ guestlist[i] + `,\nWe invited you to dinner on the first day of eid.\nThank You\n`)
// }
let notcoming: string="Saba";
let newguest: string= "bushra";
guestlist[2]= newguest;

for(let i=0; i<guestlist.length; ++i){
    console.log(`Respected Madam`+guestlist[i] + `,\nWe invited 
        you to dinner on the first day of eid.\n\nThank You\n`)
}
console.log(`Respected Madam.${notcoming}\nwill not come to dinner on the first day of eid`);

guestlist.unshift('Maria', 'Shah noor', 'Hira noor');
for(let i=0; i<guestlist.length; ++i){
    console.log(`Respected Madam `+ guestlist[i] + `,\nWe invited you to dinner on the first day of eid.we found big table so we decided to invite 3 more guests\nThank You\n`)
 }