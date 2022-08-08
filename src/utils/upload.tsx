import axios from "axios";

export const uploadImage = (image: any, CLOUDINARY_API: any, CLOUDINARY_PRESET: any): any => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", CLOUDINARY_PRESET);
  
    return axios.post(CLOUDINARY_API, formData);
};