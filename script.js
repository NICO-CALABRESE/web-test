const Hora = setInterval(() =>{
    var h = new Date();

    var cadena = h.getHours() + ' : ' + h.getMinutes() + ' : ' + h.getSeconds();

    document.getElementById("reloj").innerHTML = cadena;

    var dia = h.getDay();
    var nro = h.getDate();
    var mes = h.getMonth();
    var ano = h.getFullYear();

    var dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    var dia_actual;
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    var mes_actual;

    for(i = 0; i <= dia; i++){
        dia_actual = dias[i];
    }

    for(i = 0; i <= mes; i++){
        mes_actual = meses[i];
    }

    document.getElementById("fecha").innerHTML = "COMPRA HOY: " + dia_actual + ", " + nro + " de " + mes_actual + " del " + ano + " Y LLEVATE LO MEJOR!";
}, 1000);

function Abrir(nro){
    document.getElementById("ul-submenu" + nro).style.height ="450px";
}
function Cerrar(nro){
    document.getElementById("ul-submenu" + nro).style.height ="0";
}

function AbrirD(nro){
    document.getElementById("description" + nro).style.height ="120px";
}
function CerrarD(nro){
    document.getElementById("description" + nro).style.height ="0";
}