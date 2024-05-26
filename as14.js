var guesty = ["taha", "assam", "anas", "rafay"];
guesty.splice(0, 0, "Darwin");
guesty.splice(1, 1, "Ghazali");
guesty.splice(2, 2, "taha");
guesty.forEach(function (guest) {
    console.log("dear".concat(guest, "please join our dinner"));
});
console.log("Due to shortage of food we can afford two mehman only");
while (guesty.length > 2) {
    var notcomingguesty = guesty.pop();
    console.log("Dear ".concat(notcomingguesty, ",youre not coming to the dinner"));
}
guesty.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",youre coming"));
});
