import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./Components/Header/Header";
import Main from "./Components/Pages/Main/main";
import Catalog from "./Components/Pages/Catalog/Catalog";
import Cards from "./Components/Pages/Cards/Cards";
import Cart from "./Components/Pages/Cart/Cart";
import Footer from "./Components/Footer/Footer";

function App() {

    return (
        <>
            <Header />
            <Routes>
                <Route path={'/'} element={<Main />} />
                <Route path={'/catalog'} element={<Catalog />} />
                <Route path={`/card`} element={<Cards />} />
                <Route path={'/cart'} element={<Cart />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
