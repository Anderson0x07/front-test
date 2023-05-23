

function validarDatos(){
    
    var edad = frmResultados.edad.value;
    var resultado = frmResultados.resultado.value;
    
    System.out.println("edad: "+edad);
    
    if (edad<=0 || resultado<0) {
        System.out.println("edad: "+edad);
        document.getElementById("divMensaje").innerHTML = "Error la edad o el resultado debe ser mayor a 0";
        frmUsuario.edad.focus();
        return false;
    }
    
}


