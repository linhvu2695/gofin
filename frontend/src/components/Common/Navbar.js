import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Navbar.css";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <div className="navbar">
            <LogoNavItem />
            <div className="nav-items">
                <NavItem label={"MARKET"} url={"/market"} />
                <NavItem label={"ADMIN"} url={"/admin"} />
            </div>
            <UserNavItem username={"Linh Vu"}/>
        </div>
    );
}

function NavItem({ label, url }) {
    return (
        <div className="nav-item">
            <Link to={url}>{label}</Link>
        </div>
    );
}

function UserNavItem({username, img}) {
    return (
        <div className="user-nav-item">
            <div className="user-avatar">

            </div>
            {username}
        </div>
    )
}

function LogoNavItem() {
    return (
        <div className="logo-nav-item">

        </div>
    )
}

export default Navbar;
