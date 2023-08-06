import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer>
    <div className="bg-body-secondary py-5">
 <div className="row py-5">
   <div className='col col-4' style={{paddingLeft:'150px'}}>
   <h4 className="m-auto"><img className='logo' src={logo} alt='logo'/></h4>
   <p>We are the leading architect and interior design firm in the world.</p>
   </div>
   
   <div className='col col-2' style={{paddingLeft:'150px'}}>
     <h6><u>Company:</u></h6>
     <ul className='list-unstyled'>
       <li className='b'>About Us</li>
       <li className='b'>Comments</li>
       <li className='b'>Our Work</li>
       <li className='b'>Partners</li>
       <li className='b'>Blog</li>
     </ul>
   </div>
   <div className='col col-2' style={{paddingLeft:'150px'}}>
     <h6><u>More:</u></h6>
     <ul className='list-unstyled'>
       <li className='z'>Style Guide</li>
       <li className='z'>Protected</li>
       <li className='z'>Licenses</li>
       <li className='z'>404</li>
     </ul>
   </div>
   <div className='col col-2' style={{paddingLeft:'135px'}}>
   <h6><u>Follow Us:</u></h6>
            <ul className="list-unstyled">
                <li  className='a '><a href="https://www.facebook.com/your-page" ><i className="fa-brands fa-facebook text-dark"></i></a></li>
                <li  className='a'><a href="https://instagram.com/your-handle" ><i className="fa-brands fa-instagram text-dark"></i></a></li>
                <li  className='a' ><a href="https://www.linkedin.com/in/your-profile" ><i className="fa-brands fa-linkedin text-dark"></i></a></li>
            </ul>
   </div>
 </div>
        <p className='m-auto'>Copyright &copy; Interior | Designed 2023. All right reserved.</p>
    </div>
   
 </footer>
  )
}

export default Footer