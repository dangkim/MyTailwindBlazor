export function addDocumentClickListener(bellElement, infoElement, avatarElement, dotnet) {
    var handler = function (e) {
        if (!bellElement.contains(e.target) && !infoElement.contains(e.target) && !avatarElement.contains(e.target)) {
            console.log("go to handler");
            dotnet.invokeMethodAsync('DocumentClickHandler');
            document.removeEventListener('click', handler);
        }
    };

    document.addEventListener('click', handler);
}

export function toggleDarkMode(darkMode) {
    document.body.classList.toggle('dark', darkMode);
}
