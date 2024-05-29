import axios from 'axios';
import React from 'react'
import { useEffect } from 'react'


function Content() {
    const [data, setData] = React.useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/user/creations');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>{data}</div>
    )
}

export default Content