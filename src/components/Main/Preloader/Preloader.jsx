import  preloader from '../../../images/preloader.gif';
import classes from './Preloader.module.css';

const Preloader = () => {
    return (
        <div>
            <img className={classes.preloader} src={preloader} />  
        </div>
    )
}

export default Preloader;