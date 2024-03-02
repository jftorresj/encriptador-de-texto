const campoTexto = document.querySelector(".campo-texto");
const campoMensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const texto = encriptar(campoTexto.value);
    campoMensaje.value = texto;
    campoTexto.value = "";
    campoMensaje.style.backgroundImage = "none";
}

const matriz_code = [
    ["e", "enter"], //indice 0
    ["i", "imes"], //indice 1
    ["a", "ai"], //indice 2
    ["o", "ober"], //indice 3
    ["u", "ufat"], //indice 4
];

function encriptar(fraseEncriptada){
    
    fraseEncriptada = fraseEncriptada.toLowerCase();

    for(let i=0; i<matriz_code.length; i++){
        if(fraseEncriptada.includes(matriz_code[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][0], 
                matriz_code[i][1]
        )
        }
    }return fraseEncriptada;
}


function btnDesencriptar(){    
    const textoEncriptado = desencriptar(campoTexto.value);
    campoMensaje.value = textoEncriptado;
    campoTexto.value = "";
    campoMensaje.style.backgroundImage = "none";
    
}

function desencriptar(fraseDesencriptada){
    for(let i=0; i<matriz_code.length; i++){
        if(fraseDesencriptada.includes(matriz_code[i][1])){
            fraseDesencriptada = fraseDesencriptada.replaceAll(
                matriz_code[i][1],
                matriz_code[i][0]
        )
        }
    }return fraseDesencriptada;
}

function copiar(){
    let copyText = document.querySelector(".mensaje");
    campoTexto.value=copyText.value;
    campoMensaje.value=""    
}

