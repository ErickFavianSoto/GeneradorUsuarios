function ElegirCorreo(){
    document.getElementById("correo").style.display = "block";
    document.getElementById("telefono").style.display = "none";
    document.getElementById("direccion").style.display = "none";
    document.getElementById("edad").style.display = "none";
    document.getElementById("contraseña").style.display = "none";
}
function ElegirTelefono(){
    document.getElementById("correo").style.display = "none";
    document.getElementById("telefono").style.display = "block";
    document.getElementById("direccion").style.display = "none";
    document.getElementById("edad").style.display = "none";
    document.getElementById("contraseña").style.display = "none";
}
function ElegirDireccion(){
    document.getElementById("correo").style.display = "none";
    document.getElementById("telefono").style.display = "none";
    document.getElementById("direccion").style.display = "block";
    document.getElementById("edad").style.display = "none";
    document.getElementById("contraseña").style.display = "none";
}
function ElegirEdad(){
    document.getElementById("correo").style.display = "none";
    document.getElementById("telefono").style.display = "none";
    document.getElementById("direccion").style.display = "none";
    document.getElementById("edad").style.display = "block";
    document.getElementById("contraseña").style.display = "none";
}
function ElegirContraseña(){
    document.getElementById("correo").style.display = "none";
    document.getElementById("telefono").style.display = "none";
    document.getElementById("direccion").style.display = "none";
    document.getElementById("edad").style.display = "none";
    document.getElementById("contraseña").style.display = "block";
}