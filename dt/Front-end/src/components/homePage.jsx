import TopBar from './topbar'
import Navbar from './navbar'
import MainBody from './mainBody'
import Footer from './footer'
import Sidebar from './sidebar';
import Product from './product';




function HomePage() {
   

  return (
    <>
   
  
      <TopBar/>
      <Navbar/>

      <MainBody>
        <Sidebar/>
        <Product/>
      </MainBody>

      <Footer/>

    </>
  )
}

export default HomePage
