let guesty : string[] = ["taha","assam","anas","rafay"];
guesty.splice(0,0, "Darwin");
guesty.splice(1,1, "Ghazali");
guesty.splice(2,2, "taha"); 
guesty.forEach(guest=>{
    console.log(`dear${guest}please join our dinner`);
});
console.log(`Due to shortage of food we can afford two mehman only`);
while(guesty.length>2)
 {   let notcomingguesty = guesty.pop();
console.log(`Dear ${notcomingguesty},youre not coming to the dinner`); 
}
guesty.forEach(guest=>{
    console.log(`Dear ${guest},youre coming`);
});