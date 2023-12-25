import React from "react"
import "./Footer.css"

const date = new Date().getFullYear()

function Footer(){
    return <div className="footer">
        <p className="footer-text">Copyright ©️ {date}</p>
    </div>
}

export default Footer