import Products from "./Products";
import Team from "./Team";
import CustomerAnalytics from "./CustomerAnalytics";
import { createUseStyles } from 'react-jss';
import style from "./Style";

const useStyles = createUseStyles(style)

function Navigation() {
    const classes = useStyles();
    return (
        <div className="main-content-flex">
            <header className={classes.navHeader}>
                <h1 className={classes.navTitle}>Inventory Management System</h1>
                <ul className={classes.navHeaderMenu}>
                    <li className={classes.navHeaderItem}>
                        <a className={classes.navHeaderAnchor}>
                            One
                        </a>
                    </li>
                    <li className={classes.navHeaderItem}>
                        <a className={classes.navHeaderAnchor}>
                            Two
                        </a>
                    </li>
                    <li className={classes.navHeaderItem}>
                        <a className={classes.navHeaderAnchor}>
                            Three
                        </a>
                    </li>
                </ul>
            </header>
            <article className={classes.mainBody}>
                <h2>Products</h2>
                <Products/>
            </article>

        </div>
    )
}

export default Navigation;

/*
            <footer className="nav-footer">
                <h2>Goodbye!</h2>
            </footer>
*/