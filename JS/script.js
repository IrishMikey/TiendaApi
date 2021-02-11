import {tiendaXhr} from "./apis.js";
var btns = document.getElementsByTagName("input");
var dBtns = document.getElementById("dBtns");
var img = document.getElementsByTagName("img")[0];

function hideBtns(){
dBtns.style.display = "none";
img.style.display = "block"
}

[...btns].forEach(btn => {
    btn.addEventListener("click", () =>{ 
        hideBtns();
        setReqType(btn.value);
        console.log(btn.value)
    });
});

function setReqType(type){
    if(type == "XHR"){
        tiendaXhr();
    }
}