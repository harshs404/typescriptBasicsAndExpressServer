import http from "http";
http.createServer(function (req,res){ 
    res.write(req.url)
    // res.writeHead(200,{
    //     "Context-type":"text/html",
    // }) // 200 is status code...for response
    //res.write("Flutter bootcamp");
    res.end();
}).listen(8000);

//in above we are passing a response to a server after making it
//this a second way of passing response to server(including 4 to 7)

// we can also make it to listen to the url request...now when we run it, it prints url from adrress bar

//under request we can listen to stuff from browser as we did while listening to url

// we will be using expressJS to make up our server as it readily provides us minimal code to run server