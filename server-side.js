var express= require('express');
app = express()

app.get('/', function(request,response){
    var user=
    ([
    {id: 01, username: "Peter"},
    {id: 02, username: "Susan"},
    {id: 03, username: "Stephanie"},
    ])
    response.send(json);
    
});



var PORT = 3001;
app.listen(PORT, function(){
    console.log('http://localhost: + PORT');
});