import Navigation from './Navigation';
import { createUseStyles } from 'react-jss';
import style from './Style';

const useStyles = createUseStyles(style);

function App() {
    const classes = useStyles();
    return (
        <div className={classes.app}>
            <Navigation/>
        </div>
    );
}

export default App;
