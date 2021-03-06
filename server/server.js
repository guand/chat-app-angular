var express = require('express'),
    chat = require('./routes/chats');
 
var app = express();
 
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:9000');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});
 
// app.get('/chats', chat.findAll);
// app.get('/chats/:id', chat.findById);
app.post('/chats', chat.addChat);
// app.put('/chats/:id', chat.updateChat);
// app.delete('/chats/:id', chat.deleteChat);
 
app.listen(3000);
console.log('Listening on port 3000...');