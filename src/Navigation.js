import { createUseStyles } from "react-jss";
import style from "./Style";

const useStyles = createUseStyles(style);

function Navigation({ pages, onPageSelect }) {
  const classes = useStyles();

  return (
    <header className={classes.navHeader}>
      <h1 className={classes.navTitle}>Inventory Management System</h1>
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
