import React from 'react'
import Menu from './Menu'
import "../styles.css"
import Footer from './Footer'

const Layout = ({ 
    title = 'Title', 
    description = 'Description', 
    className, 
    children }) => {
    return (
        <div>
            <Menu />
            
            <div className="mt-5 mb-5 ms-5" style={{color: 'white'}}>
                <h1>{title}</h1>
                <p className="lead">{description}</p>
            </div>
            <div className={className}>{children}</div>
            <Footer/>
        </div>
    )
};

export default Layout;