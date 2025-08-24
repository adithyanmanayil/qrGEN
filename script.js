// Create QRCodeStyling instance
const qrCode = new QRCodeStyling({
    width: 250,
    height: 250,
    margin: 20, // white border inside QR
    type: "png",
    dotsOptions: {
        color: "#000",
        type: "rounded" // smooth rounded QR
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
form.addEventListener("submit", function(e) {
    e.preventDefault();
    const url = input.value.trim();
    if (url) {
        qrCode.update({ data: url });

        // Clear old QR if exists
        qrDiv.innerHTML = "";
        qrCode.append(qrDiv);

        // Show QR section
        qrSection.style.display = "block";
    }
});

// Handle download
btnDownload.addEventListener("click", () => {
    qrCode.download({ name: "qrcode", extension: "png" });
});
