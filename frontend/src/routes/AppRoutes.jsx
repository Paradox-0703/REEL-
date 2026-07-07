import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserRegister from '../pages/auth/UserRegister'
import UserLogin from '../pages/auth/UserLogin'
import FoodPartnerRegister from '../pages/auth/FoodPartnerRegister'
import FoodPartnerLogin from '../pages/auth/FoodPartnerLogin'
import Home from '../pages/general/Home'
import CreateFood from '../pages/food-partner/CreateFood'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/user/register" element={<UserRegister />} />
      <Route path="/user/login" element={<UserLogin />} />
      <Route path="/food-partner/register" element={<FoodPartnerRegister />} />
      <Route path="/food-partner/login" element={<FoodPartnerLogin />} />
      <Route path='/' element={<Home/>}/>
      <Route path='/create-food' element={<CreateFood/>}/>
    </Routes>
  )
}

export default AppRoutes