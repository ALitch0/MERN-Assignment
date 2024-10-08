import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

function Product(){
    const[product, setProduct] = useState([]);

    const param = useParams().id;

    //using fetch to get data 
    useEffect(()=>{
      fetch(`https://mern-assignment-gyou.onrender.com/product/${param}`)
        .then(res => res.json())
        .then(data => setProduct(data));
    }, []);

    //set title
    useEffect(() => {
        document.title = product.name;
      }, []);
        return(
        <div className='product'>
            <img src={`../${product.imageUrl}`} className='product-image'  alt={product.name}/>
            <div className='details'>
                <div className='header'>
                    <span className='name'>
                        {product.name}
                    </span>
                    <div className='rating'>
                    <i class="bi bi-star"></i>{product.stars}
                    </div>
                    <div className='price'>
                        {product.price}
                    </div>
                </div>
                <button className='add-to-cart' >Add to cart</button>
                </div>        
        </div>
    )
}
export default Product;