import classes from './header.module.css';

const Header = (props) =>{
    return(
        <div className={classes.header}>
           <h3>{props.text}</h3> 
        </div>
    )
}

export default Header;