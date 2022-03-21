import React from 'react';
import Logo from './logomain.png'
import './Form.css'
import { useState } from 'react';

export default function Form() {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [link, setLink] = useState("");
    const [summa, setSumma] = useState("");
    const [Date, setDate] = useState("");
  
    const onTitleChange = e => setTitle(e.target.value);
    const onBodyChange = e => setBody(e.target.value);
    const onLinkChange = e => setLink(e.target.value);
    const onSummaChange = e => setSumma(e.target.value);
    const onDateChange = e => setDate(e.target.value);
  
    const handleSubmit = e => {
      e.preventDefault();
  
      const data = { title, body, link, summa, Date };
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({Decryption:body,Name:title,Link:link,})
      };
      fetch("http://127.0.0.1:8000/OrgForm/?format=json", requestOptions)
        .then(response => response.json())
        .then(res => console.log(res));
    };

    return (
        <div>
            <div className = "form">
                <form>
                <input onChange={onLinkChange} type="text" placeholder="Ссылка на проект" className = "snp" />
                <input onChange={onTitleChange} type="text" placeholder="Название проекта" className = "snp" />
                <input onChange={onBodyChange} type="text" placeholder="Информация о проекте" className = "snp" />
                <div className = "gori"><a class="button b-green gori" onClick={handleSubmit}>Отправить проект</a></div>
                {/* <div className = "gori"><input type="submit" onClick={handleSubmit} class="button b-green gori"></input></div> */}
                </form>
            </div>
        </div>
    );
}