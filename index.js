import express from "express";
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
app.set("view engine", "ejs")
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.render("homepage.ejs");
})

app.listen(port,()=>{
    console.log("app is running");
})