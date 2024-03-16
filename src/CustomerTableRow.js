import style from './Style';
import { useState } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(style)

function CustomerTableRow({user, colored}) {

    const [hovered, setHovered] = useState(false);
    const classes = useStyles();
    let cellBackground = colored ? classes.tableCellColored : classes.tableCellWhite
    cellBackground = hovered ? classes.tableCellHovered : cellBackground

    const setHoveredTrue = () => setHovered(true);
    const setHoveredFalse = () => setHovered(false);

    return (
        <section className={classes.customerRow}
            onMouseOver={setHoveredTrue} onMouseOut={setHoveredFalse}>
            <p className={cellBackground}>{user.fullName}</p>
            <p className={cellBackground}>{user.fullAddress}</p>
            <p className={cellBackground}>{user.email}</p>
            <p className={cellBackground}>{user.revenue}</p>
            <div className={cellBackground}>
                <div className={classes.centerImage}>
                    <img src={user.thumbnail} alt={user.fullName} className={classes.headshotPhoto} />
                </div>
            </div>
        </section>
    )
}

export default CustomerTableRow;