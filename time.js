// 1. je vais identifier ma balise ou l'heure devra apparaître ce sera tjs celle de Belgique #const
const localisation = document.querySelector("div.time1");


const refresh = function refresh () {
    //Dans localisation qui pointe sur la div on veux indiquer l'heure de belgique
    const output=  localisation.querySelector("output");
    const present = luxon.DateTime.now();
    output.innerHTML = present.toFormat("DDDD/HH:mm:ss");
    
}
refresh();
setInterval(function () {
    refresh();
},1000)

