const express=require("express");
const app=express();
const path=require("path");//path module is used to join the path of the current directory with the views folder
const port=8080;

//app.use(express.static("public"));//public is a folder that contains all the static files like css,js,images etc.
app.use(express.static(path.join(__dirname,"public/js")));
app.use(express.static(path.join(__dirname,"public/css")));//path.join is used to join the path of the current directory with the public folder
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));//path.join is used to join the path of the current directory with the views folder
// __dirname is a global object that gives the path of the current directory
//path.join ka hindi main matlab hota hai ki current directory ka path join karna hai views folder ke sath main. or
//views folder ka path nikalna hai.
// __dirname ka hindi main matlab hota hai ki current directory ka path nikalna hai.
//current directory ka hindi main matlab hota hai ki jis folder main hamara file hai uska path nikalna hai.
app.get("/",(req,res)=>{
    res.render("home.ejs");
}); 
app.get("/hello",(req,res)=>{
    res.send("hello");
});
app.get("/r",(req,res)=>{
    const value=Math.floor(Math.random()*10)+1;
    res.render("Rolldice.ejs",{num:value});
});
app.get("/m",(req,res)=>{
    // const value=Math.floor(Math.random()*10)+1;
    res.render("condition.ejs");
});
// req.params is a object that contains the parameters passed in the url
//req.params ka hindi main matlab hota hai ki url main jo parameter pass kiya gaya hai uska matlab hota hai or uska value ho.
app.get("/ig/:username",(req,res)=>{
    // const followers=["adam","john","smith","jane","doe","joe","james","jimmy","jim"];
    const {username}=req.params;
    const instaData=require("./data.json");
    const data=instaData[username];
    console.log(data);
    if(data){
    res.render("instagram.ejs",{data});
    }
    else{
        res.render("error.ejs",{username});
    }

});
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});