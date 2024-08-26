import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Content = () => {
    const [content, setContent] = useState(null);
    const fetchContent = async () => {
        console.log("fetch content");
        try {
            const response = await axios.get(`http://localhost:8080/api/about/en`);
            setContent(response.data);
            console.log(response.data);

        } catch (error) {
            console.error('Error fetching about us content:', error);
        }
    };
    useEffect(() => {
        console.log("hiiii");
        fetchContent();
    }, []);
    return <div>
        {
            content ? <><img src={`data:image/jpeg;base64,${content.mainImage}`} /> <div>{content?.language}</div></> : null
        }
        {/* {
            content ? content.images.map((src) => {
                return(
                <img src={`data:image/jpeg;base64,${src}`} />
                )
            }) : null
        } */}
    </div>;
};

export default Content;
