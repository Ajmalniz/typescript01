function make_shirt(size, msg) {
    if (size === void 0) { size = "Large"; }
    if (msg === void 0) { msg = "I love Type Script"; }
    console.log("creating ".concat(size, " shirt with message ").concat(msg));
    return;
}
make_shirt("XL", "Dil Dil Pakistan");
make_shirt();
make_shirt(undefined, "PAIAC");
make_shirt("small");
