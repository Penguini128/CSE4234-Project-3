import style from './Style';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(style)

function Product({content, colored}) {

    const classes = useStyles();
    let cellBackground = colored ? classes.productCellColored : classes.productCellWhite

    return (
        <div className={classes.productRow} key={content.id}>
            <p className={cellBackground}>{content.title}</p>
            <p className={cellBackground}>Price: ${content.price}</p>
            <p className={cellBackground}>Category: {content.category}</p>
            <p className={cellBackground}>Rating: {content.rating.rate}</p>
            <p className={cellBackground}>Inventory: ${content.inventory}</p>
            <p className={cellBackground}>Revenue: ????? </p>
            <p className={cellBackground}>Button: goes here</p>
        </div>
                )
}

export default Product;