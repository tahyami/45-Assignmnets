let mehman : string[] = ["taha","assam","anas","rafay"];
mehman.splice(0,0, "Darwin");
mehman.splice(1,1, "Ghazali");
mehman.splice(2,2, "taha"); 
mehman.forEach(guest=>{
    console.log(`dear${guest}please join our dinner`);
});