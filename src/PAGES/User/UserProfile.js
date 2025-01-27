import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import UserSidebar from '../../COMPONENTS/UserProfile/UserSidebar'
import AccountSettings from '../../COMPONENTS/UserProfile/AccountSettings'
import './UserProfile.css'
import ChangePassword from '../../COMPONENTS/UserProfile/ChangePassword'

const UserProfile = () => {

    const {activepage} = useParams()
    //alert(activepage)

  return (
    <div className='userprofile'>
        <Navbar />
        <SingleBanner
        heading={'My Profile'}
        bannerimage = 'https://images.unsplash.com/photo-1543362906-acfc16c67564?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        { /*UserProfile, showing {activepage} */ }
        <div className='userprofilein'>
            <div className='left'>
                <UserSidebar activepage={activepage}/>
            </div>
            <div className='right'>
                {activepage === 'accountsettings' && <AccountSettings/>}
                {activepage === 'changepassword' && <ChangePassword/>}
            </div>

        </div>
        <Footer1 />
        <Footer2 />
    </div>
        
  )
}

export default UserProfile