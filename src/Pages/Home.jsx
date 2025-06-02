import React from 'react'
import HeaderNav from '../components/HeaderNav'
import Carousels from '../components/Carousels'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Products from '../components/Products'


const Home = () => {
  const Offerimg='https://assets.indiadesire.com/images/amazon%20fashion%20eoss.jpg'
  return (
    <div>
     <HeaderNav/>
     <Carousels/>
     <Services/>
     <div className='Offerdimg'>
       <img to='/shop' src={Offerimg}/>
      
     </div> 
     <Products/>
     <Contact/>
    </div>
  )
}

export default Home
