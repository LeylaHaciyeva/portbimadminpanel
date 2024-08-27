import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import axios from 'axios'
const Career = () => {
    const [responsibilities, setResponsibilities] = useState("")
    const [language, setLanguage] = useState("en")
    const [type, setType] = useState("")
    const [location, setLocation] = useState("")
    const [department, setDepartment] = useState("")
    const [skills, setSkills] = useState("")
    const [position, setPosition] = useState("")
    const [lastDate, setLastDate] = useState("")

    const handleSubmitCareer = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('responsibilities', responsibilities);
        formData.append('language', language);
        formData.append('location', location)
        formData.append('department', department)
        formData.append('skills', skills)
        formData.append('position', position)
        formData.append('type', type)
        formData.append('lastDate', lastDate)
        try {
            // console.log(formData);
            const response = await axios.post('http://localhost:8080/api/career', formData);
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
        <div>
            <Sidebar />
            <div className='career-container' >
                <form onSubmit={handleSubmitCareer}>
                    <div className='form-group'>
                        <label>Language:</label>
                        <select value={language} onChange={(e) => setLanguage(e.target.value)} required>
                            <option value="en">english</option>
                            <option value="ru">russian</option>
                            <option value="az">azerbaijani</option>
                        </select>
                    </div>
                    <div className='form-group form-group-quill '>
                    <label>Responsibilities:</label>
                    <ReactQuill theme="snow" value={responsibilities} onChange={(value) => setResponsibilities(value)} />
                     </div>   
                    <div className='form-group'>
                        <label>Type:</label>
                        <input required type='text' placeholder='Type' onChange={e => setType(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label>Location:</label>
                        <input required type='text' placeholder='Location' onChange={e => setLocation(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label>Department:</label>
                        <input required type='text' placeholder='Department' onChange={e => setDepartment(e.target.value)} />
                    </div>
                    <div className='form-group form-group-quill'>
                        <label>Skills:</label>
                        <ReactQuill theme="snow" value={skills} onChange={(value) => setSkills(value)} />
                    </div>
                    <div className='form-group'>
                        <label>Position:</label>
                        <input required type='text' placeholder='Position' onChange={e => setPosition(e.target.value)} />
                    </div>

                    <div className='form-group'>
                        <label>Last date:</label>
                        <input required type='date' placeholder='Last date' value={lastDate} onChange={e => setLastDate(e.target.value)} />
                    </div>
                    <button>Add</button>
                </form>

            </div>
        </div>
    )
}

export default Career
