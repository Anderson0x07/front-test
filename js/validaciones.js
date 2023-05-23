function validarDatos() {
    var edad = frmResultados.edad.value;
    var resultado = frmResultados.resultado.value;

    System.out.println("edad: " + edad);

    if (edad <= 0 || resultado < 0) {
        System.out.println("edad: " + edad);
        document.getElementById("divMensaje").innerHTML =
            "Error la edad o el resultado debe ser mayor a 0";
        frmUsuario.edad.focus();
        return false;
    }
}

function listarDeportistas() {
    var tabla = document.querySelector("tbody");

    fetch("http://localhost:8080/test/all")
        .then((response) => response.json())
        .then((deportistas) => {

            for (let i = 0; i < deportistas.length; i++) {
                var fila = document.createElement("tr");
        
                var nombre = document.createElement("td");
                nombre.textContent = deportistas[i].nombre;
                fila.appendChild(nombre);
        
                var estatura = document.createElement("td");
                estatura.textContent = deportistas[i].estatura;
                fila.appendChild(estatura);
        
                var peso = document.createElement("td");
                peso.textContent = deportistas[i].peso;
                fila.appendChild(peso);
        
                var alcance = document.createElement("td");
                alcance.textContent = deportistas[i].alcance;
                fila.appendChild(alcance);
        
                let pretestcon = document.createElement("td");
                pretestcon.textContent = deportistas[i].pre_test_con;
                fila.appendChild(pretestcon);
        
                let pretestsin = document.createElement("td");
                pretestsin.textContent = deportistas[i].pre_test_sin;
                fila.appendChild(pretestsin);
        
                let testcon = document.createElement("td");
                testcon.textContent = deportistas[i].test_con;
                fila.appendChild(testcon);
        
                let testsin = document.createElement("td");
                testsin.textContent = deportistas[i].test_sin;
                fila.appendChild(testsin);
        
                let postestcon = document.createElement("td");
                postestcon.textContent = deportistas[i].post_test_con;
                fila.appendChild(postestcon);
        
                let postestsin = document.createElement("td");
                postestsin.textContent = deportistas[i].post_test_sin;
                fila.appendChild(postestsin);
        
                tabla.appendChild(fila);
            }
        });

    
}

document.addEventListener("DOMContentLoaded", function () {
    listarDeportistas();
});
