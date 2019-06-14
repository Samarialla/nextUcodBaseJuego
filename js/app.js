$(document).ready(function() {




  /*llenar cuadro*/

  function cargarimagen() {
    var images = [
      "image/1.png",
      "image/2.png",
      "image/3.png",
      "image/4.png"
    ]
    var columnas = $(".panel-tablero div");
    for (var i = 0; i < 7; i++) {
      var img = Math.floor(Math.random() * (5 - 1 + 1));
          $(columnas[i]).append("<img src='" + images[img] +
          "' class='elemento' width='100px' height='100px'>");
    }
  }


  setInterval(function() {
    $(".main-titulo").switchClass("main-titulo", "main-titulo-efecto", 200),
      $(".main-titulo").switchClass("main-titulo-efecto", "main-titulo", 200)
  }, 1000);

  $(".btn-reinicio").click(function() {
    $(".btn-reinicio").html('Reiniciar');
    cargarimagen();

  })


});


/*
modficar inicio}


$(document).ready(function(){
    $(":button").click(function(){
        $("p").toggle();

    if (this.value=="Add") this.value = "Save";
    else this.value = "Add";

  });
});
*/
