function Grabar(idTextBox){
    const texto = document.getElementById(idTextBox).value
    const stock = 100
    let mensaje = ''
    if(!isNaN(texto) && texto !='' ){
        const cantidad = parseInt(texto)

        if(cantidad > stock){
            mensaje = 'La cantidad supera al stock'
        }
        else if(cantidad < stock){
            mensaje = 'La cantidad es menor al stock'
        }
        else if(cantidad === stock){
            mensaje = 'La cantidad es igual al stock'
        }
    }
    else{
        mensaje = 'El texto ingresado no es un numero'
    }
    alert(mensaje)
    
}

function GrabarSwitch(idTextBox){
    const texto = document.getElementById(idTextBox).value
    const stock = 100
    let mensaje = ''
    if(!isNaN(texto) && texto !='' ){
        const cantidad = parseInt(texto)
        const resultado = stock - cantidad
        const Comparacion = true
        switch (Comparacion)
        {
            case (resultado > 0):
                mensaje = 'La cantidad es menor al stock';
            break;
            case (resultado < 0):
                mensaje = 'La cantidad supera al stock';
            break;
            default:
                mensaje = 'La cantidad es igual al stock'
            break;
        }
    }    
    else{
        mensaje = 'El texto ingresado no es un numero'
    }
    alert(mensaje)
    
}

