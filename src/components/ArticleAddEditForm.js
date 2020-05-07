import React, {useState, useEffect} from 'react';
import {generateRandomId} from "../api/api";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const ArticleAddEditForm = (props) => {

    const [id, setId] = useState(props.id || generateRandomId);
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [content, setContent] = useState("");
    const [fullImgUrl, setFullImgUrl] = useState("");
    const [thumbImgUrl, setThumbImgUrl] = useState("");

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
            props.handlePost(post);

        } else {
            setErrors("Check inputs! (Probably date)");
        }
    }

    return (
        <>
            {
                errors && <p style={{color: "red"}}>{errors}</p>
            }
            <form className="article-form" onSubmit={handleSubmit}>
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
                {/*<textarea rows="5" placeholder="Article content" required value={content} onChange={e => {*/}
                {/*    setContent(e.target.value)*/}
                {/*}}/>*/}
                <div className="wyswig">
                    <ReactQuill theme="snow" style={{height: "300px", padding: "0 0 50px 0"}} value={content} onChange={setContent}/>
                </div>

                <textarea value={content}/>

                <input type="text" placeholder="Full image url" required value={fullImgUrl} onChange={e => {
                    setFullImgUrl(e.target.value)
                }}/>
                <input type="text" placeholder="Thumb image url" required value={thumbImgUrl} onChange={e => {
                    setThumbImgUrl(e.target.value)
                }}/>

                <input type="submit" value="Submit"/>

            </form>
        </>
    );
};

export default ArticleAddEditForm;