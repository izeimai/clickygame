import React from "react";
import "./style.css"

function Header(props) {
    return (
        <div className="jumbotron text-center">
            <h1>Clicky Game</h1>
            <h3>Click on an image to earn points, but don't click on any more than once!</h3>
        </div>
    );
}

export default Header;