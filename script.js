document.addEventListener('DOMContentLoaded', function () {
    let qr; // To store the QR code instance

    // Function to generate the QR code
    function generateQRCode() {
        // Get the URL from the input box
        const url = document.getElementById("url-input").value;

        // Clear any previous QR code generated
        document.getElementById("qrcode").innerHTML = "";

        // Generate a new QR code using QRCode.js
        qr = new QRCode(document.getElementById("qrcode"), {
            text: url,  // The URL to encode into the QR code
            width: 128,  // Width of the QR code
            height: 128, // Height of the QR code
            colorDark: "#000000",  // Color of the QR code (black)
            colorLight: "#ffffff", // Background color (white)
            correctLevel: QRCode.CorrectLevel.H // Error correction level (H is the highest)
        });
    }

    // Function to download QR Code
    function downloadQRCode() {
        const url = document.getElementById("url-input").value;

        // Create a temporary QR code with a larger size (4K resolution)
        const tempDiv = document.createElement("div");
        const tempQR = new QRCode(tempDiv, {
            text: url,
            width: 1920, // 4K resolution
            height: 1080,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });

        // Wait for the QR code to render
        setTimeout(() => {
            const qrImage = tempDiv.querySelector("img").src; // Get the QR code as a data URL

            // Create a download link
            const link = document.createElement("a");
            link.href = qrImage;
            link.download = "QRCode-4K.png";
            link.click();
        }, 100); // Adjust delay if necessary
    }

    // Bind event listeners to buttons
    document.getElementById("generate-btn").addEventListener("click", generateQRCode);
    document.getElementById("download-btn").addEventListener("click", downloadQRCode);
});