import React, {useState, useEffect} from 'react';

function Main(){

    const[products, setProducts] = useState([]);
    
    useEffect(()=>{
        fetch("http://localhost:3001/api/products")
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])
    return(
        <>
            
        </>
    )
}
export default Main;