window.onload = () => {
    reloj();
}
function reloj() {
    let fecha = new Date();
    let dia = fecha.getDay();
    switch (dia) {
        case 0:
            document.getElementById("dia").innerHTML = "Domingo";
            break;
        case 1:
            document.getElementById("dia").innerHTML = "Lunes";
            break;
        case 2:
            document.getElementById("dia").innerHTML = "Martes";
            break;
        case 3:
            document.getElementById("dia").innerHTML = "Miercoles";
            break;
        case 4:
            document.getElementById("dia").innerHTML = "Jueves";
            break;
        case 5:
            document.getElementById("dia").innerHTML = "Viernes";
            break;
        case 6:
            document.getElementById("dia").innerHTML = "Sabado";
            break;
    }
    document.getElementById("numeroDia").innerHTML = fecha.getDate();
    let mes = fecha.getMonth();
    switch(mes){
        case 0:
            document.getElementById("mes").innerHTML = "Enero";
            break; 
        case 1:
            document.getElementById("mes").innerHTML = "Febrero";
            break;
        case 2:
            document.getElementById("mes").innerHTML = "Marzo";
            break;
        case 3:
            document.getElementById("mes").innerHTML = "Abril";
            break;
        case 4:
            document.getElementById("mes").innerHTML = "Mayo";
            break;
        case 5:
            document.getElementById("mes").innerHTML = "Junio";
            break;
        case 6:
            document.getElementById("mes").innerHTML = "Julio";
            break;
        case 7:
            document.getElementById("mes").innerHTML = "Agosto";
            break;
        case 8:
            document.getElementById("mes").innerHTML = "Septiembre";
            break;
        case 9:
            document.getElementById("mes").innerHTML = "Octubre";
            break;
        case 10:
            document.getElementById("mes").innerHTML = "Noviembre";
            break;
        case 11:
            document.getElementById("mes").innerHTML = "Diciembre";
            break;
    }
    document.getElementById("anio").innerHTML = fecha.getFullYear();
    document.getElementById("hora").innerHTML = fecha.getHours();
    let minuto = fecha.getMinutes();
    if(minuto<10){
        document.getElementById("minutos").innerHTML = "0" + minuto;    
    } else {
        document.getElementById("minutos").innerHTML = minuto;
    }
    let segundos = fecha.getSeconds();
    if(segundos<10){
        document.getElementById("segundos").innerHTML = "0" + segundos;
    } else {
        document.getElementById("segundos").innerHTML = segundos;

    }

setTimeout(reloj, 1000);
}