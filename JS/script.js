var btns = document.getElementsByTagName("input");
var dBtns = document.getElementById("dBtns");
var img = document.getElementsByTagName("img")[0];
console.log(btns);

function hideBtns(){
dBtns.style.display = "none";
img.style.display = "block"
}
[...btns].forEach(btn => {
    btn.addEventListener("click", () => hideBtns());
});