var img = document.getElementsByTagName("img")[0];
var dTiendas = document.getElementById("dTiendas");

function hideLoader() {
    img.style.display = "none";
    dTiendas.style.display = "flex";
}


export function makeTienda(tiendaDatos) {

    tiendaDatos.forEach(tiendaDato => {
        dTiendas.appendChild(makeCardElements(tiendaDato.nombreTienda, tiendaDato.localidad, tiendaDato.telefono));
        
    });
}

function makeCardElements(cName, cLocation, cNum) {
    var nameEle = document.createElement("h2");
    var nameTxt = document.createTextNode(cName);
    nameEle.appendChild(nameTxt);

    var locationEle = document.createElement("span");
    var locationTxt = document.createTextNode(cLocation);
    locationEle.appendChild(locationTxt);

    var numEle = document.createElement("span");
    var numTxt = document.createTextNode(cName);
    numEle.appendChild(numTxt);

    var cardEle = document.createElement("div");
    cardEle.classList.add("dCards")
    cardEle.appendChild(nameEle);
    cardEle.appendChild(locationEle);
    cardEle.appendChild(numEle);
    hideLoader();

    return cardEle;

}