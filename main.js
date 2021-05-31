var d = document.getElementsByClassName("lienzo")[0].getContext("2d");


d.beginPath();
d.strokeStyle = "green";
d.moveTo(150,150);
d.lineTo(100,100);
d.stroke();
d.closePath();