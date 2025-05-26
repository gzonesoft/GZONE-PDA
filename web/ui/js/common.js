function initializeBarcodeScanner() {
    Quagga.init({
        inputStream: {
            name: "Live",
            type: "LiveStream",
            target: document.querySelector('#scanner-container'),
        },
        decoder: {
            readers: ["code_128_reader", "ean_reader"]
        }
    }, function(err) {
        if (!err) Quagga.start();
    });

    Quagga.onDetected(function(result) {
        alert("Barcode detected: " + result.codeResult.code);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initializeBarcodeScanner();
});
