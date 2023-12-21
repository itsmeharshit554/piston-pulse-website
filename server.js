const express=require("express");
const bodyParser=require("body-parser");
const https=require("https")
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public', { 
    setHeaders: (res, path, stat) => {
      if (path.endsWith('.css')) {
        res.setHeader('Content-Type', 'text/css');
      } else if (path.endsWith('.js')) {
        res.setHeader('Content-Type', 'text/javascript');
      }
    }
  }));

app.get("/",function(req,res)
{
    res.sendFile(__dirname+"/s3.html");
})

app.post("/",function(req,res)
{   
    var email=req.body.email;
    console.log(email);    
    var data={
        members:[
            {
                email_address:email,
                status:"subscribed",

            }
        ]
    };
    
    jsonData=JSON.stringify(data)
    const url=(process.env.URL);
    const options={
        method:"POST",
        auth:(process.env.AUTH)
    }
    const request=https.request(url,options,function(response)
    {   
        // if(response.statusCode==200)
        // {
        //     res.sendFile(__dirname+"/sucess.html");
        // }
        // else
        // {
        //     res.sendFile(__dirname+"/fail.html");
        // }
        response.on("data",function(data)
        {
            console.log(JSON.parse(data));

        })
    
    });
    request.write(jsonData);
    request.end();
    
});

app.listen(3000,function()
{
    console.log("The code is running on the port 3000");
})
// audience id/unique id 6a4de58475