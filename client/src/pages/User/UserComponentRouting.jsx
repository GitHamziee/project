import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserProfileComponent from './UserProfileComponent'
import UserSettingsComponent from './UserSettingsComponent'

function UserComponentRouting() {
  return (
    <Routes>
        <Route path='/' element={(<UserProfileComponent/>)}>
            <Route path='/settings/*' element={(<h1>Hello world</h1>)}></Route>
        </Route>
    </Routes>
  )
}

export default UserComponentRouting
