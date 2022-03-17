import React, { useEffect, useState } from 'react';
import './Products.css'
function Products() {

  const keyword = 'sam'

  const [phones, setPhones] = useState([])
  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/phones?search=${keyword}`)
      .then(res => res.json())
      .then(data => setPhones(data.data))
  }, [])

  return (
    <div className='container d-flex flex-wrap justify-content-evenly'>
      {
        phones.map(phone => <div key={phone.slug} className='Products bg-dark text-light m-3 p-3'>
          <img src={phone.image} alt="" />
          <p>Brand: {phone.brand}</p>
          <h5>Model: {phone.phone_name}</h5>
        </div>)
      }

    </div>
  );
};

export default Products;