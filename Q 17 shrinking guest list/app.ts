let guestlist : string[]=[`Rabia`,`Saba`,`Javeria`,`Zakia`,`Maheen`, `Manza`,`Faria`];
 for(let i=0; i<guestlist.length; ++i){
    console.log(`Respected Madam `+ guestlist[i] + `,\nWe invited you to dinner on the first day of eid.\nThank You\n`)
 }
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
console.log(`/unfortunately we cannot arrange big table,only two people are allowed. `)
while(guestlist.length>2){

}
    let removeguest = guestlist.pop()
;
console.log(`Sorry Madam,.${'removegust'} you are not invited for dinner,`);
for(let i=0; i<guestlist.length; ++i){
    console.log(`Respected Madam `+ guestlist[i] + `,\nWe invited you to dinner on the first day of eid.we found big table so we decided to invite 3 more guests\nThank You\n`)
 }
 guestlist.splice(0,2);
 console.log(guestlist);
 
