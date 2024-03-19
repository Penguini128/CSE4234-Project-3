import { createUseStyles } from "react-jss";
import style from "./Style";

const useStyles = createUseStyles(style);

const pageTitle = "Inventory Management System";

function Navigation({ pages, onPageSelect }) {
  const classes = useStyles();

  return (
    <header className={classes.navHeader}>
      <div className={classes.navTitle}>
        {
            pageTitle.split('').map((letter) => (<div className={classes.funTitle}><h1>{letter === " " ? '\u00A0' : letter}</h1></div>))
        }
      </div>
      <ul className={classes.navHeaderMenu}>
        {pages.map((page) => (
          <li key={page.title} className={classes.navHeaderItem}>
            <div
              className={classes.navHeaderAnchor}
              onClick={() => onPageSelect(page)}
            >
              {page.title}
            </div>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Navigation;
