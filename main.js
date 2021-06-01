var d = document.getElementsByClassName("lienzo")[0].getContext("2d");
var lineas = 30;
var l = 0;

while (l<lineas) {
    dibujarLinea("blue", 0, 25, 10, 300);
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