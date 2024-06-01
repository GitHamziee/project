import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserProfileComponent from './UserProfileComponent'

function UserComponentRouting() {
  return (
    <Routes>
        <Route path='/' element={(<UserProfileComponent/>)}>
            
        </Route>
    </Routes>
  )
}

export default UserComponentRouting
