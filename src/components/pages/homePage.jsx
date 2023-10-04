import TopBar from '../topbar/TopBar'
import Navbar from '../molecule/NavButtonCollection'
import MainBody from '../mainBody'
import Footer from '../footer'
import Sidebar from '../home/filter_bar/Sidebar';
import Product from '../product';




function HomePage() {
   

  return (
    <>
   
  
      

      <MainBody>
        <Sidebar/>
        <Product/>
      </MainBody>

      {/* <Footer/> */}

    </>
  )
}

export default HomePage
