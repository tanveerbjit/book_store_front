import TopBar from './topbar/TopBar'
import Navbar from './molecule/NavButtonCollection'
import Footer from './footer'
import LoginForm from './login'



function LoginPage() {
  

  return (
    <>
      <TopBar/>
      <Navbar/>
      <LoginForm/>
      {/* <Footer/> */}
    </>
  )
}

export default LoginPage
