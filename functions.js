
function PerfilToggle() {
    let divPerfil = document.getElementById('perfil');
    let btnMostrarPerfil = document.getElementById('btnMostrarPerfil');
    let perfilVisible = divPerfil.style.display != 'none';

    if (perfilVisible) {
        divPerfil.style.display = 'none';
        btnMostrarPerfil.style.display = 'block';
    }
    else {
        divPerfil.style.display = 'block';
        btnMostrarPerfil.style.display = 'none';
    }
}

function ColorChange(color) {
    let navbar = document.getElementById('navbar');
    navbar.style.backgroundColor = color;
}