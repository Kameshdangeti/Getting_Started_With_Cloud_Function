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