import React from 'react'
import Card from '../component/Card';
import image1 from '../assets/design1.jpg'
import image2 from '../assets/design2.jpg'
import image3 from '../assets/design3.jpg'

const AboutUs = () => {
  const products=[
    {"id":1,"name":"product1","price":1200,"img":"/assets/1.jpg"},
    {"id":2,"name":"product2","price":2200,"img":"/assets/2.jpg"},
    {"id":3,"name":"product3","price":10200,"img":"/assets/3.jpg"},
    {"id":4,"name":"product4","price":70200,"img":"/assets/design1.jpg"}
  ]
 
  return (
   <>
   <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={image1} className="d-block w-100" alt="img1"/>
    </div>
    <div className="carousel-item">
      <img src={image2} className="d-block w-100" alt="img2"/>
    </div>
    <div className="carousel-item">
      <img src={image3} className="d-block w-100" alt="img3"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<h1 className='Title'style={{padding:'20px'}}>More Features</h1>
<div className='row'>
{
  products.map((product)=>(
   
    <Card key={product.id} product={product}/>
   
  ))
}
</div>

   </>
  )
}

export default AboutUs