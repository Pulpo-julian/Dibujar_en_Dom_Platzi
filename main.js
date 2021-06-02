var d = document.getElementsByClassName("lienzo")[0].getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;

while (l<lineas) {
    yi = 10 * l;
    xf = 10 * (l +1);
    dibujarLinea("blue", 0, yi, xf, 300);
    console.log( "lineas " + l);
    l = l + 1;
}

function dibujarLinea (color, xi, yi, xf, yf) {
    d.beginPath();
    d.strokeStyle = color;
    d.moveTo(xi,yi);
    d.lineTo(xf,yf);
    d.stroke();
    d.closePath();
}