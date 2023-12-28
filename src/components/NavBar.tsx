const NavBar = () => {
    return (
        <nav className="flex text-white justify-between items-center py-9 h-12">
            <div className="logo">
                <img src="/logo.efc6c435.svg"  className="h-[12]" alt="" />
            </div>
            <ul className="flex space-x-7 font-Poppins">
                <li>Home</li>
                <li>Features</li>
                <li>Product</li>
                <li>Clients</li>
            </ul>
        </nav>
    );
};

export default NavBar;
