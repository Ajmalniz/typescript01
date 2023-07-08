var guest = ["Zia Khan", "Irfan Malik", "Hisham Sarwar"];
for (var i = 0; i < guest.length; i++) {
    console.log("\nMr " + guest[i] + " You're invited to join us for a delightful dinner filled with good food, great company, and lasting memories");
}
console.log("we are sorry to infrom all of the guest that Mr " + guest.pop() + " can not join us today");
guest.push("Imran Ali");
console.log(" Hurrah ! just got call from resort that bigger table is available so 3 more people will join us ");
//we have to add 3 element into array at start ,middle and in the last
// for start element i will use unshift
//for miidle element i will use string splice
// for last element i will use push()
guest.unshift("Matt Pocock");
guest.splice(Math.floor(guest.length / 2), 0, "Daniyal Nagori");
guest.push("Adil Ali");
var count = guest.length;
console.log("\n I am inviting total ".concat(count, " guests let send invitation to all of them \n"));
for (var i = 0; i < count; i++) {
    console.log("\nMr " + guest[i] + " You're invited to join us for a delightful dinner filled with good food, great company, and lasting memories");
}
