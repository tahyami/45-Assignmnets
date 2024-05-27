var project = ["Admin", "user", "user1", "user2", "user3", "user4"];
project.forEach(function (projectmanager) {
    if (projectmanager == "admin") {
        console.log("Hello admin,welcome");
    }
    else {
        console.log("Hello user,Enter Password to go");
    }
});
