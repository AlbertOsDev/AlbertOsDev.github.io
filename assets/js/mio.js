document.querySelector('form').addEventListener('submit', e =>{
    e.preventDefault()
    const data = Object.fromEntries(
        new FormData(e.target)
    )
    //alert(JSON.stringify(data))
    var wp = JSON.stringify(data)
   // alert(wp.indexOf('name'))
    //alert(wp[wp.indexOf('name')])
  
 //   var enviar = document.getElementById("enviar").href
})
//document.getElementById("nombre").value="Noombreaaaaaaaaaaa"
function saludo(){
    var nombre = document.getElementById("nombre").value //Captura el input de nombre
    var mensaje = document.getElementById("mensaje").value //Captura el textarea del mensaje
    var enlace = "https://wa.me/59178752135?text="+"Hola soy"+"*"+ nombre +"*"+ "%20" + mensaje
    document.getElementById("enviar").href =enlace //se asigna el enlace href con el mensaje
    var c = document.getElementById("enviar").href
   // Agregar atributo htmll
    // var href = document.querySelector('a')  
    //href.setAttribute("href",enlace)
    //Agregar atributo htmll
   // var c = document.querySelector('a').href

   // alert(c)
}

$(document).ready(function() {
    // Abrir modal al hacer clic en una imagen
    $(".imagen-modal").click(function() {
      var imagenSrc = $(this).attr("src");
      var informacion = $(this).data("informacion");
  
      $("#modal-imagen").attr("src", imagenSrc);
      $("#modal-informacion").text(informacion);
  
      $("#modal").fadeIn();
    });
  
    // Cerrar modal al hacer clic en el botón de cierre o fuera del contenido
    $("#modal, #modal-cerrar").click(function(event) {
      if (event.target === this) {
        $("#modal").fadeOut();
      }
    });
  });