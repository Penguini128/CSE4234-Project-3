import style from "./Style";
import { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import Product from "./Product";

const useStyles = createUseStyles(style);

function ProductTableRow({ content, colored }) {

  const [hovered, setHovered] = useState(false);
  const [popupVisible, setPopupVisiblity] = useState(false);

  const classes = useStyles();

  let cellBackground = colored
    ? classes.tableCellColored
    : classes.tableCellWhite;
  cellBackground = hovered ? classes.tableCellHovered : cellBackground;

  const setHoveredTrue = () => setHovered(true);
  const setHoveredFalse = () => setHovered(false);

  const setPopupTrue = () => setPopupVisiblity(true);

  const productPopup = <Product setPopup={setPopupVisiblity} />;

  return (
    <section
      className={classes.productRow}
      key={content.id}
      onMouseOver={setHoveredTrue}
      onMouseOut={setHoveredFalse}
    >
      <p className={cellBackground}>{content.title}</p>
      <div className={cellBackground}><p className={classes.alignRight}>${content.price.toFixed(2)}</p></div>
      <p className={cellBackground}>{content.category}</p>
      <div className={cellBackground}><p className={classes.alignRight}>{content.rating.rate}</p></div>
      <div className={cellBackground}><p className={classes.alignRight}>{content.inventory}</p></div>
      <div className={cellBackground}><p className={classes.alignRight}>?????</p></div>
      <div className={cellBackground}>
        <button className={classes.learnMoreButton} onClick={setPopupTrue}>Learn More</button>
        {popupVisible ? productPopup : ""}
      </div>
    </section>
  );
}

export default ProductTableRow;
