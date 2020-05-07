import React, {useState} from 'react';
import fire from "../data/firebseConfig";

const UploadImage = ({imgSetter}) => {
    const [imgFile, setImgFile] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImgFile(e.target.files[0]);
            console.log(e.target.files[0]);
        }
    }
    const handleUpload = () => {
        const uploadTask = fire.storage().ref(`uploads/${imgFile.name}`).put(imgFile);

        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setUploadProgress(progress);
            },
            (error) => {
                console.log(error);
            },
            () => {
                fire.storage().ref('uploads').child(imgFile.name).getDownloadURL().then(url => {
                    console.log(url);
                    imgSetter(url);
                })
            });
    }

    return (
        <>
            <progress value={uploadProgress} max="100"/>
            <input type="file" onChange={handleChange}/>
            <button onClick={handleUpload} className="btn__submit" style={{maxWidth: "300px", display: "inline-block", backgroundColor: "#dedede", color: "black"}} >Upload</button>
            <br/>
        </>
    );
};

export default UploadImage;