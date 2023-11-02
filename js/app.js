let fotoPerfil = document.getElementById("foto-perfil")
let profileMenu = document.getElementById("menuWrap");

fotoPerfil.addEventListener('click',()=>{
    profileMenu.classList.toggle("abrir");
})