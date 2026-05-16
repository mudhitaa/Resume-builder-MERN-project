import multer from "multer";

const uploader = ()=>{
    return multer({
            dest:"",
            fileFilter:()=>{},
            limits:{}
        })

    }

export default uploader