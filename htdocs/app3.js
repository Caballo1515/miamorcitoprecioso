/*
const typed = new Typed('.typed', {strings: ['Holaa bb te como toa']});
const typed2 = new Typed('.typed2', {strings: ['Holaa bb te como toa']});
*/


function inicio(){

    /* hacer los tamaños adecuados ajustandose a la pantalla */
    var app = document.getElementById('screen_5');
    app.style.height=screen.height + 'px';
    app.style.width=screen.width + 'px';
    var screen_1 = document.getElementById('screen_1');
    screen_1.style.height=screen.height + 'px';
    screen_1.style.width=screen.width + 'px';
    var screen_1 = document.getElementById('screen_2');
    screen_1.style.height=screen.height + 'px';
    screen_1.style.width=screen.width + 'px';
    var screen_1 = document.getElementById('screen_3');
    screen_1.style.height=screen.height + 'px';
    screen_1.style.width=screen.width + 'px';
    var screen_1 = document.getElementById('screen_4');
    screen_1.style.height=screen.height + 'px';
    screen_1.style.width=screen.width + 'px';

    /* el onclick para hacer las referencias a los distintos divs */
    const typed1 = new Typed('.typed1', {strings: ['<p>Todo comenzó con esa mirada</p><p>Espontanea y desafortunada</p><p>Matadora parecia</p><p>Pero en el fondo mucha bondad tenia</p>'], typeSpeed: 50, startDelay: 300, showCursor: false});
    var si = document.getElementById('si_1');

}

function siii(){
    alert("Sabia que inas a decir que si <3");
}

function paraAlante(i) {
    
    i++;
    var screen='screen_' + i;
    document.location.href = "#" + screen;
    switch(i){
        case 1:
            break;
        case 2:
            const typed2 = new Typed('.typed' + i, {strings: ['<p>En ese preciso momento</p><p>Una amistad se forjo</p><p>Que con el paso del tiempo</p><p>Mucha confianza ganó</p>'], typeSpeed: 50, showCursor: false});
            break;
        case 3:
            const typed3 = new Typed('.typed' + i, {strings: ['<p>Un dia esos dos amigos decidieron quedar</p><p>alego que...</p><p>algo que les complico la vida</p><p>Por detalles que prefiero no dar</p>'], typeSpeed: 50, showCursor: false});
            break;
        case 4:
            const typed4 = new Typed('.typed' + i, {strings: ['<p>Y poco a poco esa amistad se convirtio en algo más</p><p>Cosa que por ambas partes surgio de manera especial</p><p>Hasta que hoy dia <i>EL</i> se le quiere declarar</p>'], typeSpeed: 50, showCursor: false});
            break;
        case 5:
            const typed5 = new Typed('.typed' + i, {strings: ['<p>Entonces...</p><p>MiAmorcitoPreciosaBellaDelica-</p><p>-daInteligenteBonitaPerfecta</p><p>Quieres ser mi novia?</p>'], typeSpeed: 50, showCursor: false});
            break;
    }
        
}

function cambiarPosicion() {
    var no = document.getElementById('no_1');
    no.style.right=getRandomInt(0, 20) + '%';
    no.style.top=getRandomInt(20, 80) + '%';
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
window.onload=inicio();