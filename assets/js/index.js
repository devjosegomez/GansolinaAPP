var playing = false;

window.addEventListener('keypress', (function () {
    var strToType = 'ganso',
        strTyped = '';
    return function (event) {
        var character = String.fromCharCode(event.which);
        strTyped += character;
        if (strToType.indexOf(strTyped) === -1) strTyped = '';
        else if (strTyped === strToType) {
            strTyped = '';
            console.log("¡Me canso ganso! - AMLO 2018");
            document.getElementById('map').innerHTML = '<div id="gansoEggBox"><h1 align="center">Me canso ganso!</h1><img id="gansoEgg" src="Ganso.svg" /></div>';
            playGanso();
            var gansoEgg = document.getElementById("gansoEgg");
            gansoEgg.addEventListener("click", function () {
            location.reload(true);
            });
            setInterval('window.location.reload()', 3700);
        }
    };
}()));


function playGanso() {
    const sound = new Howl({
        src: ['./assets/images/gansoganso.mp3']
    });
    
    // Change global volume.
    Howler.volume(100);
    
    if(!playing){
    // Play the sound.
        playing = true;
    sound.play();
    }
}
