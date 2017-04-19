let express = require('express');
var routes = require("./routes/router");
var path = require("path");
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var port = 8100;
var app = express();
// var cors = require('cors');


app.use("/", express.static(path.join(__dirname, '../../blog')));
app.use(cookieParser());


//session-store
// var RedisStore = require('connect-redis')(session);
// var options = {
//       host: "localhost",
//       port: 8090,
//       db: "test_session",
//       logErrors: true
// };
// app.use(session({
//     store: new RedisStore(options),
//     name: "",
//     key : "",
//     resave:"",
//     saveUninitialized:"",
//     secret: 'blog'
// }));

//session-store
var LokiStore = require("connect-loki")(session);

app.use(session({
	store: new LokiStore(),
	secret: 'crud'
}));


// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(routes);





app.listen(port, function() {
    console.log("crud started on port :" + port);
});
