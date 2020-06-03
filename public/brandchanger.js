
var socket = io();

function changeBrand(naam, kleur, kleur2, tekst) {
    socket.emit('changeBrand', naam, kleur, tekst);

    //let hexslice = hex.slice(1, 7);

    function toRGBArray(hexNumber) {
        return [(hexNumber >> 16 & 255) / 255, (hexNumber >> 8 & 255) / 255, (hexNumber & 255) / 255]
    }

    function toHSLArray(hexNumber) {
        var rgb = toRGBArray(hexNumber);
        var r = rgb[0];
        var g = rgb[1];
        var b = rgb[2];
        var max = Math.max(r, g, b);
        var min = Math.min(r, g, b);
        var lightness = (min + max) / 2;
        if (min === max) {
            var hue = 0;
            var saturation = 0;
            return [hue, saturation, lightness]
        } else {
            var delta = max - min;
            var hue = 0;
            var saturation = 0;
            saturation = lightness <= .5 ? delta / (max + min) : delta / (2 - max - min);
            switch (max) {
                case r:
                    hue = (g - b) / delta + (g < b ? 6 : 0);
                    break;
                case g:
                    hue = (b - r) / delta + 2;
                    break;
                case b:
                    hue = (r - g) / delta + 4;
                    break
            }
            hue /= 6;
            return [hue, saturation, lightness]
        }
    }
    
    let hex = kleur.slice(1, 7);
    let hsl = toHSLArray(eval("0x" + hex))
    let h = Math.round(hsl[0] * 65536)
    let s = Math.round(hsl[1] * 255)
    let l = Math.round(hsl[2] * 255)

    let hex2 = kleur2.slice(1, 7);
    let hsl2 = toHSLArray(eval("0x" + hex2))
    let h2 = Math.round(hsl2[0] * 65536)
    let s2 = Math.round(hsl2[1] * 255)
    let l2 = Math.round(hsl2[2] * 255)

    let object = {
        on: "true",
        sat: s,
        bri: 254,
        hue: h
    };

    let object2 = {
        on: "true",
        sat: s2,
        bri: 254,
        hue: h2
    };

    var json = JSON.stringify(object);
    var json2 = JSON.stringify(object2);

    $.ajax({
        type: "PUT",
        url: 'http://192.168.4.129/api/xFN8yoCKrX774YKjEe1ap8BlF4aVJPV0g1bYliPL/lights/1/state',
        data: json,
        contentType: "application/json",
    });

    $.ajax({
        type: "PUT",
        url: 'http://192.168.4.129/api/xFN8yoCKrX774YKjEe1ap8BlF4aVJPV0g1bYliPL/lights/2/state',
        data: json2,
        contentType: "application/json",
    });

}
