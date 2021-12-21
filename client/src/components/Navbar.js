import React from "react";
import "../styles/navbar.css"

const Navbar = ({changeContent}) => {

    const loadOtherContent = (btn, content) => {
        //removes active from all btns before adding it to the right btn
        Array.from(btn.target.parentNode.childNodes).forEach(btn => {
            btn.classList.remove("active")
        })
        btn.target.classList.add("active")
        changeContent(content)
    }

    return(
        <div className="navbar">
            <button className="nav-btn active top" onClick={(button) => loadOtherContent(button, "unfinishedTasks")}>
                <i className="fas fa-inbox"></i>
                Inbox
            </button>
            <button className="nav-btn" onClick={(button) => loadOtherContent(button, "finishedTasks")}>
                <i className="fas fa-check"></i>
                Finished Tasks
            </button>
        </div>
    )
}

export default Navbar
