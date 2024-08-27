import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';

const About = () => {
    const [language, setLanguage] = useState('en');
    const [header, setHeader] = useState('');
    const [mainImage, setMainImage] = useState(null)
    const [descHeader, setDescHeader] = useState("")
    const [desc1, setDesc1] = useState("")
    const [desc2, setDesc2] = useState("")
    const [toolHeader, setToolHeader] = useState("")
    const [toolImages, setToolImages] = useState(null);
    const [clientHeader, setClientHeader] = useState("")
    const [clientImages, setClientImages] = useState(null);
    const [descImage1, setDescImage1] = useState(null)
    const [descImage2, setDescImage2] = useState(null)
    const [descBetweenHeader, setDescBetweenHeader] = useState("")
    const [descBetweenDescription, setDescBetweenDescription] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('language', language);
        formData.append('header', header);
        Array.from(toolImages).forEach((toolImages) => {
            formData.append('toolImages', toolImages);
        });
        Array.from(clientImages).forEach((clientImages) => {
            formData.append('clientImages', clientImages);
        });
        if (mainImage) {
            formData.append("mainImage", mainImage);
        }
        formData.append("descHeader", descHeader);
        formData.append("desc1", desc1);
        formData.append("desc2", desc2);
        formData.append("toolHeader", toolHeader);
        formData.append("clientHeader", clientHeader);
        if (descImage1) {
            formData.append("descImage1", descImage1);
        }

        if (descImage2) {
            formData.append("descImage2", descImage2);
        }
        formData.append("descBetweenHeader", descBetweenHeader);
        formData.append("descBetweenDescription", descBetweenDescription);
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
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                           
                            <div>
                                <label>Main image(only one picture)</label>
                                <input required type="file" accept="image/*" onChange={(e) => setMainImage(e.target.files[0])} />
                            </div>
                            <div>
                                <label>Header</label>
                                <input required value={header} onChange={(e) => setHeader(e.target.value)} />
                            </div>
                            <div>
                                <label>Description header</label>
                                <textarea rows={8} cols={8} value={descHeader} onChange={(e) => setDescHeader(e.target.value)} />
                            </div>
                            <div>
                                <label>Description 1</label>
                                <textarea rows={8} cols={8} value={desc1} onChange={(e) => setDesc1(e.target.value)} />
                            </div>
                            <div>
                                <label>Description 2</label>
                                <textarea rows={8} cols={8} value={desc2} onChange={(e) => setDesc2(e.target.value)} />
                            </div>
                            <div>
                                <label>Tool header</label>
                                <input required value={toolHeader} onChange={(e) => setToolHeader(e.target.value)} />
                            </div>
                            <div>
                                <label>Tool images</label>
                                <input required type="file" multiple accept="image/*" onChange={(e) => setToolImages(e.target.files)} />
                            </div>
                        </div>
                        <div className='col-lg-6'>

                            <div>
                                <label>Client header</label>
                                <input required value={clientHeader} onChange={(e) => setClientHeader(e.target.value)} />
                            </div>
                            <div>
                                <label>Client images</label>
                                <input required type="file" multiple accept="image/*" onChange={(e) => setClientImages(e.target.files)} />
                            </div>
                            <div>
                                <label>DescImage1</label>
                                <input required type="file" accept="image/*" onChange={(e) => setDescImage1(e.target.files[0])} />
                            </div>
                            <div>
                                <label>DescImage2</label>
                                <input required type="file" accept="image/*" onChange={(e) => setDescImage2(e.target.files[0])} />
                            </div>
                            <div>
                                <label>descBetweenHeader</label>
                                <input required value={descBetweenHeader} onChange={(e) => setDescBetweenHeader(e.target.value)} />
                            </div>
                            <div>
                                <label>descBetweenDescription</label>
                                <textarea rows={8} cols={8} value={descBetweenDescription} onChange={(e) => setDescBetweenDescription(e.target.value)} />
                            </div>
                            <button className='submit-btn' type="submit">Add</button>
                        </div>
                    </div>
                </div>

            </form>

        </div>
    );
};

export default About;
