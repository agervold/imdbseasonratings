// Check if Chrome Extension is installed, if it's not, prompt the user to download it.
setTimeout(function() {
    if ($("#isExtensionInstalled").length == 0 && !!window.chrome && !!window.chrome.webstore) {
        $("button").show();
    }
}, 1000);