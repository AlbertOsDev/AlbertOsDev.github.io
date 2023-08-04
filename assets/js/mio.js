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
    var enlace = "https://wa.me/59178752135?text=" +"*"+ nombre +"*"+ "%20" + mensaje
    document.getElementById("enviar").href =enlace //se asigna el enlace href con el mensaje
    var c = document.getElementById("enviar").href
   // Agregar atributo htmll
    // var href = document.querySelector('a')  
    //href.setAttribute("href",enlace)
    //Agregar atributo htmll
   // var c = document.querySelector('a').href

    alert(c)
}