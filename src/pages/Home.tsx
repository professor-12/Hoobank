import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Stats from "../components/Stats";

const Home = () => {
    return (
        <div className="container px-2 md:px-12 lg:px-0 lg:w-[90%] mx-auto">
                <NavBar />
                <Hero />
                <Stats/>
        </div>
    );
};

export default Home;
