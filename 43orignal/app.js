var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
function make_great(magicians) {
    var mg = magicians;
    for (var i = 0; i < mg.length; i++) {
        mg[i] = "Great " + mg[i];
    }
    return mg;
}
var magicians = ["Asif Zardari", "Nawaz Sharif", "Imran Khan", "Tahir"];
var copy = make_great(__spreadArray([], magicians, true));
console.log("Origanl");
show_magicians(magicians);
console.log("Copy after adding Great");
show_magicians(copy);
