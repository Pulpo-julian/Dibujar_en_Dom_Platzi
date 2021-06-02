var d = document.getElementsByClassName("lienzo")[0].getContext("2d");


function dibujarLinea (color, xi, yi, xf, yf) {
    d.beginPath();
    d.strokeStyle = color;
    d.moveTo(xi,yi);
    d.lineTo(xf,yf);
    d.stroke();
    d.closePath();
}

dibujarLinea(colorcito, 0, 0, 0, 300)
dibujarLinea(colorcito, 300, 0, 0, 0)
dibujarLinea(colorcito, 300, 0, 300, 300)
dibujarLinea(colorcito, 0, 300, 300, 300)
