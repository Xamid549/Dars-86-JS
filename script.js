const input=document.getElementById("url-input");
const btn=document.getElementById("btn");
const qr = document.getElementById("qrcode");
const qrBG = document.getElementById("qr-bg");
const qrColor = document.getElementById("qr-color");



btn.addEventListener("click",()=> {
    qr.innerHTML=""
const qrcode = new QRCode(document.getElementById("qrcode"), {
	text: input.value,
	width: 332,
	height: 330,
	colorDark : qrColor.value,
	colorLight : qrBG.value,
	correctLevel : QRCode.CorrectLevel.H
});
})


