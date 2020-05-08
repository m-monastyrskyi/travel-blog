import React, {useState, useEffect} from 'react';
import {generateRandomId} from "../api/api";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import UploadImage from "./UploadImage";


const ArticleAddEditForm = ({article, handlePost}) => {
    const [id, setId] = useState(article ? article.id : generateRandomId());
    const [date, setDate] = useState(article ? article.datePublished : "");
    const [category, setCategory] = useState(article ? article.category : "");
    const [title, setTitle] = useState(article ? article.title : "");
    const [subtitle, setSubtitle] = useState(article ? article.subtitle : "");
    const [content, setContent] = useState(article ? article.content : "");
    const [fullImgUrl, setFullImgUrl] = useState(article ? article.imageFull : "");
    const [thumbImgUrl, setThumbImgUrl] = useState(article ? article.imageThumb : "");

    const [errors, setErrors] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        window.scrollTo(0, 0);
        if (id && date && category && title && subtitle && content && fullImgUrl && thumbImgUrl) {
            const post = {
                id,
                datePublished: date,
                category,
                title,
                subtitle,
                content,
                imageFull: fullImgUrl,
                imageThumb: thumbImgUrl
            };
            setErrors('');
            handlePost(post);
            setErrors('Post updated');

        } else {
            setErrors("Check inputs! (Probably date)");
        }
    }

    return (
        <>
            {
                errors && <p style={{color: "red"}}>{errors}</p>
            }
            <div className="article-form">
                <input type="text" placeholder="id" value={id} disabled/>
                <input type="date" value={date} onChange={e => {
                    setDate(e.target.value)
                }}/>

                <input type="text" placeholder="Category" required value={category} onChange={e => {
                    setCategory(e.target.value)
                }}/>
                <input type="text" placeholder="Title" required value={title} onChange={e => {
                    setTitle(e.target.value)
                }}/>
                <input type="text" placeholder="Subtitle" required value={subtitle} onChange={e => {
                    setSubtitle(e.target.value)
                }}/>

                <ReactQuill theme="snow" style={{height: "300px", padding: "0 0 50px 0"}} value={content}
                            onChange={setContent}/>

                <textarea value={content} rows={5} readOnly />

                <div className="upload-block">
                    <input type="text" placeholder="Full image url" required value={fullImgUrl} onChange={e => {
                        setFullImgUrl(e.target.value)
                    }}/>
                    <UploadImage imgSetter={setFullImgUrl}/>
                </div>

                <div className="upload-block">
                    <input type="text" placeholder="Thumb image url" required value={thumbImgUrl} onChange={e => {
                        setThumbImgUrl(e.target.value)
                    }}/>
                    <UploadImage imgSetter={setThumbImgUrl}/>
                </div>

                <input type="submit" value="Submit" className="btn__submit" onClick={handleSubmit}/>

            </div>
        </>
    );
};

export default ArticleAddEditForm;