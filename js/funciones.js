const btnBorrar = document.getElementById("btnBorrar");
btnBorrar.onclick = borrar;

const btnResumen = document.getElementById("btnResumen");
btnResumen.onclick = resumen;

function borrar(event) {
    let myForm = document.getElementById("ComprarTickets");
    /*myForm.onsubmit = procesar;*/
    event.preventDefault(); // Evita que se recargue la página cuando el usuario apreta 'Enviar'
    document.getElementById("nombre").value = "" ;
    document.getElementById("apellido").value = "" ;
    document.getElementById("correo").value = "" ;
    document.getElementById("cantidad").value = "" ;
    document.getElementById("resumen").value = "Total a Pagar : $" ;
}


function resumen(event) {
    let myForm = document.getElementById("ComprarTickets");
    /*myForm.onsubmit = procesar;*/
    event.preventDefault(); // Evita que se recargue la página cuando el usuario apreta 'Enviar'

    const valorTicket = 200;
    const DescEstudiante = 80;
    const DescTrainee = 50;
    const DescJunior = 15;
    let descuento = 0

    let categoria = document.getElementById("categoria").value  ;
    let cantidad = document.getElementById("cantidad").value ;
    let valorTotal = 0;
    
    if (categoria == 'Estudiante') {
        descuento = DescEstudiante
    } else if (categoria == 'Trainee') {
        descuento = DescTrainee
    }
    else if (categoria == 'Junior') {
        descuento = DescJunior
    }

    valorTotal = valorTicket * (100-descuento) * cantidad / 100;

    document.getElementById("resumen").value = `Total a Pagar : $ ${valorTotal}` ;
}