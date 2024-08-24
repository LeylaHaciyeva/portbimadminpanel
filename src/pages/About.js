import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';

const About = () => {
    const [language, setLanguage] = useState('en');
    const [header, setHeader] = useState('');
    const [files, setFiles] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('language', language);
        formData.append('header', header);
        // if (aboutImage2) {
        //     formData.append('aboutImage2', aboutImage2);
        // }
        Array.from(files).forEach((file) => {
            formData.append('files', file);
        });

        try {
            console.log(formData);
            const response = await axios.post('http://localhost:8080/api/about', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('Content added successfully');
            if (response.status === 200) {
                console.log('Success:', response.data);
            } else {
                console.error('Upload failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error adding content:', error);
        }
    };

    return (
        <div className='about-container'>
            <Sidebar />
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Language:</label>
                    <select value={language} onChange={(e) => setLanguage(e.target.value)} required>
                        <option value="en">english</option>
                        <option value="ru">russian</option>
                        <option value="az">azerbaijani</option>
                    </select>
                </div>
                <div>
                    <label>Content:</label>
                    <textarea value={header} onChange={(e) => setHeader(e.target.value)} />
                </div>
                {/* <div>
                <label>Image 1:</label>
                <input type="file" accept="image/*" onChange={(e) => setAboutImage2(e.target.files[0])} />
            </div> */}
                <div>
                    <label>Image 1:</label>
                    <input type="file" multiple accept="image/*" onChange={(e) => setFiles(e.target.files)} />
                </div>
                <button type="submit">Add Content</button>
            </form>
        </div>
    );
};

export default About;
