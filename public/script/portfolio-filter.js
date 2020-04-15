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

const clearFilter = document.querySelector('#all');
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

webdevBox.addEventListener('change', toggleWebdevElem);
mlBox.addEventListener('change', toggleMlElem);
datavizBox.addEventListener('change', toggleDatavizElem)
uiBox.addEventListener('change', toggleUiElem)