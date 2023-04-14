var http=require('http');
var querystring=require('querystring');
http.createServer(function(req,res){
    var data='';
    req.on('data',function(chunk){
        console.log(chunk);
        data+=chunk;

    });
    req.on('end',function(){
        qs=querystring.parse(data);
        console.log(qs);
        var name=qs.name;
        var un=qs.uname;
        var m=qs.email;
        var g=qs.gender;
        var c=qs.city;
        var aa=qs.addr;
        var p=qs.phno;
        res.write("<html><body><h1>HERE IS WHAT WE RECIEVED!!!</h1><table border='3'>");
        res.write("<tr><td>NAME</td><td>"+name+"</td></tr>");
        res.write("<tr><td>USERNAME</td><td>"+un+"</td></tr>");
        res.write("<tr><td>EMAIL</td><td>"+m+"</td></tr>");
        res.write("<tr><td>GENDER</td><td>"+g+"</td></tr>");
        res.write("<tr><td>CITY</td><td>"+c+"</td></tr>");
        res.write("<tr><td>ADDRESS</td><td>"+aa+"</td></tr>");
        res.write("<tr><td>MOBILE</td><td>"+p+"</td></tr>");
        res.write("</table></body></html>")
        res.end();
    });
}).listen(8080);
console.log("server started");