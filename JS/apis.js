import { makeTienda } from "./tienda.js";

function createCORSRequest(method, url) {
    var xhrReq = new XMLHttpRequest();
    if ("withCredentials" in xhrReq) {
        xhrReq.open(method, url, true);
    } else {
        xhrReq = null;
    }
    return xhrReq;
}
export function tiendaXhr() {
    var request = createCORSRequest("get", "https://webapp-210130211157.azurewebsites.net/webresources/mitienda");
    var data = "";
    if (request) {
        request.onload = function () {
            if (request.readyState == 4) {
                if (request.status == 200) {
                    data = JSON.parse(request.responseText);
                    makeTienda(data);

                } else if (request.status == 404) {
                    console.log("File not found");
                }
            }
        };
        request.send();

    }

}

export function tiendaJQuery() {
    $.ajax({
        url: 'https://webapp-210130211157.azurewebsites.net/webresources/mitienda', //URL de la petición
        type: 'GET', //tipo de la petición: POST o GET
        dataType: 'json', //tipo de dato que se espera
        success: function (json) { //función a ejecutar si es satisfactoria
            console.log(json);
            makeTienda(json);
        },
        error: function (jqXHR, status, error) { //función error
            console.log('Disculpe, existió un problema : ' + error);
        },
        // función a ejecutar sin importar si la petición falló o no
        complete: function (jqXHR, status) {
            console.log('Petición realizada');
        }
    });
}

export async function tiendaFetch() {

    
    var tiendaUrl = await fetch("https://webapp-210130211157.azurewebsites.net/webresources/mitienda")
        .then(response => {
            return response.text()
        })
        .then(data => {
            var tiendaObj = JSON.parse(data);
            return tiendaObj;
        })
        .catch(error => {
            console.log("Se ha producido un error"+error);
        })

    makeTienda(tiendaUrl);
}