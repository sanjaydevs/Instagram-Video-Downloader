import express from "express";
import axios from "axios";
import { instagramGetUrl } from "instagram-url-direct";
import cors from "cors";

const app=express();
const port=3001;
app.use(express.json());
app.use(cors());

// function to get the video link

const getVideo = async url =>{
    const result = await instagramGetUrl(url);
    return result.url_list[0];

};


app.post("/api/download", async (req,res)=>{
    console.log("request coming in ....")

    try{
        const videolink=await getVideo(req.body.url)

        if (videolink!== undefined){
            res.json({downloadLink : videolink});
            console.log("res",{videolink});
        } else {
            res.json({error:"The link you have entered is invalid."});
            // console.log(res.error);
        }
    }
    catch (err){
        res.json({error : "There is a problem with the link you provided."});
        // console.log(res.error);
    }
});

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
});
