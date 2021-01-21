// If else statement
let num = 10;

if (num > 10)
    console.log("Number 10 is lesser than", num);
else if (num == 10)
    console.log("Number 10 is equat to", num);
else 
    console.log("Number 10 is greater than", num);


// Switch case statement
let role = "amgad";

switch (role){
    case "guest":
        console.log("Guest User");
        break;
    case "moderator":
        console.log("Moderator User");
        break;
    default:
        console.log("Unknown User");
}

// Same code but cleaner
if (role === "guest") console.log("Guest User");
else if (role === "moderatro") console.log("Guest User");
else console.log("Unknown User");
