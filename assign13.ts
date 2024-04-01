//task 13
//var transport = [`civic`,`Audi`,`Lamborgini`,`RX8`];
//var message = `I will own a:`;
// for(var i=0; i< transport.length; i++ ){
   // console.log(message + transport[i]);
 //}
 //task14 
 var guest_list: string[] = [`Abeer`,`Javed`,`Faiz`,`Usman`];
 for(var i=0; i< guest_list.length; i++ )(
    console.log(`Respected sir` + guest_list[i] +`,\nWe invited you for dinner at tuesday.\n\nThank You` )
    )
    export{guest_list}
    //task15
 let not_present : string = `Javed`;
 let new_guest  : string = `Wahaj`;
 guest_list[1] = new_guest;
// for(var i=0; i< guest_list.length; i++ )(
  //  console.log(`Respected sir` + guest_list[i] +`,\nWe invited you for dinner at tuesday.\n\nThank You` )
 //)
 console.log(`Mr. ${not_present} will not coming at tuesday`);
 guest_list.unshift(`Muhammad`,`Ahmed`,`Ahad`);
 //for(var i=0; i< guest_list.length; i++ )(
   //console.log(`Respected sir` + guest_list[i] +`,\nWe invited you for dinner at tuesday. As we found big table so we decided to invite more guest\n\nThank You` )
//)
console.log(`\n Unfortunately we can not arrange big table, Only two people are allow`);
while(guest_list.length>2){
   let remove_guest = guest_list.pop();
   console.log(`SORRY Sir. ${remove_guest} You are not invited for dinner.`);
}
for(var i=0; i< guest_list.length; i++ ){

   console.log(`Respected sir` + guest_list[i] +`,\n You are still invited\n\nThank You` );
}
guest_list.splice(0,2)
console.log(guest_list);

