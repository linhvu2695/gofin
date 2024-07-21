import React, { useContext, useEffect } from "react";

import "./Homepage.css";
import Backdrop from "../components/Common/Backdrop";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Common/Navbar";

function Homepage() {
    const { isLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login");
        }
    }, []);

    if (isLoggedIn) {
        return (
            <>
                <Navbar />
                <Backdrop />

                <div className="homepage"></div>
            </>
        );
    }
}

export default Homepage;
