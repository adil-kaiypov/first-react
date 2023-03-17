import classes from './footer.module.css'

const Footer = (props) =>{
    return(
        <div className={classes.footer}>
            <h3>{props.text}</h3>
        </div>
    )
}

export default Footer;