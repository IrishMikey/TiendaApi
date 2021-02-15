import { tiendaXhr, tiendaJQuery, tiendaFetch } from "./apis.js";
var btns = document.getElementsByTagName("input");
var dBtns = document.getElementById("dBtns");
var img = document.getElementsByTagName("img")[0];

function hideBtns() {
    dBtns.style.display = "none";
    img.style.display = "block";
}

function setReqType(type) {
    if (type == "XHR") {
        tiendaXhr();
    } else if (type == "Fetch") {
        tiendaFetch();
    } else if (type == "jQuery") {
        tiendaJQuery();
    }
}


[...btns].forEach(btn => {
    btn.addEventListener("click", () => {
        hideBtns();
        setReqType(btn.value);
    });
});
document.getElementsByTagName("h1")[0].addEventListener("click", () => location.reload());