import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
            <div className='sidebar'>
                <div>
                <NavLink to="/admin/about">About</NavLink>
                <NavLink to="/admin/project">Project</NavLink>
                <NavLink to="/admin/contact">Contact</NavLink>
                <NavLink to="/admin/career">Career</NavLink>
                <NavLink to="/admin/news">News</NavLink>
                </div>
            </div>
    )
}

export default Sidebar
