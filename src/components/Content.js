import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Content = ({ language }) => {
    const [content, setContent] = useState(null);

    const fetchContent = async () => {
        console.log("fetch contentf gjdfhgkd");
        
        try {
            const response = await axios.get('http://localhost:8080/api/about', { params: {language} });
            setContent(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching about us content:', error);
        }
    };
    useEffect(() => {
        console.log("hiiii");
        
        fetchContent();
    });
    return <div>

        clfgdkjfg
        {
// content
        }
        {/* <img src={`data:image/jpeg;base64,${content?.aboutImage2}`} /> */}
    </div>;
};

export default Content;
