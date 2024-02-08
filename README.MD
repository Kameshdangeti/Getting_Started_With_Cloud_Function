**Table Of Contents**

**Objective**: The guide below show the steps for the getting started to cloud functions.

## a.Setting Up the Project
##### ->Firstly create a folder to your project and call the directory in the powershell.
##### ->Next we should install firebase CLI as a Dev dependency,which lets npm knows that this is for development.
###### ------------>npm i firebase-tools -d
##### ->Once CLI is installed we can use npm as npx.
##### ->Now we should login in to the project as:
###### ------------>npx firestore-login
##### ->Now we will initialize the function in the firebase as:
###### ------------>npx firebase init functions
##### ->Then the system prompts some otions as use an existing project,create new project and so on.
##### ->If you already created a project tap on the use an existing or the other one to create new project.
##### Next it prompts what language do you need TypeScript,JavaScript prefer anyone of that,My opinion will be JavaScrit.And after it ask about eslint prefer to tap "No".
##### ->After that it will ask yes or no to install the dependencies with npm,tap "yes" again it will install everything. 

## b.Project Structure and function Anatomy
##### ->Open project folder in vs code.Now we can see the files like index.js,package.json and so on it was created by Firbase CLI.
##### ->Now open the "index.js" file in that we will import the function in 2 ways by using Esm and Cjs as
// ESM
            import * as functions from 'firebase-functions/';
            import * as functions from 'firebase-functions/';


// CJS
const functions = require('firebase-functions');
##### ->Commonjs or cjs has been the mainmodule system for many years.But Ecosystem is embracing and moving to esm because it unifies the module system between nodeand browser.
##### ->And next is function version as:
            import * as v2 from 'firebase-functions/v2';
            import * as v1 from 'firebase-functions/v1';
##### ->In both of them we use version 2,now we create function name and event type and one of the commaon events are Https Events as :
##### ->export const helloworld = v2.https.onRequest((request, response) =>){} 

## c.https events:handling request and responses
##### ->In Https functions,you will has request and response as argumens.It allows to inspect request.
##### ->Imagine we are creating e-commerce site whenever a request is given to function it should on the lamp and like every other example as below :
            export const helloworld = v2.https.onRequest((request, response) =>{
                const name = request.params[0].replace('/',' ');
                const items = {lamp: 'This is a lamp', chair: 'This is a chair', hello: 'hello world'};
                const message = items[name];
                response.send(`<h1>${message}</h1>`);
            });
##### ->Now Whenever we given "lamp" as request it should give respones as "This is lamp".To see that we should run the emulator suite.

## d.Running Emulator Suite
##### ->To run the firebase emulator suite we need to run a command from firebase CLI.
##### ->Now open another terminal tab in powershell and open "function" directory and run server as follows:
###### ---------->npm run serve.
##### ->Next it will print an url for testng in terminal.And it will also spin up local UI that prints ou logs from function that can be seen in firebase emulator suite.
##### ->You can see the url similar as http://localhost:5001/My-Fun-Project/us-central1/helloworld.Copy and paste it on new browser tab.It shows undefined that means thee is a bug.

## e.Setting up Breakpoints debugging in functions and deploy it.
##### ->To debug functions breakpoints we should add "debugger" in it as:
          export const helloworld = v2.https.onRequest((request, response) =>{
                debugger;
                const name = request.params[0].replace('/',' ');
                const items = {lamp: 'This is a lamp', chair: 'This is a chair', hello: 'hello world'};
                const message = items[name];
                response.send(`<h1>${message}</h1>`);
            });
##### ->Now go to package.json file add aline as:
###### -----------> "dev": "firebase emulators:start --inspect-functions --only functions",
##### ->Now run the dev command in secondly opened powershell terminal tab.Now emulators get started,and we will se a section of debugger that can be overcomed by opening a special url called chrome Inspect.
##### ->In that webpage we can see option name inspect,Click it we can a tab of Dev Tools.Now go to the tab where you copied the link add text as "lamp" it shows the output as "This is a lamp" in webpage.
##### ->Now Open the another terminal in powershel and change the directory as "function" and deploy it using "npm run deploy".
##### ->Functions are deployed without any error.