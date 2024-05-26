var mehman = ["taha", "assam", "anas", "rafay"];
mehman.splice(0, 0, "Darwin");
mehman.splice(1, 1, "Ghazali");
mehman.splice(2, 2, "taha");
mehman.forEach(function (guest) {
    console.log("dear".concat(guest, "please join our dinner"));
});
