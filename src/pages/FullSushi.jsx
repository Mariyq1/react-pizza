import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FullSushi =()=>{
    const [sushi, setSushi] = useState();
    const {id} = useParams();
    useEffect(()=>{
        async function fetchSushi(){
        try {
            const {data} = await axios.get('https://6403a4573bdc59fa8f2a3657.mockapi.io/items/'+id)
            setSushi(data);
        } catch (error) {
            alert('Error')
        }
    }
    fetchSushi();
    }, []);
    if(!sushi){
        return 'Loading'
    }

    return (
        <div className="container">
            <img src={sushi.imageURL}/>
            <h2>{sushi.title}</h2>
            <h4>{sushi.price}$</h4>
        </div>
    )
}
export default FullSushi;