import Products from "./Products";
import Team from "./Team";
import CustomerAnalytics from "./CustomerAnalytics";
import { createUseStyles } from 'react-jss';
import colors from "./Colors";

const useStyles = createUseStyles({
    navHeader: {
        margin: 0,
        display: 'flex',
        alignItems: 'center',
        width: 'auto',
        background: colors.smokeyWhite,
        color: 'aliceblue',
        padding: '20px 30px',
        boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 0px 30px'
    },
    navTitle: {
        display: 'inline-block',
        witdth: 'auto',
        margin: '0px',
        background: `linear-gradient(to right, ${colors.skyBlue}, ${colors.coral})`,
        backgroundClip: 'text',
        color: 'transparent',
        verticalAlign: 'center'
    },
    navHeaderMenu: {
        display: 'inline-block',
        marginLeft: 'auto',
        margin: 0
    },
    navHeaderItem: {
        display: 'inline-block',
        borderStyle: 'solid',
        borderWidth: '1px',
        backgroundColor : colors.white,
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
        borderRadius: '10px',
        margin: '0.5em',
      
    },
    navHeaderAnchor: {
        display: 'inline-block',
        borderColor: '#fff',
        color: colors.mutePurple,
        textDecoration: 'none',
        padding: '10px 20px',
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    mainBody: {
        padding: '30px'
    },

    bodyHeader: {
        margin: 0
    }
})

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
                <h2 className={classes.bodyHeader}>Products</h2>
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