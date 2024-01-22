window.addDocumentClickListener = function (element, dotnet) {
    console.log("go inside here");
    var handler = function (e) {
        if (!element.contains(e.target)) {
            dotnet.invokeMethodAsync('DocumentClickHandler');
        }
    };

    document.addEventListener('click', handler);

    return function () {
        console.log("go inside here before removing");
        document.removeEventListener('click', handler);
    };
};
