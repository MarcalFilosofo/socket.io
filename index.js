//Importe todas as bibliotecas
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.set('view engine', 'ejs');

io.on('connection', (socket) => {
    socket.on('disconnect', () => {
        console.log('Usuário desconectou');
    })

    socket.on('msg', (data) => {
        console.log(data);
        io.emit('showmsg', data);
    })
})

app.get('/', (req, res) => {
   res.render('index');  
});

http.listen(3000, () => {
    console.log("Rodando")
})