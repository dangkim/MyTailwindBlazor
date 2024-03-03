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
    console.log(document.body.classList.length);
}

export function isContainedDark() {
    const isContained = document.body.classList.contains('dark');
    console.log("isContained: " + isContained)
    console.log(document.body.classList.value)
    return isContained;
}
