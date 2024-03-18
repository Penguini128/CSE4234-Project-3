import style from './Style';
import {useEffect, useState} from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(style)

function ProductTableRow({content, colored}) {

   const [hovered, setHovered] = useState(false);
    const classes = useStyles();
    let cellBackground = colored ? classes.tableCellColored : classes.tableCellWhite
    cellBackground = hovered ? classes.tableCellHovered : cellBackground

    const setHoveredTrue = () => setHovered(true);
    const setHoveredFalse = () => setHovered(false);

    return (
        <section className={classes.productRow} key={content.id}
            onMouseOver={setHoveredTrue} onMouseOut={setHoveredFalse}>
            <p className={cellBackground}>{content.title}</p>
            <p className={cellBackground}>Price: ${content.price.toFixed(2)}</p>
            <p className={cellBackground}>Category: {content.category}</p>
            <p className={cellBackground}>Rating: {content.rating.rate}</p>
            <p className={cellBackground}>Inventory: {content.inventory}</p>
            <p className={cellBackground}>Revenue: ????? </p>
            <p className={cellBackground}>Button: goes here</p>
        </section>
    )
}

export default ProductTableRow;