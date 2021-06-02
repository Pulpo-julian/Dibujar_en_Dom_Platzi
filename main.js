document.addEventListener("keyup", dibujarTeclas);

var d = document.getElementsByClassName("lienzo")[0].getContext("2d");

dibujarLinea("#AFA", 149, 149, 151, 151);



function dibujarLinea (color, xi, yi, xf, yf) {
    d.beginPath();
    d.strokeStyle = color;
    d.lineWidth = 3;
    d.moveTo(xi,yi);
    d.lineTo(xf,yf);
    d.stroke();
    d.closePath();
}

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGTH: 39
};

var x = 150;
var y = 150;
movimiento = 10;

function dibujarTeclas (evento) {
    if (evento.keyCode == teclas.UP) {

        console.log("es la de arriba");
        dibujarLinea("#AFA", x, y, x, y - movimiento);
        y = y - movimiento;

    } else if (evento.keyCode == teclas.DOWN) {

        console.log("es la de abajo");
        dibujarLinea("#AFA", x, y, x, y + movimiento);
        y = y + movimiento;

    } else if (evento.keyCode == teclas.LEFT) {

        console.log("es la de la izquierda");
        dibujarLinea("#AFA", x, y, x - movimiento, y);
        x = x - movimiento;
    } else if (evento.keyCode == teclas.RIGTH) {

        console.log("es la de la derecha");
        dibujarLinea("#AFA", x, y, x + movimiento, y);
        x = x + movimiento;
    }
}


// dibujarLinea(colorcito, 300, 0, 0, 0)
// dibujarLinea(colorcito, 300, 0, 300, 300)
// dibujarLinea(colorcito, 0, 300, 300, 300)
