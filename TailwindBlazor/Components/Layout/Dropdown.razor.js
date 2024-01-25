export function addDocumentClickListener(bellElement, infoElement, dotnet) {
    var handler = function (e) {
        if (!bellElement.contains(e.target) && !infoElement.contains(e.target)) {
            console.log("go to handler");
            dotnet.invokeMethodAsync('DocumentClickHandler');
            document.removeEventListener('click', handler);
        }
    };

    document.addEventListener('click', handler);
}