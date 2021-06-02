var iTexto = document.getElementsByClassName("entrada")[0];
var iBoton = document.getElementsByClassName("entrada")[1];



var d = document.getElementsByClassName("lienzo")[0].getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var colorcito = "#faf";


for (l = 0; l<lineas; l++) {
    yi = 10 * l;
    xf = 10 * (l +1);
    dibujarLinea(colorcito, 0, yi, xf, 300);
    l = l + 1;
}

dibujarLinea(colorcito, 0, 0, 0, 300)
dibujarLinea(colorcito, 300, 0, 0, 0)
dibujarLinea(colorcito, 300, 0, 300, 300)
dibujarLinea(colorcito, 0, 300, 300, 300)

function dibujarLinea (color, xi, yi, xf, yf) {
    d.beginPath();
    d.strokeStyle = color;
    d.moveTo(xi,yi);
    d.lineTo(xf,yf);
    d.stroke();
    d.closePath();
}