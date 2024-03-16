import Products from "./Products";
import Team from "./Team";
import CustomerAnalytics from "./CustomerAnalytics";
import { createUseStyles } from "react-jss";
import style from "./Style";
import { useState } from "react";

const useStyles = createUseStyles(style)

function Navigation() {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <div className="main-content-flex">
      <header className={classes.navHeader}>
        <h1 className={classes.navTitle}>Inventory Management System</h1>
        <ul className={classes.navHeaderMenu}>
          <li className={classes.navHeaderItem}>
            <div
              className={classes.navHeaderAnchor}
              onClick={() => setCurrentPage(0)}
            >
              Products
            </div>
          </li>
          <li className={classes.navHeaderItem}>
            <div
              className={classes.navHeaderAnchor}
              onClick={() => setCurrentPage(1)}
            >
              Customer Analytics
            </div>
          </li>
          <li
            className={classes.navHeaderItem}
            onClick={() => setCurrentPage(2)}
          >
            <div className={classes.navHeaderAnchor}>Team</div>
          </li>
        </ul>
      </header>
      <article className={classes.mainBody}>
        {currentPage === 0 && (
          <>
            <h2 className={classes.bodyHeader}>Products</h2>
            <Products />
          </>
        )}
        {currentPage === 1 && (
          <>
            <h2 className={classes.bodyHeader}>Customers</h2>
            <CustomerAnalytics />
          </>
        )}
        {currentPage === 2 && (
          <>
            <h2 className={classes.bodyHeader}>The Team</h2>
            <Team />
          </>
        )}
      </article>
    </div>
  );
}

export default Navigation;

/*
            <footer className="nav-footer">
                <h2>Goodbye!</h2>
            </footer>
*/
