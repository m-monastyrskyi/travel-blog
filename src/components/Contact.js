import React, {useState} from 'react';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sendStatus, setSendStatus] = useState('');
    const [errors, setErrors] = useState("");
    document.title = "Contact - Just travel blog";
    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.length > 2 && email.length > 5 && message.length > 10) {
            setSendStatus('Message sent');
        } else {
            setErrors("One or more fields have an error. Please check and try again. (name > 2, email > 5, message > 10)")
        }
    }

    return (
        <div className='contact container'>
            {
                sendStatus ? <h1 className="contact__title">{sendStatus}</h1> : <>
                    <h1 className="contact__title">Contact</h1>
                    <h2 className="contact__subtitle">Drop us a line:</h2>
                    {
                        errors && <h4>{errors}</h4>
                    }
                    <form className="contact__form" onSubmit={handleSubmit}>
                        <input className="contact__input" type="text" placeholder="Name" value={name}
                               onChange={e => setName(e.target.value)}
                               onFocus={() => errors && setErrors('')}
                        />
                        <input className="contact__input" type="email" placeholder="Email" value={email}
                               onChange={e => setEmail(e.target.value)} required
                               onFocus={() => errors && setErrors('')}
                        />
                        <textarea className="contact__input" rows="5" placeholder="Message" value={message}
                                  onChange={e => setMessage(e.target.value)}
                                  onFocus={() => errors && setErrors('')}
                        />
                        <input className="btn__submit" type="submit" value="SEND"/>
                    </form>
                </>
            }
        </div>
    );
};

export default Contact;