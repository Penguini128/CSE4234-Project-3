import Products from "./Products";
import Team from "./Team";
import CustomerAnalytics from "./CustomerAnalytics";
import { createUseStyles } from "react-jss";
import colors from "./Colors";
import { useState } from "react";

const useStyles = createUseStyles({
  navHeader: {
    margin: 0,
    display: "flex",
    alignItems: "center",
    width: "auto",
    background: colors.smokeyWhite,
    color: "aliceblue",
    padding: "20px 30px",
    cursor: "pointer",
    boxShadow:
      "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 0px 30px",
  },
  navTitle: {
    display: "inline-block",
    witdth: "auto",
    margin: "0px",
    background: `linear-gradient(to right, ${colors.skyBlue}, ${colors.coral})`,
    backgroundClip: "text",
    color: "transparent",
    verticalAlign: "center",
  },
  navHeaderMenu: {
    display: "inline-block",
    marginLeft: "auto",
    margin: 0,
  },
  navHeaderItem: {
    display: "inline-block",
    borderStyle: "solid",
    borderWidth: "1px",
    backgroundColor: colors.white,
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
    borderRadius: "10px",
    margin: "0.5em",
  },
  navHeaderAnchor: {
    display: "inline-block",
    borderColor: "#fff",
    color: colors.mutePurple,
    textDecoration: "none",
    padding: "10px 20px",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  mainBody: {
    padding: "30px",
  },

  bodyHeader: {
    margin: 0,
  },
});

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
