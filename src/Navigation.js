import Products from "./Products";
import Team from "./Team";
import CustomerAnalytics from "./CustomerAnalytics";
import { createUseStyles } from "react-jss";
import style from "./Style";
import { useState } from "react";

const useStyles = createUseStyles(style)

const pages = [{id: 0, title: "Products", content: <Products/>},
               {id:1, title:"Customer Analytics", content:<CustomerAnalytics/>},
               {id:2, title:"The Team", content:<Team/>}]

function Navigation() {
    const classes = useStyles();
    const [currentPage, setCurrentPage] = useState(pages[0]);
  
  return (
    <div className="main-content-flex">
        <header className={classes.navHeader}>
            <h1 className={classes.navTitle}>Inventory Management System</h1>
            <ul className={classes.navHeaderMenu}>
                {pages.map((page) => (
                    <li className={classes.navHeaderItem}>
                        <div className={classes.navHeaderAnchor} onClick={() => setCurrentPage(page)}>
                            {page.title}
                        </div>
                    </li>
                ))}
            </ul>
        </header>
        <article className={classes.mainBody}>
            <h2 className={classes.bodyHeader}>{currentPage.title}</h2>
            {currentPage.content}
        </article>
    </div>
  );
}

export default Navigation;