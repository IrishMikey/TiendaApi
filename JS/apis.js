import { makeTienda } from "./tienda.js";

const reqURL = "https://webapp-210130211157.azurewebsites.net/webresources/mitienda"
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
    var request = createCORSRequest("get", reqURL);
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
        url: reqURL, //URL de la petición
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

    var tiendaUrl = await fetch(reqURL)
        .then(response => {
            return response.text()
        })
        .then(data => {
            return JSON.parse(data);
        })
        .catch(error => {
            console.log("Se ha producido un error"+error);
        })

    makeTienda(tiendaUrl);
}