const { io } = require('../server')

io.on('connection', (client) => {

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a esta aplicacion'
    })

    console.log('Usuario conectado');

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    })

    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        // Para que le responda a todos los que esten conectados
        client.broadcast.emit('enviarMensaje', data);

        // if( mensaje.usuario ){
        //     callback({
        //         resp: 'TODO SALIO BIEN'
        //     });

        // }else{
        //     callback({
        //         resp: 'TODO SALIO MAL!!'
        //     });
        // }
    })
})