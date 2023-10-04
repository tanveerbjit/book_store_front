import React from 'react'
import TopBar from './topbar/TopBar'
import Navbar from './molecule/NavButtonCollection'
import Footer from './footer'
import UserDashboard from './dashboard/user/UserDashboard'
import UserProfile from './dashboard/user/profile/UserProfile'
import "../assets/css/need.css"
import UserDashboardd from './UserDashboardd'



function UserProfilePage() {
  return (
    
    <>
    
      <TopBar/>
      <Navbar/>
      <UserDashboard>
        <UserProfile/>
      </UserDashboard>
      <Footer/>

    </>
  )
}

export default UserProfilePage