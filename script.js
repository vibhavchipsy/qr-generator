// Include QRCode.js library using CDN in JavaScript section

document.addEventListener('DOMContentLoaded', function () {
    // Function to generate the QR code
    function generateQRCode() {
        // Get the URL from the input box
        var url = document.getElementById("url-input").value;

        // Clear any previous QR code generated
        document.getElementById("qrcode").innerHTML = "";

        // Generate a new QR code using QRCode.js
        new QRCode(document.getElementById("qrcode"), {
            text: url,  // The URL to encode into the QR code
            width: 128,  // Width of the QR code
            height: 128, // Height of the QR code
            colorDark: "#000000",  // Color of the QR code (black)
            colorLight: "#ffffff", // Background color (white)
            correctLevel: QRCode.CorrectLevel.H // Error correction level (H is the highest)
        });
    }

    // Attach the generateQRCode function to the button click event
    document.querySelector("button").addEventListener("click", generateQRCode);
});
