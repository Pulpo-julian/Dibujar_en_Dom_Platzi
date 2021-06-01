var d = document.getElementsByClassName("lienzo")[0].getContext("2d");

dibujarLinea("blue", 0, 0, 10, 300);
dibujarLinea("blue", 0, 10, 10, 300);
dibujarLinea("blue", 0, 25, 10, 300);

function dibujarLinea (color, xi, yi, xf, yf) {
    d.beginPath();
    d.strokeStyle = color;
    d.moveTo(xi,yi);
    d.lineTo(xf,yf);
    d.stroke();
    d.closePath();
}