let guestlist : string[]=[`Rabia`,`Saba`,`Javeria`,`Zakia`,`Maheen`, `Manza`,`Faria`];
for(let i=0; i<guestlist.length; ++i){
    console.log(`Respected Madam `+ guestlist[i] + `,\nWe invited you to dinner on the first day of eid.\n\nThank You\n`)
}
let notcoming:string="Saba";
let newguest: string= "bushra";
guestlist[2]= newguest;

for(let i=0; i<guestlist.length; ++i){
    console.log(`Respected Madam`+guestlist[i] + `,\nWe invited you to dinner on the first day of eid.\nThank You\n`)
}
console.log(`Madam.${notcoming}\nwill not come to dinner on the first day of eid`);