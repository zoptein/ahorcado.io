function dibujarCanvas(){
    tablero.lineWidth = 8;
    tablero.lineCap= "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#E5E5E5";
    tablero.strokeStyle = "#0A3871";

    tablero.fillRect(0,0,1200,860);
    tablero.beginPath();
    tablero.moveTo(650,500);
    tablero.lineTo(900,500);
    tablero.stroke();
    tablero.closePath();
    

}

function dibujarBase(){
    tablero.lineWidth = 6;
    tablero.lineCap= "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";
    
    //base
    //nos permite poner un puntos en cordenadas (x,y)
    tablero.moveTo(730,500);
    //dibuja la linea desde el punto a el otro punto(x,y)
    tablero.lineTo(730,200);
    tablero.stroke();
    tablero.closePath();
}

function tablaArriba(){
    tablero.lineWidth = 6;
    tablero.lineCap= "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";
    

    //tabla arriba

    //nos permite poner un puntos en cordenadas (x,y)
    tablero.moveTo(730,200);
    //dibuja la linea desde el punto a el otro punto(x,y)
    tablero.lineTo(870,200);
    tablero.stroke();
    tablero.closePath();
}

function cuerda(){
    tablero.lineWidth = 6;
    tablero.lineCap= "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";
    

    //cuerda
    //nos permite poner un puntos en cordenadas (x,y)
    tablero.moveTo(870,200);
    //dibuja la linea desde el punto a el otro punto(x,y)
    tablero.lineTo(870,230);
    tablero.stroke();
    tablero.closePath();
}

function cabeza(){
    tablero.lineWidth = 6;
    tablero.lineCap= "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";
    
    //cabeza
    tablero.beginPath();
    tablero.arc(870,260, 30, 0, 2 * Math.PI); // Círculo externo

    tablero.stroke();
    tablero.closePath();
}

function paloDiagonal(){
    tablero.lineWidth = 6;
    tablero.lineCap= "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";


    //palo diagonal
    tablero.beginPath();
    //nos permite poner un puntos en cordenadas (x,y)
    tablero.moveTo(730,300);
    //dibuja la linea desde el punto a el otro punto(x,y)
    tablero.lineTo(870,200);
    tablero.stroke();
    tablero.closePath();
}

function torzo(){
    tablero.lineWidth = 6;
    tablero.lineCap= "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";

    //torzo
    tablero.beginPath();
    //nos permite poner un puntos en cordenadas (x,y)
    tablero.moveTo(870,400);
    //dibuja la linea desde el punto a el otro punto(x,y)
    tablero.lineTo(870,290);
    tablero.stroke();
    tablero.closePath();
}

function brazoDerecho(){
    tablero.lineWidth = 6;
    tablero.lineCap= "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";

    //brazo derecho
    tablero.beginPath();
    //nos permite poner un puntos en cordenadas (x,y)
    tablero.moveTo(870,290);
    //dibuja la linea desde el punto a el otro punto(x,y)
    tablero.lineTo(910,350);
    tablero.stroke();
    tablero.closePath();
}

function brazoIzquierdo(){
    tablero.lineWidth = 6;
    tablero.lineCap= "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";

    //brazo izquierdo
    tablero.beginPath();
    //nos permite poner un puntos en cordenadas (x,y)
    tablero.moveTo(870,290);
    //dibuja la linea desde el punto a el otro punto(x,y)
    tablero.lineTo(830,350);
    tablero.stroke();
    tablero.closePath();
}

function piernaDerecha(){
    tablero.lineWidth = 6;
    tablero.lineCap= "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";



    //pierna derecha
    tablero.beginPath();
    //nos permite poner un puntos en cordenadas (x,y)
    tablero.moveTo(870,400);
    //dibuja la linea desde el punto a el otro punto(x,y)
    tablero.lineTo(910,450);
    tablero.stroke();
    tablero.closePath();
}

function piernaIzquierda(){
    tablero.lineWidth = 6;
    tablero.lineCap= "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";



    //pierna izquierda
    tablero.beginPath();
    //nos permite poner un puntos en cordenadas (x,y)
    tablero.moveTo(870,400);
    //dibuja la linea desde el punto a el otro punto(x,y)
    tablero.lineTo(830,450);
    tablero.stroke();
    tablero.closePath();
}

function dibujarCuerpo(){
    switch (contadorErrado) {
        case 1:
            tablaArriba();
            break;

        case 2:
            cuerda();
            break;
        case 3:
            paloDiagonal();
            break;

        case 4:
            cabeza();
            break;
    
        case 5:
            torzo();
            break;

        case 6:
            brazoDerecho();
            break;
        case 7:
            brazoIzquierdo();
            break;

        case 8:
            piernaDerecha();
            break;
        case 9:
            piernaIzquierda();
            break;
    
        default:
            break;
    }
}

function dibujarLineas(){
    tablero.lineWidth = 6;
    tablero.lineCap= "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";


    let anchura = 600/palabraSecreta.length;
    for(var i =0; i< palabraSecreta.length;i++){
        tablero.moveTo(500 + (anchura*i),640);
        tablero.lineTo(550 + (anchura*i),640);
    }
    tablero.stroke();
    tablero.closePath();
}

function dibujaTexto(){

    tablero.fillStyle = "#0A3871";
    tablero.font = "30px Georgia";
    let anchura = 600/palabraSecreta.length;
    for(var i =0; i< palabraSecreta.length;i++){
        //si es undefined que muestre vacio ''
        if(letraAcertada[i]===undefined){
            letraAcertada[i]= '';
        }else{
            tablero.fillText(letraAcertada[i],500 + (anchura*i),600);
            tablero.fill()
        }
        
    }
    tablero.fill()
    tablero.stroke()
}

function dibujaLetraErrada(){
    tablero.fillStyle = "#0A3871";
    tablero.font = "30px Georgia";
    tablero.fillText(letraErrada,700+espaciadoErrado,800);
    tablero.fill()

}