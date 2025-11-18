import React from "react";

// Components
import Navbar from "./Navbar";
import Hero from "./Hero";
import Projects from "./Projects";
import Clients from "./Clients";
import ContactForm from "./ContactForm";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Projects />
            <Clients />
            <ContactForm />
            <Newsletter />
            <Footer />
        </>
    );
};

export default Home;

