var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var favpla = ["Makkah", "Madina", "Palestine", "India"];
console.log("The Main order is this", favpla);
console.log("By Alphabetical Order ", __spreadArray([], favpla, true).sort()); //.sort operator arrays ke andr mojod variables ya values ko alphabetical order ma arrange krdeta ha or ...spread operator ha jo use hota ha copy krne ke lie
console.log("The Main order is this", favpla);
console.log("Im gonna reverse my array order using .reverse()", __spreadArray([], favpla, true).sort().reverse());
console.log("The Main order is this", favpla); //Hows that
favpla.reverse();
console.log("Oppositte order is", favpla);
favpla.reverse();
console.log("Starting order is", favpla);
favpla.sort();
console.log("its an alphabetical order like this :   ", favpla);
favpla.reverse();
console.log("Oppositte order si this :   ", favpla);
