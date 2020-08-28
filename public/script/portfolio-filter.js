const warningMsg = document.querySelector('.warning-msg');
function checkIfNoResult() {
    const hiddenResults = document.querySelectorAll('.hidden');
    if (hiddenResults.length >= 14) {
        warningMsg.classList.remove('hidden');
    }
    else {
        warningMsg.classList.add('hidden');
    }
}

function toggleWebdevElem() {
    webdevLabel.classList.toggle('pressed');
    webdevElem.forEach(elem => elem.classList.toggle('hidden'));
}

function toggleMlElem() {
    mlLabel.classList.toggle('pressed');
    mlElem.forEach(elem => elem.classList.toggle('hidden'));
}

function toggleDatavizElem() {
    datavizLabel.classList.toggle('pressed');
    datavizElem.forEach(elem => elem.classList.toggle('hidden'));
}

function toggleUiElem() {
    uiLabel.classList.toggle('pressed');
    uiElem.forEach(elem => elem.classList.toggle('hidden'));
}

const webdevBox = document.querySelector('#webdev');
const mlBox = document.querySelector('#ml');
const datavizBox = document.querySelector('#dataviz');
const uiBox = document.querySelector('#ui');

const webdevElem = document.querySelectorAll('.webdev');
const mlElem = document.querySelectorAll('.ml');
const datavizElem = document.querySelectorAll('.dataviz');
const uiElem = document.querySelectorAll('.ui');

const webdevLabel = document.querySelector('#webdev-label');
const mlLabel = document.querySelector('#ml-label');
const datavizLabel = document.querySelector('#dataviz-label');
const uiLabel = document.querySelector('#ui-label');

const unselectAll = document.querySelector('input#unselect-all');
unselectAll.addEventListener('change', function() {
    if (webdevBox.checked) {
        toggleWebdevElem();
        webdevBox.checked = false;
    }

    if (mlBox.checked) {
        toggleMlElem();
        mlBox.checked = false;
    }

    if (datavizBox.checked) {
        toggleDatavizElem();
        datavizBox.checked = false;
    }

    if (uiBox.checked) {
        toggleUiElem();
        uiBox.checked = false;
    }
});
unselectAll.addEventListener('change', checkIfNoResult);

const clearFilter = document.querySelector('input#all');
clearFilter.addEventListener('change', function() {
    if (!webdevBox.checked) {
        toggleWebdevElem();
        webdevBox.checked = true;
    }

    if (!mlBox.checked) {
        toggleMlElem();
        mlBox.checked = true;
    }

    if (!datavizBox.checked) {
        toggleDatavizElem();
        datavizBox.checked = true;
    }

    if (!uiBox.checked) {
        toggleUiElem();
        uiBox.checked = true;
    }
});
clearFilter.addEventListener('change', checkIfNoResult);

webdevBox.addEventListener('change', toggleWebdevElem);
webdevBox.addEventListener('change', checkIfNoResult);
mlBox.addEventListener('change', toggleMlElem);
mlBox.addEventListener('change', checkIfNoResult);
datavizBox.addEventListener('change', toggleDatavizElem)
datavizBox.addEventListener('change', checkIfNoResult)
uiBox.addEventListener('change', toggleUiElem)
uiBox.addEventListener('change', checkIfNoResult)
