var socket = io();

socket.on('connect', function () {
    console.log('Conectado al servidor');
})

// on = Escuchar
socket.on('disconnect', function () {
    console.log('Perdimos conexion con el servidor');
})

// emit = Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Giancarlo',
    mensaje: 'Hola mundo'
}, function (resp) {
    console.log('Respuesta server:', resp);
})

socket.on('enviarMensaje', function (mensaje) {
    console.log('Servidor:', mensaje);
})