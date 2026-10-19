import { Routes, Route, Link } from "react-router-dom";
import { Navbar } from './components/navbar';
import ChiSiamo from "./pages/ChiSiamo";
import Corsi from "./pages/Corsi";
import Assistenza from "./pages/Assistenza";
import Iscriviti from "./pages/Iscriviti";
import Home from "./pages/Home";

function App() {
    return(

    <div>
        <Navbar />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chisiamo" element={<ChiSiamo />} />
            <Route path="/corsi" element={<Corsi />} />
            <Route path="/iscriviti" element={<Iscriviti />} />
            <Route path="/assistenza" element={<Assistenza />} />
        </Routes>
    </div>

    );
}

export default App;
