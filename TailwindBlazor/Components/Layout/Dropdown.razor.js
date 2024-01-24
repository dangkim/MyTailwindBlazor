export function addDocumentClickListener(element, dotnet) {
    var handler = function (e) {
        if (!element.contains(e.target)) {
            dotnet.invokeMethodAsync('DocumentClickHandler');
            document.removeEventListener('click', handler);
        }
    };

    document.addEventListener('click', handler);
}
