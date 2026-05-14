
import express, { type Application } from "express";
import router from "./router/router";

const app: Application = express();

const PORT = 9005;
const HOST = "localhost";


//routes
app.use("/api/v1/",router)


app.use('/',(req,res,next)=>{
    res.status(404).json({
        data:null,
        status:false,
        message: "Route does not exist from server.ts"
    })
})



// SERVER
app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
});