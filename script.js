// Create QRCodeStyling instance
const qrCode = new QRCodeStyling({
    width: 1080,       // high-res for download
    height: 1080,
    margin: 20,
    type: "png",
    dotsOptions: {
        color: "#000",
        type: "rounded"
    },
    backgroundOptions: {
        color: "#ffffff"
    }
});

const form = document.getElementById("form-inp");
const input = document.getElementById("inp-link");
const qrSection = document.getElementById("qr-section");
const qrDiv = document.getElementById("qrcode");
const btnDownload = document.getElementById("btn-download");

// Handle form submit
// Hide QR section initially
qrSection.style.display = "none";

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const url = input.value.trim();
    if (!url) return;

    // Update QR code
    qrCode.update({ data: url });

    // Clear previous QR canvas
    qrDiv.innerHTML = "";

    // Append new QR canvas
    qrCode.append(qrDiv);

    // Show QR section
    qrSection.style.display = "flex";
});


// Handle download
btnDownload.addEventListener("click", () => {
    qrCode.download({ name: "qrcode", extension: "png" });
});
