import React from "react";
import './TopoPagina.css';

export default function TopoPagina ({topoPreto}) {
    return (
        // Aqui vai ver se o header.topoPreto no CSS vai ser utilizado ou não
        <header className={topoPreto ? 'topoPreto' : ''}>
            
            <div className={`topoPagina--logo`}>
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix_Logo" />
                </a>
            </div> 
        </header>
    );
}