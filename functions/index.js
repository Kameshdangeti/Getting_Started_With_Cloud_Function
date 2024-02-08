// ESM
import * as v2 from 'firebase-functions/v2';
import * as v1 from 'firebase-functions/v1';


// CJS
// const functions = require('firebase-functions');
// exports.helloworld

export const helloworld = v2.https.onRequest((request, response) =>{
    debugger;
    const name = request.params[0].replace('/',' ');
    const items = {lamp: 'This is a lamp', chair: 'This is a chair', hello: 'hello world'};
    const message = items[name];
    response.send(`<h1>${message}</h1>`);
});

const usd_to_eur=0.95;

export const newsku =v1.firestore.document('/inventory/{sku}')
.onCreate(snapshot =>{
    const data =snapshot.data();
    const eur=data.usd*usd_to_eur;
    return snapshot.ref.set({eur,...data} , {merge : true});
});