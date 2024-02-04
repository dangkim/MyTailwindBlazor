
// Call addDocumentClickListener when the script is loaded
//document.addEventListener('DOMContentLoaded', function () {
//    console.log('window.addDocumentClickListener');
//    bellElement = document.getElementById('wrapperBell');
//    infoElement = document.getElementById('wrapperInfo');
//    avatarElement = document.getElementById('wrapperAvatar');
//    var handler = function (e) {
//        console.log('go to handler');
//        if (!bellElement.contains(e.target) && !infoElement.contains(e.target) && !avatarElement.contains(e.target)) {
//            DotNet.invokeMethodAsync('TailwindBlazor','DocumentClickHandler');
//            document.removeEventListener('click', handler);
//        }
//        else {
//            document.removeEventListener('click', handler);

//            if (bellElement.contains(e.target)) {
//                debugger;
//                DotNet.invokeMethodAsync('TailwindBlazor', 'OpenCloseBellWrapper');
//            }

//            if (infoElement.contains(e.target)) {
//                DotNet.invokeMethodAsync('TailwindBlazor', 'OpenCloseInfoWrapper');
//            }

//            if (avatarElement.contains(e.target)) {
//                DotNet.invokeMethodAsync('TailwindBlazor', 'OpenCloseAvatarWrapper');
//            }

//            document.addEventListener('click', handler);
//        }
//    };

//    document.addEventListener('click', handler);
//});

//window.addDocumentClickListener = function () {
//    console.log('window.addDocumentClickListener');
//    bellElement = document.getElementById('wrapperBell');
//    infoElement = document.getElementById('wrapperInfo');
//    avatarElement = document.getElementById('wrapperAvatar');
//    var handler = function (e) {
//        console.log('go to handler');
//        if (!bellElement.contains(e.target) && !infoElement.contains(e.target) && !avatarElement.contains(e.target)) {
//            DotNet.invokeMethodAsync('DocumentClickHandler');
//            document.removeEventListener('click', handler);
//        }
//        else {
//            document.removeEventListener('click', handler);

//            if (bellElement.contains(e.target)) {
//                DotNet.invokeMethodAsync('OpenCloseBellWrapper');
//            }

//            if (infoElement.contains(e.target)) {
//                DotNet.invokeMethodAsync('OpenCloseInfoWrapper');
//            }

//            if (avatarElement.contains(e.target)) {
//                DotNet.invokeMethodAsync('OpenCloseAvatarWrapper');
//            }

//            document.addEventListener('click', handler);
//        }
//    };

//    document.addEventListener('click', handler);
//}

window.returnArrayAsync = (startPosition) => {
    DotNet.invokeMethodAsync('TailwindBlazor', 'ReturnArrayAsync', startPosition)
        .then(data => {
            console.log(data);
        });
};

function toggleDarkMode(darkMode) {
    document.body.classList.toggle('dark', darkMode);
    console.log(document.body.classList.length);
}

function isContainedDark() {
    const isContained = document.body.classList.contains('dark');
    console.log("isContained: " + isContained)
    console.log(document.body.classList.value)
    return isContained;
}