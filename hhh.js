var http=require('http');
var url=require('url');
function onRequest(request,response)
{
    var add=url.parse(request.url,true);
    var query1=add.query;
    var name=query1.name;
    var username=query1.uname;
    var email=query1.mail;
    var state=query1.state;
    var gender=query1.gender;
    var event=query1.event;
    var mobile=query1.phno;
    response.write("<html><body><table border='3'>")
    response.write("<tr><td><b>Name</b>:"+name+"</td></tr>");
    response.write("<tr><td><b>Username:</b>"+username+"</td></tr>");
    response.write("<tr><td><b>Email:</b>"+email+"</td></tr>");
    response.write("<tr><td><b>State:</b>"+state+"</td></tr>");
    response.write("<tr><td><b>Gender:</b>"+gender+"</td></tr>");
    response.write("<tr><td><b>Mobile:</b>"+mobile+"</td></tr>");
    response.write("</table></body></html>")
    response.end();
}
http.createServer(onRequest).listen(8080);
console.log("Server Started");
