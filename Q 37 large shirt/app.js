function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Making a ".concat(size, " T-shirt with the message \"").concat(message, "\" printed on it"));
}
make_shirt();
make_shirt("medium");
make_shirt("samll", "Dive into coding");
