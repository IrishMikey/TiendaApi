export function tiendaXhr() {
    function createCORSRequest(method, url) {
        var xhr = new XMLHttpRequest();
        if ("withCredentials" in xhr) {
            xhr.open(method, url, true);
        }else {
            xhr = null;
        }
        return xhr;
    }

    var request = createCORSRequest("get", "https://webapp-210130211157.azurewebsites.net/webresources/mitienda");
    if (request) {
        request.onload = function () {
            //do something with request.responseText
        };
        request.send();
    }
}