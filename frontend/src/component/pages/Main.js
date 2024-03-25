import React, {useEffect} from 'react';

function Main(props){
    //set title
    useEffect(() => {
        document.title = "Home";
      }, []);

    return(
        <main>
            <ul>
                {props.products.map((product)=>{
                    return(
                        <li key={product.id}>
                            <a href= {`/product/${product._id}`}>
                                <img src={product.imageUrl} className='product-image'  alt={product.name}/>
                            </a>
                            <div className='content'>
                                <div className='name'>{product.name}</div>
                                <div className='stars'>{product.stars}</div>
                                <div className='price'>${product.price}</div>
                            </div>
                            <button className='add-to-cart'>Add to cart</button>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}
export default Main;