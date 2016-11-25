var app = require("./config/server.js");

var rotaHome = require("./app/routes/index.js")(app);
var rotaNovo = require("./app/routes/novo.js")(app);
//var rotaNoticias = require("./app/routes/noticias")(app);

app.listen(3000, function(){
    console.log("Server ON");
})