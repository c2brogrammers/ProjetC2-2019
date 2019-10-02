const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.saveUser = functions.https.onRequest( async (req, res) => {
    let user = { 
        email: req.body.Email,
        fullName: req.body.FullName,
        id: req.body.ID,
        uid: req.body.UID
    };
    let save = await admin.firestore().collection('users').add({user: user});
    res.json({result: `User with ID: ${save.id} added.`});
});

exports.getUserByEmail = functions.https.onRequest( async (req, res) => {
    let reqestEmail = req.query.email;
    new Firebase(users)
    .orderByChild('email')
    .startAt(reqestEmail)
    .endAt(reqestEmail)
    .once('value', function(snap){
        var foundUser = snap.val();
        // console.log(foundUser) // output is correct now
        res.json({result: foundUser});
    });
    
});