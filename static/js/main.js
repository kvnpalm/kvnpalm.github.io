document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar el botón de envío por su ID
    var sendButton = document.getElementById("sendButton");
  
    // Agregar un controlador de eventos "click" al botón de envío
    sendButton.addEventListener("click", function() {
      // Aquí puedes agregar el código para enviar el mensaje electrónico
      // Por ejemplo, podrías recopilar los datos del formulario y enviarlos a través de una solicitud AJAX
      // O podrías redirigir a una URL específica para el procesamiento del formulario
      alert("Mensaje enviado correctamente");
    });
  });