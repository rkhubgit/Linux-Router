import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {Home} from './pages/Home'
import {Header} from './Header'

export const AppV2 = () =>{
    return(
        <>
            <h3>React Practice</h3>
            <Header/>
            <Routes>
                <Route path="/home" element={<Home/>} />
            </Routes>
        </>
    )
}