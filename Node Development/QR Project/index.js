/*
- User Inquirer to take input from the user
- Convert the Input from the user into a QR-Code image
- Create a txt file to save the input taken from the user and the image
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
import { threadId } from "worker_threads";

// Taking a Prompt from the user
inquirer
    .prompt([

        /*
        Question Object is a JSON object of predefined key - value hashes
        - Message: Stores the Question that is presented to the User
        - Name: Stores the location / reference used to access the answer given by the user

        Thus:- 
            URL is the reference which stores the input given by the user while answering the question
        */

        // Question object to be prompted to the user
        {
            "message": "Enter Link for QR Generation",
            "name": "URL"
        }
    ])
    .then((answers) => {

        /*
        Accessing the URL 
        - Answers stores a property URL which as defined above stores the input given by the user
        */

        /*
        Creating the QR-Image on successful input
        - qr.image(
            `String`, 
            `Properties Construct {`Extensions`, `Size`, ... }`
        )*/
        var qr_png = qr.image(answers.URL, {type: "png"});

        // Saving the Image using the fs Native Module
        qr_png.pipe(fs.createWriteStream("qr.png"));

        // Saving the URL in a text file 
        fs.writeFile("url.txt", answers.URL, (err) => {
            if (err) throw err;
            console.log("The file has been saved!!");
        })
    })
    .catch((error) => {
        if (error) throw error;
        else console.log("Something else seems to be wrong");
    })