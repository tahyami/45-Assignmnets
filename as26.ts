let project : string[]=["Admin","user","user1","user2","user3","user4"];
project.forEach(projectmanager=>{
    if(projectmanager=="admin"){
        console.log("Hello admin,welcome");
    }
    else{
        console.log("Hello user,Enter Password to go");
    }
})