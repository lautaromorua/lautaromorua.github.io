$('li.link').click(function(){
  $('li.link').removeClass("active");
  $(this).addClass("active");
});

/*Funcion maquina de escribir*/

$(() => {
        let texto = "Hola, mi nombre es Lautaro."
        escribir("writing", texto, 100, 0);
    });

function escribir(contenedor,texto,intervalo,n){
    let i=0,
     // Creamos el timer
    timer = setInterval(() => {
    if ( i<texto.length ) {
      // Si NO hemos llegado al final del texto..
      // Vamos añadiendo letra por letra y la _ al final.
    $("#"+contenedor).html(texto.substr(0,i++) + "_");
    } else {
      // En caso contrario..
      // Salimos del Timer y quitamos la barra baja (_)
    clearInterval(timer);
    $("#"+contenedor).html(texto);
      // Auto invocamos la rutina n veces (0 para infinito)
    if ( --n!=0 ) {
    setTimeout(() => {
        escribir(contenedor,texto,intervalo,n);
    },3000);}
    }},intervalo);
};


/*Funcion para ir hacia arriba*/

$(window).scroll(function(){ 
  if ($(this).scrollTop() > 100) { 
      $('#scroll').fadeIn(); 
  } else { 
      $('#scroll').fadeOut(); 
  } 
});

$('#scroll').click(() =>{ 
  $("html, body").animate({ scrollTop: 0 }, 500); 
  return false; 
});


