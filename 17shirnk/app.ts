var guest : string []=["Zia Khan","Irfan Malik","Hisham Sarwar"]
for (let i=0; i<guest.length;i++){
    console.log("\nMr " +guest[i] + " You're invited to join us for a delightful dinner filled with good food, great company, and lasting memories")
}
console.log("we are sorry to infrom all of the guest that Mr " + guest.pop() +" can not join us today")
guest.push("Imran Ali")
console.log(" Hurrah ! just got call from resort that bigger table is available so 3 more people will join us ")
//we have to add 3 element into array at start ,middle and in the last
// for start element i will use unshift
//for miidle element i will use string splice
// for last element i will use push()
guest.unshift("Matt Pocock")
guest.splice(Math.floor(guest.length/2),0,"Daniyal Nagori")
guest.push("Adil Ali")
for (let i=0; i<guest.length;i++){
    console.log("\nMr " +guest[i] + " You're invited to join us for a delightful dinner filled with good food, great company, and lasting memories")
}
console.log("\nwe are really sorry to inform you all that new table will not arive on time we have a table of two person only")
while (guest.length > 2){
    console.log("\n MR: " +guest.pop()+" we are really sorry that can not invite you for the dinner")
}
for (let i=0; i<guest.length;i++){
    console.log("\nMr " +guest[i] + " You're  still invited to join us")
}
while (guest.length > 0){
guest.pop()
}
for (let i=0; i<guest.length;i++){
    console.log("\n o hoo list is not empty yet")
}