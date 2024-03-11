import logo from './logo.svg';
import Navigation from './Navigation';
import './App.css';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    app: {
        margin: '0rem',
        padding: '0rem',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }
})

function App() {
    const classes = useStyles();
    return (
        <div className={classes.app}>
            <Navigation/>
        </div>
    );
}

export default App;
