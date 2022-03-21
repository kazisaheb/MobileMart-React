import React, { useEffect, useState } from 'react';
import './Products.css'
function Products({ keywords }) {

  const [phones, setPhones] = useState([])
  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/phones?search=${keywords}`)
      .then(res => res.json())
      .then(data => setPhones(data.data))
  }, [keywords])


  const CartStore = (slug) => {
    if (localStorage.getItem(slug)) {
      alert('Already added!')
    } else {
      localStorage.setItem(slug, 1)
    }
  }

  return (
    <div className='container d-flex flex-wrap justify-content-evenly'>
      {
        phones.map(phone => <div key={phone.slug} className='Products bg-dark text-light m-3 p-3'>
          <img src={phone.image} alt="" />
          <p>Brand: {phone.brand}</p>
          <h5>Model: {phone.phone_name}</h5>
          <button onClick={() => CartStore(phone.slug)} className='btn btn-danger'>Add to Cart</button>
        </div>)
      }
    </div>
  );
};

export default Products;