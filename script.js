const inputTexto = document.querySelector(".input-texto")
const mensaje = document.querySelector(".mensaje")


function btnEncriptado() {
    if (inputTexto.value.trim() === "") {
        alert("no ha ingresado ningun mensaje");
    }
    else {
        const textoEncriptado = encriptar(inputTexto.value)
        mensaje.value = textoEncriptado;
        //mensaje.style.backgroundImage = "none"
        inputTexto.value = ""
    }

}
function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}
function btnDesencriptar() {
    if (inputTexto.value.trim() === "") {
        alert("no ha ingresado ningun mensaje");
    }
    else {  
    const textoEncriptado = desencriptar(inputTexto.value)
    mensaje.value = textoEncriptado;

    inputTexto.value = ""
    }
}

function desencriptar(stringDesencriptar) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptar = stringDesencriptar.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptar.includes(matrizCodigo[i][1])) {
            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptar;
}
function copiar() {
    if (mensaje.value.trim() === "") {
        alert("no ha ingresado ningun mensaje");
    }
    else {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("texto copiado");
    }
}
