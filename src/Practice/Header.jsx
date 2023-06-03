import React from 'react'
import {NavLink} from 'react-router-dom'

export const Header = () => {
    return(
        <>
            <ul>
                <li>
                    <NavLink to="/home">Home</NavLink>
                </li>
            </ul>
        </>
    )
}