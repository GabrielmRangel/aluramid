var listaDeTeclas = document.querySelectorAll('.tecla');
listaDeTeclas[4].focus();

function idAudio(instrumento){
    let audio = `#som_${instrumento}`;
    return audio;
};

function tocaSom(idElementoSom){
    document.querySelector(idElementoSom).play();
};

function adicionaCor(tecla){
    tecla.classList.add('ativa','active');
    adicionaFoco(tecla);
};

function removeCor(){
    for(i = 0; i < listaDeTeclas.length; i++){
        listaDeTeclas[i].classList.remove('ativa','active');
    };
};

function adicionaFoco(tecla){
    removeFoco();
    tecla.classList.add('focus')
}

function removeFoco(){
    for(i = 0; i < listaDeTeclas.length; i++){
        listaDeTeclas[i].classList.remove('focus');
    };
};

function validaEvento(evento){
    let validador = false;

    if(evento.code === 'Enter' || evento.code === 'Space' || evento.code === 'NumpadEnter'){
        validador = true;
    }

    return validador;
};

function validaNumero(evento){
    let validador = false;

    if(evento.code === 'Numpad1' || evento.code === 'Numpad2' || evento.code === 'Numpad3' || evento.code === 'Numpad4' || evento.code === 'Numpad5' || evento.code === 'Numpad6' || evento.code === 'Numpad7' || evento.code === 'Numpad8' || evento.code === 'Numpad9'){
        validador = true;
    }

    return validador;
}

function numpadToca(evento){
    if (evento.code === "Numpad1") {
        adicionaCor(listaDeTeclas[6]);
        tocaSom(idAudio(listaDeTeclas[6].classList[1]));
    };

    if (evento.code === "Numpad2") {
        adicionaCor(listaDeTeclas[7]);
        tocaSom(idAudio(listaDeTeclas[7].classList[1]));
    };

    if (evento.code === "Numpad3") {
        adicionaCor(listaDeTeclas[8]);
        tocaSom(idAudio(listaDeTeclas[8].classList[1]));
    };

    if (evento.code === "Numpad4") {
        adicionaCor(listaDeTeclas[3]);
        tocaSom(idAudio(listaDeTeclas[3].classList[1]));
    };

    if (evento.code === "Numpad5") {
        adicionaCor(listaDeTeclas[4]);
        tocaSom(idAudio(listaDeTeclas[4].classList[1]));
    };

    if (evento.code === "Numpad6") {
        adicionaCor(listaDeTeclas[5]);
        tocaSom(idAudio(listaDeTeclas[5].classList[1]));
    };

    if (evento.code === "Numpad7") {
        adicionaCor(listaDeTeclas[0]);
        tocaSom(idAudio(listaDeTeclas[0].classList[1]));
    };

    if (evento.code === "Numpad8") {
        adicionaCor(listaDeTeclas[1]);
        tocaSom(idAudio(listaDeTeclas[1].classList[1]));
    };

    if (evento.code === "Numpad9") {
        adicionaCor(listaDeTeclas[2]);
        tocaSom(idAudio(listaDeTeclas[2].classList[1]));
    };

};

for (var i = 0; i < listaDeTeclas.length; i++) {
    let tecla = listaDeTeclas[i];
    let instrumento = tecla.classList[1];

    tecla.onclick = function(){
        tocaSom(idAudio(instrumento));
    };
    
    tecla.onmouseout = function() {
        removeFoco();
    };
    
    tecla.onkeydown = function(evento){
        if(validaEvento(evento)) {
            adicionaCor(tecla);
        };

        if(validaNumero(evento)){
            numpadToca(evento);
        };
    };

    tecla.onkeyup = function(){
        removeCor();
    };

    tecla.onblur = function() {
        removeCor(tecla);
    };

}
