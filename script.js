// Declaracion de constantes - prueba
const textoEntrada = document.getElementById('textoEntrada');
const btnEncriptar = document.getElementById('btnEncriptar');
const btnDesencriptar = document.getElementById('btnDesencriptar');
const estadoResultado = document.getElementById('estadoResultado');
const resultado = document.getElementById('resultado');
const btnCopiar = document.getElementById('btnCopiar');
const textoHistorial = document.getElementById('textoHistorial');
const imagenCibernetica = document.getElementById('imagenCibernetica');

// Reglas de encriptación
const reglasEncriptacion = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

// Función para encriptar texto
function encriptar(texto) {
    return texto.replace(/[aeiou]/g, letra => reglasEncriptacion[letra]);
}

// Función para desencriptar texto
function desencriptar(texto) {
    let textoDesencriptado = texto;
    for (let [clave, valor] of Object.entries(reglasEncriptacion)) {
        textoDesencriptado = textoDesencriptado.replace(new RegExp(valor, 'g'), clave);
    }
    return textoDesencriptado;
}

// Función para mostrar el resultado
function mostrarResultado(texto) {
    estadoResultado.style.display = 'none';
    imagenCibernetica.style.display = 'none';
    resultado.textContent = texto;
    resultado.style.display = 'block';
    btnCopiar.style.display = 'block';
    actualizarHistorial(texto);
}

// Función para actualizar el historial apenas el usuario ingrese texto
function actualizarHistorial(texto) {
    if (textoHistorial.textContent === 'Aquí aparecerá el historial de encriptaciones') {
        textoHistorial.textContent = '';
    } else {
        textoHistorial.innerHTML += '<hr>';
    }
    textoHistorial.innerHTML += '<p>' + texto + '</p>';
    imagenCibernetica.style.display = 'none';
}

// Eventos
btnEncriptar.addEventListener('click', () => {
    const texto = textoEntrada.value.toLowerCase();
    if (texto) {
        mostrarResultado(encriptar(texto));
    }
});

btnDesencriptar.addEventListener('click', () => {
    const texto = textoEntrada.value.toLowerCase();
    if (texto) {
        mostrarResultado(desencriptar(texto));
    }
});

btnCopiar.addEventListener('click', () => {
    navigator.clipboard.writeText(resultado.textContent)
        .then(() => alert('Texto copiado al portapapeles'));
});

// Antes del historial
resultado.style.display = 'none';
btnCopiar.style.display = 'none';
