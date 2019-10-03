const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.saveUser = functions.https.onRequest( async (req, res) => {
    // --Validation--
    if (req.method !== 'POST') throw 'Not Found';
    let data = (req.body) || null;
    if(!data){
        return res.status(400).send({ error: 'Body missing' });
    }
    if (data.email) {
        return res.status(400).send({ error: 'Email is required' });
    }
    if (data.fullName) {
        return res.status(400).send({ error: 'FullName is required' });
    }
    if (data.ID) {
        return res.status(400).send({ error: 'ID is required' });
    }
    if (data.UID) {
        return res.status(400).send({ error: 'UID is required' });
    }
    // --End of Validation--

    let user = { 
        email: data.Email,
        fullName: data.FullName,
        id: data.ID,
        uid: data.UID
    };

    let save = await admin.firestore().collection('users').add({user: user});
    res.json({result: `User with ID: ${save.id} added.`});
});

exports.getUserByEmail = functions.https.onRequest( async (req, res) => {
    if (req.method !== 'GET') throw 'Not Found';

    if (!(req.query && req.query.email)) {
        return res.status(400).send({ error: 'Email not provided' });
    }
    let reqestEmail = req.query.email;
    let usersRef = await admin.firestore().collection('users');
    let get = usersRef.where('Email', '==', reqestEmail).get();
    res.json({result: get});
});