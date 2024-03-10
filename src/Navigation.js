import Products from "./Products";
import Team from "./Team";
import CustomerAnalytics from "./CustomerAnalytics";

function Navigation() {
    return (
        <div className="main-content-flex">
            <header className="nav-header">
                <ul>
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
                </ul>
            </header>
            <article className="main-body">
                <Products/>
                <Team/>
                <CustomerAnalytics/>
            </article>
            <footer className="nav-footer">
                <h2>Goodbye!</h2>
            </footer>
        </div>
    )
}

export default Navigation;