import { Routes, Route, Link } from "react-router-dom";


export const Navbar = () => {
    return (
        <nav 
        className="navbar navbar-expand-lg navbar-dark bg-dark">
                     <ul>
                       <li><Link to="/chisiamo">Chi siamo</Link></li>
                       <li><Link to="/corsi">Corsi</Link></li>
                       <li><Link to="/iscriviti">Iscriviti</Link></li>
                       <li><Link to="/assistenza">Assistenza</Link></li>                       
                    </ul>       
        </nav>

    );
};