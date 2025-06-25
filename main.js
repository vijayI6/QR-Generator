var btnGet = document.querySelector("#btnGet")
var data = document.querySelector("#data")
var qrcode = document.querySelector("#qrcode")

btnGet.addEventListener("click", function () {
    if (data.value == "") {
        alert('Name or URL is required !!')
    } else {
        getQRCode(data.value)
    }
})
async function getQRCode(data) {
    var apiURL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&margin=20&data=${encodeURIComponent(data)}`;
    var imgSrc = await fetch(apiURL);
    console.log(imgSrc);
    qrcode.src = imgSrc.url;
}
