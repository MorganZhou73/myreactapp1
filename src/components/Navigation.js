import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? "nav-link active" : "nav-link";
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-brand">
                    <img
                        src={`${process.env.PUBLIC_URL}/logo192.png`}
                        alt="Project App1"
                        className="nav-logo"
                    />
                    <span className="nav-title">Project App1</span>
                </Link>

                <div className="nav-menu">
                    <Link to="/" className={isActive("/")}>
                        Home
                    </Link>
                    <Link to="/counter" className={isActive("/counter")}>
                        Counter
                    </Link>
                    <Link to="/todos" className={isActive("/todos")}>
                        Todos
                    </Link>
                    <Link to="/stock" className={isActive("/stock")}>
                        Stock
                    </Link>
                    <Link to="/about" className={isActive("/about")}>
                        About
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
