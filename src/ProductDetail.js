import React, {useState, useEffect}from 'react'
import { useParams } from 'react-router-dom'
import Addtocart from './addtocart';
import './ProductDetail.css'

function ProductDetail({counter, setCounter}) {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = useParams();

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>res.json())
        .then((result)=>{
            setProduct(result);
            setLoading(false);
        })
    },[id]);

    if(loading){
      return (
        <div>
          Loading....
        </div>
      )
    };
  

  return (
    <>
      <div className='product-detail' key={product.id}>
        <img src={product.image} alt="product-detail" />
        <p>{product.title}</p>
        <p >Price: {product.price}</p>
        <p > Description: {product.description}</p>
        <p>Rating: {product.rating.rate}</p>
      </div>
      <Addtocart />
    </>
  )
}

export default ProductDetail