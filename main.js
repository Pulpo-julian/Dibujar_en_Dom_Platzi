var d = document.getElementsByClassName("lienzo")[0].getContext("2d");


d.beginPath();
d.strokeStyle = "red";
d.moveTo(100,100);
d.lineTo(300,300);
d.stroke();
d.closePath();