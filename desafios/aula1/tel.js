var listaDeTeclas = document.querySelectorAll('input[type=button]');
var campoTexto = document.querySelector('input[type=tel]');

function adicionaCor(tecla){
    tecla.classList.add('ativa');
}

function removeCor(tecla){
    tecla.classList.remove('ativa');
}

function adicionaFoco(tecla){
    tecla.classList.add('focus');
}

function removeFoco(tecla){
    tecla.classList.remove('focus');
}


for (var i = 0; i < listaDeTeclas.length; i++) {
    let tecla = listaDeTeclas[i];
    let valor = tecla.value;

    tecla.onmouseover = function(){
        adicionaFoco(tecla);
    }
    
    tecla.onmousedown = function(){
        adicionaCor(tecla);
    } 

    tecla.onmouseup = function(){
        removeCor(tecla);
    }
    
    tecla.onmouseout = function() {
        removeFoco(tecla);
        removeCor(tecla);
    }
    
    tecla.onkeydown = function(evento){
        if(evento.code === "Enter" || evento.code === "Space") {
            adicionaCor(tecla);
        }
    };

    tecla.onkeyup = function(){
        removeCor(tecla);
    };

    tecla.onclick = function(){
        campoTexto.value = campoTexto.value + valor;
    };
    
}
