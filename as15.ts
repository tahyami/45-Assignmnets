let favpla : string[]=["Makkah","Madina","Palestine","India"];
console.log("The Main order is this",favpla);
console.log("By Alphabetical Order ",[...favpla].sort());//.sort operator arrays ke andr mojod variables ya values ko alphabetical order ma arrange krdeta ha or ...spread operator ha jo use hota ha copy krne ke lie
console.log("The Main order is this",favpla);
console.log("Im gonna reverse my array order using .reverse()",[...favpla].sort().reverse());
console.log("The Main order is this",favpla);//Hows that
favpla.reverse();
console.log("Oppositte order is",favpla);
favpla.reverse();
console.log("Starting order is",favpla);
favpla.sort();
console.log("its an alphabetical order like this :   ",favpla);
favpla.reverse();
console.log("Oppositte order si this :   ",favpla);


