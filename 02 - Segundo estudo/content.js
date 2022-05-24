var elementos = document.getElementsByTagName('body');
for (var i = 0, l = elementos.length; i < l; i++) {

    regexParaPegarValor = /[R][$]\s?[0-9]+[,]?[.]?[0-9]+?/;

    if (elementos[i].innerHTML == regexParaPegarValor) {
        elementos[i].innerHTML = "Olá Mundo! ";
    }
}


// UTILIDADES?

// emailExemplo = "exemplo@devmedia.com.br";
// resultado = emailExemplo.substring(emailExemplo.indexOf("@") + 1);
// retorna o que vem depois do @