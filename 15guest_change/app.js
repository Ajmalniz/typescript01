var guest = ["Zia Khan", "Irfan Malik", "Hisham Sarwar"];
for (var i = 0; i < guest.length; i++) {
    console.log("\nMr " + guest[i] + " You're invited to join us for a delightful dinner filled with good food, great company, and lasting memories");
}
console.log("we are sorry to infrom all of the guest that Mr " + guest.pop() + " can not join us today");
guest.push("Imran Ali");
for (var i = 0; i < guest.length; i++) {
    console.log("\nMr " + guest[i] + " You're invited to join us for a delightful dinner filled with good food, great company, and lasting memories");
}
