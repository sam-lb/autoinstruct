
import NavItem from "./NavItem";


function Header() {
    return (
        <header>
            <h1>Autoinstruct: instant instructional videos.</h1>
            <nav id="header-nav">
                <NavItem text="Home" target="#"/>
                <NavItem text="About" target="#"/>
                <NavItem text="Examples" target="#"/>
                <NavItem text="Source" target="https://github.com/sam-lb/autoinstruct"/>
            </nav>
        </header>
    );
}

export default Header