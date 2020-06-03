var socket = io();

socket.on('selectedBrand', function (naam, kleur, tekst) {
    document.getElementById("naam").innerHTML = naam;
    document.getElementById("tekst").innerHTML = tekst;
    document.getElementById("naam").style.color = kleur;
    document.getElementById("tekst").style.color = kleur;
    document.body.style.backgroundImage = "url('/media/" + naam + "background.png')";
});
