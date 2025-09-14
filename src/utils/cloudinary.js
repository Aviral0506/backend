import {v2 as cloudinary } from "cloudinary"
import fs from "fs"

cloudinary.config({
    ClOUD_NAME: process.env.ClOUDINARY_CLOUD_NAME,
    API_KEY: process.env.API_CLOUD_KEY, 
    API_SECRET: process.env.API_CLOUD_SECRET
});

const uploadOnCloudinary = async(localFilePath) =>{
    try{
        if(!localFilePath) return null
        //upload the file on cloudinary
        
        const response = cloudinary.cloud.upload(localFilePath , {
            resource_type: "auto"
        })
        console.log("File is uploaded on Cloudinary" , response.url)
        return response;
    } catch(error) {
        fs.unlinkSync(localFilePath)
        return null;
    }
}

export {uploadOnCloudinary}