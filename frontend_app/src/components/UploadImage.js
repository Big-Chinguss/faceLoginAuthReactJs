import React from 'react'
import {useState} from 'react'
// import { storage } from '../firebase';
import {ref, uploadBytes} from 'firebase/storage';
import {v4} from 'uuid';
import { imageDb } from '../config';


function FirebaseUploadImage() {
const [imageUpload, setImageUpload] = useState('')
const handleClick = () => {
    if(imageUpload == null) return; 
    //no images selected
    const imageRef = ref(imageDb, `images/${imageUpload.name + v4()}`);
    //to upload image to server using uploadBytes
    uploadBytes(imageRef, imageUpload).then(() => {
        alert("Image uploaded successfully")
    })
};

return(
    <div className="LoginButton">
        <input type="file" onChange={(event) =>{
            setImageUpload(event.target.files[0]);
            //since we're sending one image from the user, we only need one file
        }}
        /> 
        <button className="btn btn-primary" onClick={handleClick}  > Login </button>
    </div>
    );
    
}
export default FirebaseUploadImage