var guestnames = ["taha", "rafay", "hashir"];
for (var a = 0; a < guestnames.length; a++) {
    console.log("Dear ".concat(guestnames[a], ",We invited your family on the dinner tomorrow"));
}
var notpresentmemeber = "hashir";
var Newmemeber = "Ali";
console.log("New Members of tomorrow's dinner is\n");
for (var a = 0; a < guestnames.length; a++) {
    console.log("Dear ".concat(guestnames[a], ",We invited your family on the dinner tomorrow"));
}
console.log("".concat(notpresentmemeber, "is not coming on the dinner so the new member is, ").concat(Newmemeber));
