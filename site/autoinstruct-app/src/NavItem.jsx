

function NavItem({ text, target }) {
    return (
        <div class="nav-item">
            <a href={target}>{ text }</a>
        </div>
    );
}

export default NavItem