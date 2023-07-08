var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var visit = ["Makka", "Disney world", "Silcon Vally", "London", "Tokeyo"];
console.log("Orignal Order");
console.log(visit);
console.log("Sorted array");
console.log(__spreadArray([], visit, true).sort());
console.log(visit);
console.log(__spreadArray([], visit, true).reverse());
console.log(visit);
visit.reverse();
console.log(visit);
visit.reverse();
console.log(visit);
visit.sort();
console.log(visit);
visit.sort().reverse();
console.log(visit);
