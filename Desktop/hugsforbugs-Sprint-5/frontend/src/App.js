
import React from 'react'
import Login from './Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Signup'
import Homepage from './Homepage' 
import Profile from './Profile'
import ForgotPassword from './ForgotPassword'
import EditProfile from './EditProfile'
import ShowEvents from './ShowEvents'
import BecomeOrganizer from './BecomeOrganizer'

function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/homepage' element={<Homepage/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/forgotpassword'  element={<ForgotPassword/>}></Route>
      <Route path='/editprofile'  element={<EditProfile/>}></Route>
      <Route path='/showevents'  element={<ShowEvents/>}></Route>
      <Route path='/becomeorganizer'  element={<BecomeOrganizer/>}></Route>
      </Routes>
      </BrowserRouter>  )
}
export default App