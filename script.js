function validarMayusculas(palabra) {
    var patron = /([^A-Z\Ñ\s])/;
    if (patron.test(palabra) === false) {
        return true;
    } else {
        return false;
    }
}

var lista =['HOLA','CONDENSADA'];
var tablero = document.getElementById("horca").getContext("2d");
//var palabraSecreta = escogePalabra(lista).toString();
let palabraSecreta = "";
let letraTeclado = "";
let letraAcertada=[''];
let letraErradaIndice=[''];
let letraErrada = [];
let letraIngresada=[''];
let espaciadoErrado = 0;
let contadorErrado = 0;
let intentoMax = 9;
//mi solucion no funciono al querer agregar otra palabra por el textarea
// function escogePalabra(lista){
//     return[...lista]
//     .sort(()=> Math.random() > 0.5 ? 1 : -1 ) //escoge la palabra al azar de la lista
//     .slice(0,1); //mustra solo una palabra 
// }

//esta si funciono 
function escogePalabraSecreta(){
    let palabra = lista[Math.floor(Math.random()*lista.length)];
    palabraSecreta = palabra;
    console.log(palabraSecreta);
}

console.log(palabraSecreta);//para probar  

function iniciarJuego(){
    if(validarMayusculas(palabraSecreta)===true){
        console.log("es mayuscula xD");
        escogePalabraSecreta();
        dibujarCanvas();
        dibujarLineas();
        dibujarBase();
        dibujarCuerpo();
        apareceCanvas();
        envuelveLeeTeclado();
        apareceBotonesJuego();
        aparecePalabraSecreta();
        //resetea valores
        //palabraSecreta = "";
        letraTeclado = "";
        letraAcertada=[''];
        letraErradaIndice=[''];
        letraErrada = [];
        letraIngresada=[''];
        espaciadoErrado = 0;
        contadorErrado = 0;

    }else{
        console.log("ingrese palabra mayuscula ");
    }
}

function creaPalabra(){
    const texto = document.getElementById('textoIngresar').value;
    if(validarMayusculas(texto)===true && texto!= ''){
        console.log("es mayuscula xD y distinto de '' ");
        lista.push(texto);
        console.log(palabraSecreta);
        iniciarJuego();
        desapareceApareceLlenarTexto();
    }else{
        alertaErrorSoloLetras();
    }
}

function envuelveLeeTeclado(){
    //window toma lo que escriba :O
    window.onkeydown = function leeTeclado(event) {
        document.addEventListener
        var codigo = event.which || event.keyCode;

        console.log("Presionada: " + codigo);
        
        // if(codigo === 13){
        //   console.log("Tecla ENTER");
        // }

        if(codigo >= 65 && codigo <= 90 || codigo === 8,16){
        letraTeclado = String.fromCharCode(codigo);
        console.log(String.fromCharCode(codigo));
        comparaPalabraSecretaConTeclado();
        dibujaTexto();
        //comprubaSeExiste();
        }
        else{
            alertaErrorSoloLetras();
        }   
        comprubaSeExiste();
        compruebaSiPerdio();
        compruebaSiGano();
        //ver donde poner esta funcion 
        muestraNumeroIntentosErraos();
        
        
    }

}

function comparaPalabraSecretaConTeclado(){
    for(var i=0;i<palabraSecreta.length;i++){
        if(palabraSecreta[i]===letraTeclado){
            //la variable i es la posicion de la letra en la palabra
            //que conincide con el span al que tenemos que mostrar la letra
            letraAcertada[i] = letraTeclado;
            console.log('contiene la letra'+ letraAcertada );
         
        }else {
            console.log('no contiene la letra');
            //usamos el indexOf que devuelve el indice de la letra
            //donde se encuentra pero si no esta devuelve -1
            letraErradaIndice=palabraSecreta.indexOf(letraTeclado); 
            
        }
        
    }
}

//comprube si existe la letra en la palabra
function comprubaSeExiste(){
    if(letraErradaIndice===-1){
        console.log('no existe la letra en la palabra');
        espaciadoErrado=espaciadoErrado+20;
        letraErrada=letraTeclado;
        console.log(letraErrada);
        dibujaLetraErrada();
        contadorErrado++;
        dibujarCuerpo();
        
    }else{
        console.log('si existe la letra en la palabra');
        
    }
}

function compruebaSiPerdio(){
    if(intentoMax===contadorErrado){
        swal("Error!", "Numero de Intentos Maximo!", "warning");
        muestraPalabraSecreta();
    }
}

function compruebaSiGano(){
    //como la letraAcertada se va guardando por separado 
    // hay que unirla y compararla con la palabra secreta
    if(palabraSecreta===letraAcertada.join('')){
        swal("Gano :D", "Gano", "success");
    }
    //console.log(letraAcertada.join(''));
    //console.log(palabraSecreta);
}

function alertaErrorSoloLetras (){
    swal("Error!", "Solo letras y mayusculas!", "warning");
    
}

function muestraPalabraSecreta(){
    var palabra = document.getElementById('muestra-palabra-secreta');
    palabra.innerHTML= palabraSecreta;

}

function muestraNumeroIntentosErraos(){
    var numero = document.getElementById('muestra-cantidad-errados');
    numero.innerHTML = contadorErrado;
}

function desapareceBtnIniciales(){
    document.getElementById('desaparece-botones').style.display= 'none';
}

function apareceElementos(){
    document.getElementById('aparece-llenar-texto').style.display = 'block';
}
function apareceCanvas(){
    document.getElementById('canvas').style.display = 'block';
}

function aparecePalabraSecreta(){
    document.getElementById('palabraSecretauno').style.display = 'block';
    document.getElementById('palabraSecretados').style.display = 'block';
}

function desapareceApareceLlenarTexto(){
    document.getElementById('aparece-llenar-texto').style.display = 'none';
}

function apareceBotonesJuego(){
    document.getElementById('botones-juego').style.display = 'block';
}

function reload(){
    window.location.reload();
}


// input escondido para moviles 
var lector = document.getElementById('input-escondido');
lector.addEventListener("input", lectorInput());

function lectorInput(){
    setTimeout(() => {
        lector.value="";
     }, "150");
    comparaPalabraSecretaConTeclado();
}