import React from 'react'
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
        Welcome to Urban Trade Company, your ultimate destination for urban fashion and electronic essentials. Founded with a passion for blending style with functionality, we specialize in curating a dynamic collection of urban clothing, accessories, and cutting-edge electronic equipment for both men and women.

At Urban Trade, we understand that urban lifestyle demands versatility and innovation. That's why we offer a diverse range of products that cater to your everyday needs, whether you're exploring the city streets or staying connected on the go. From trendy streetwear that keeps you looking sharp to state-of-the-art electronics that enhance your lifestyle, our carefully selected items embody the essence of urban living.

Explore our curated selection and discover how our commitment to quality and style can elevate your urban experience. Whether you're shopping for the latest fashion trends or upgrading your tech gadgets, Urban Trade is your go-to destination for all things urban.

Join us in embracing the urban culture. Shop at Urban Trade today and redefine your style effortlessly.
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <Link to="/product" className='text-decoration-none text-black'>
                <h5 className="card-title text-center">Mens's Clothing</h5>
               
                </Link>
                </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
              <Link to="/product" className='text-decoration-none text-black'>
                <h5 className="card-title text-center">Women's Clothing</h5>
              </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <Link to="/product" className='text-decoration-none text-black'>
                <h5 className="card-title text-center">Jewelery</h5>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <Link to="/product" className='text-decoration-none text-black'>
                <h5 className="card-title text-center">Electronics</h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage