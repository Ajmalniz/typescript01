function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "Great " + magicians[i];
    }
}
var magicians = ["Asif Zardari", "Nawaz Sharif", "Imran Khan", "Tahir"];
make_great(magicians);
show_magicians(magicians);
