let ancho=document.querySelector("canvas").getAttribute("width");
let alto=document.querySelector("canvas").getAttribute("height");;

var pantalla= document.querySelector("canvas");
var pincel=pantalla.getContext("2d");

var x = 0
var sentido = 1;
var radio=10;

pincel.fillStyle="black";
pincel.fillRect(0,0,ancho,alto);

function dibujarCirculo(x,y,radio,color){    
    pincel.fillStyle=color;
    pincel.beginPath();
    pincel.arc(x,y,radio,0,2*Math.PI);
    pincel.fill();
}

function limpiarPantalla(){
    pincel.clearRect(0,0,ancho,alto);
}

var xRandom=sortPosit(ancho);
var yRandom=sortPosit(alto);

function designObjetivo(x,y){
    dibujarCirculo(x,y,radio+20,"red");
    dibujarCirculo(x,y,radio+10,"white");
    dibujarCirculo(x,y,radio,"red");
}

function sortPosit(max){
    return Math.floor(Math.random()*max)
}


function actualizarPantalla(){
    xRandom=sortPosit(ancho);
    yRandom=sortPosit(alto);
    limpiarPantalla();
    designObjetivo(xRandom,yRandom);
} 

setInterval(actualizarPantalla,600)



function disparar(ev){
    let x=ev.pageX - pantalla.offsetLeft;
    let y=ev.pageY- pantalla.offsetTop;

//    console.log(`x: ${x} y  y: ${y}`)
//    console.log(`xRandom: ${xRandom} y  yRandom: ${yRandom}`)
  console.log(ev)
//    console.log(pantalla.offsetLeft)

   if((x<xRandom+radio)&&
      (x>xRandom-radio)&&
      (y<yRandom+radio)&&
      (y>yRandom-radio)){
        alert("¡Acertó!")
    }


}

pantalla.onclick = disparar;