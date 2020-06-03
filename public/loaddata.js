$(document).ready(function() {
    var firebaseConfig = {
        apiKey: "AIzaSyAvHOmhnKqmSNppNyUmd2-Je3S3Oiq59cc",
        authDomain: "dynamicbrandingvenue.firebaseapp.com",
        databaseURL: "https://dynamicbrandingvenue.firebaseio.com",
        projectId: "dynamicbrandingvenue",
        storageBucket: "dynamicbrandingvenue.appspot.com",
        messagingSenderId: "7578773531",
        appId: "1:7578773531:web:a0cc3e1edb18c2f2f770be",
        measurementId: "G-6BQJMPH6JH"
    };
// Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    var query = firebase.database().ref("partners");
    query.once("value")
        .then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {

                // defining all the different type of data that is stored in the database
                var logourl = childSnapshot.val().logourl;
                var naam = childSnapshot.val().naam;
                var hoofdkleur = childSnapshot.val().hoofdkleur;
                var accentkleureen = childSnapshot.val().accentkleureen;
                //var ake = childSnapshot.val().accentkleureen;
                //var akt = childSnapshot.val().accentkleurtwee;
                var slogan = childSnapshot.val().slogan;

                // create an alement that contains the data from the database
                let partner = document.createElement('div');
                partner.setAttribute('id', naam);
                partner.setAttribute('class', 'partner');
                partner.setAttribute('onclick', 'changeBrand(' + '\'' + naam + '\', \'' + hoofdkleur + '\', \'' + accentkleureen + '\', \'' + slogan + '\'' + ')');

                // create an image element that consists of the brand logo that is pulled from the database
                let logo = document.createElement('img');
                logo.setAttribute('class', 'logo');
                logo.setAttribute('src', logourl);

                // appending both elements created above to the body
                partner.appendChild(logo);

                document.getElementById('partners').appendChild(partner);



            });

        });

});