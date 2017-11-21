window.addEventListener('load', function() {
  var text = document.getElementById('text');
  text.addEventListener('click', function(event) {
      var boton = document.createElement('input');
      boton.value = 'Guardar';
    });
});