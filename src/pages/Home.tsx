import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

const Home = () => {
    return (
        <div className="container lg:w-[90%] mx-auto">
                <NavBar />
                <Hero/>
        </div>
    );
};

export default Home;
