
import NavItem from "./NavItem";


function Header() {
    return (
        <header>
            <h1>Autoinstruct: instant instructional videos.</h1>
            <nav id="header-nav">
                <NavItem text="Home"/>
                <NavItem text="About"/>
                <NavItem text="Examples"/>
            </nav>
        </header>
    );
}

export default Header