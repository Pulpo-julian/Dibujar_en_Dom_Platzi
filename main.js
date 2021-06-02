iBoton.addEventListener("click", () => {
    dibujarPorClick();
});

var d = document.getElementsByClassName("lienzo")[0].getContext("2d");




var lineas = parseInt(iTexto.value);
var yi, xf;
var colorcito = "red";
var recorrido = d.canvas.width / lineas;


for (l = 0; l < lineas; l++) {
    yi = recorrido * l;
    xf = recorrido * (l + 1);
    dibujarLinea(colorcito, 0, yi, xf, 300);
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