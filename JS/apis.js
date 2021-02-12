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