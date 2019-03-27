import React from "react"

import SearchBar from "./SearchBar"

const Header = () => {
    return (
        <nav className="navbar navbar-light">
            <div className="nav-default">
                <a className="navbar-brand nav-brand" href="/">NEWZO</a>
                <SearchBar loc="header"/>
            </div>
        </nav>
    )
}

export default Header