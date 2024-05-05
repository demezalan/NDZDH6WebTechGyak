let btnClick = (id, onclick) => document.getElementById(id).addEventListener("click", onclick);

let apertureStartStop = document.getElementById("apertureStartStop");
let apertureVideo = document.getElementById("aperture");

btnClick("apertureStartStop", () => {
        if (apertureVideo.paused) {
                apertureVideo.play();
                apertureStartStop.style.background = "rgb(103, 187, 102)";
                $(".hideAperture").hide();
        } else {
                apertureVideo.pause();
                apertureStartStop.style.background = "rgb(212, 38, 38)";
                $(".hideAperture").show();
        }
});

const apertures = [5.6, 6.3, 7.1, 8, 9, 10, 11, 13, 14, 16, 18, 20, 22, 25, 29, 32, 36];
const apertureTimes = [1, 3, 6, 8, 11, 13, 16, 19, 21, 24, 26, 29, 31, 34, 36, 39, 41];
const apertureInput = document.getElementById('apertureInput'),
        apertureOutput = document.getElementById('apertureOutput');

apertureInput.oninput = function () {
        apertureOutput.innerHTML = "Rekeszérték: " + apertures[this.value];
        apertureVideo.currentTime = apertureTimes[this.value];

};
apertureInput.oninput();


let isoStartStop = document.getElementById("isoStartStop");
let isoVideo = document.getElementById("iso");

btnClick("isoStartStop", () => {
        if (isoVideo.paused) {
                isoVideo.play();
                isoStartStop.style.background = "rgb(103, 187, 102)";
                $(".hideIso").hide();
        } else {
                isoVideo.pause();
                isoStartStop.style.background = "rgb(212, 38, 38)";
                $(".hideIso").show();
        }
});

const isos = [100, 200, 400, 800, 1600, 3200, 6400, 12800, 25600];
const isoTimes = [1, 3, 6, 8, 11, 13, 16, 19, 21];
const isoInput = document.getElementById('isoInput'),
        isoOutput = document.getElementById('isoOutput');

isoInput.oninput = function () {
        isoOutput.innerHTML = "ISO: " + isos[this.value];
        isoVideo.currentTime = isoTimes[this.value];

};
isoInput.oninput();



let shutterStartStop = document.getElementById("shutterStartStop");
let shutterVideo = document.getElementById("shutter");

btnClick("shutterStartStop", () => {
        if (shutterVideo.paused) {
                shutterVideo.play();
                shutterStartStop.style.background = "rgb(103, 187, 102)";
                $(".hideShutter").hide();
        } else {
                shutterVideo.pause();
                shutterStartStop.style.background = "rgb(212, 38, 38)";
                $(".hideShutter").show();
        }
});

const shutters = [1, 2, 4, 8, 15, 30, 60, 125, 250, 500, 1000, 2000];
const shutterTimes = [1, 3, 6, 8, 11, 13, 16, 19, 21, 24, 26, 29];
const shutterInput = document.getElementById('shutterInput'),
        shutterOutput = document.getElementById('shutterOutput');

shutterInput.oninput = function () {
        shutterOutput.innerHTML = "Záridő: 1/" + shutters[this.value] + " MP";
        shutterVideo.currentTime = shutterTimes[this.value];

};
shutterInput.oninput();