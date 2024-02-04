//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express(); //creates an express application
const port = 3000; //runs on port 3000

function passwordChecker(req, res, next){
    if(req.body["password"] === correctPassword){
    authorizedAccess = true;
    }
    next();
}

app.get("/", (req, res) => { //get method to request the resources
  res.sendFile(__dirname + "/public/index.html");
});



app.post("/check", (req, res) => {
  if (userIsAuthorised) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
    //Alternatively res.redirect("/");
  }
});

/*
Goal
We need to redirect based on 
- a password = ILoveProgramming
--> redirect to the /secrets route
- if password !== ILoveProgramming
--> back to the / route

1) Install and apply bodyParser correctly
2) Create a variable to hold as false as the default
3) Create a variable to store the password
4) Create a function called passwordChecker to ensure that if the body.parser["password"] === storedPassword
--> if true then we make the authorizedAccess = true;
5) Create a get route 
6) Create a post route with the conditional statement that if authorizedAccess = true --> redirect to the secret HTML
6b) if authorizedAccess is false then we redirect back to the home page via res.sendFile or the redirect method ("/") 
7) Create a listen route
*/