import './main.css';
import Hero from "./Hero/Hero";
import Category from "./Category/caregory";
import AboutUs from "./AboutUs/AboutUs";
import Service from "./Service/Service";
import Mailing from "./Mailing/Mailing";

function Main() {
    return (
        <main className="main">
            <Hero/>
            <Category/>
            <Service/>
            <AboutUs/>
            <Mailing/>
        </main>
    );
}

export default Main;
