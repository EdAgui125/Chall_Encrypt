const textArea = document.querySelector(".Texto-ingresado");
const mensaje = document.querySelector("#Mensaje");
const copiar = document.querySelector("#Copiar");
copiar.style.display = "none";

function encrypt(){
    const textoResultado = encriptar(textArea.value);
    mensaje.value = textoResultado;
    mensaje.style.backgroundImage = "none";
    textArea.value = "";
    window.scrollTo(0, document.body.scrollHeight);
    copiar.style.display = "inline-block";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);

        }

    }
    return stringEncriptada
}



function decrypt(){
    const textoResultado = desencriptar(textArea.value);
    mensaje.value = textoResultado;
    mensaje.style.backgroundImage = "none";
    textArea.value = "";
    window.scrollTo(0, document.body.scrollHeight);
    copiar.style.display = "inline-block";
}

function desencriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][1])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);

        }

    }
    return stringEncriptada
}



function copy(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("Texto Copiado");
}


    
var encryptBtn = document.querySelector("#Encriptar");
encryptBtn.onclick = encrypt;
var decryptBoton = document.querySelector("#Desencriptar");
decryptBoton.onclick = decrypt;
var copyBtn = document.querySelector("#Copiar");
copyBtn.onclick = copy;