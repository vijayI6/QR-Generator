const btn = document.querySelector('.btn');
const urlInput = document.getElementById('uri');
const inputContainer = document.querySelector('.input');

btn.addEventListener('click', () => {
    const urlValue = urlInput.value.trim();

    if(!urlValue){
        return alert("Enter TEXT or URL");
    }

    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(urlValue)}`;
    // https://api.qrserver.com/v1/create-qr-code/ which is the endpoint provided by the QRServer API to generate QR codes.

    let qrImg = document.getElementById('qrcode');

    if (!qrImg) {
        qrImg = document.createElement('img');
        qrImg.setAttribute('id', 'qrcode');
        inputContainer.appendChild(qrImg);
    }
    qrImg.style.width = '150px';

    qrImg.src = qrCodeUrl;
});
