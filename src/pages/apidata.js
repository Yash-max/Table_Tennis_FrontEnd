import { useEffect, useState } from "react";
import Button from '@mui/material/Button';

const Apidata = () => {

    async function fetchData() {
        await fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data);
                setApiData(data);
            })
    }

    const [apiData, setApiData] = useState([{ id: 'Loading', title: 'Loading ...' }]);

    useEffect(() => {
        console.log('Start');
        fetchData();
    }, []);

    return <>
    <Button variant="contained">Contained</Button>
    
     <h1>API DATA :
        {/* {
            apiData.map((item) => {
                return <div key={item.id}>{item.title}</div>;
            })
        } */}
    </h1>
    </>
    ;
};
export default Apidata; 