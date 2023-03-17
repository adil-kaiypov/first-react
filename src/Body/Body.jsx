import classes from './body.module.css';
import Component from "./Component/Component";
import Button from './Button/Button';


const Body = (props) =>{
    return(
        <div className={classes.body}>
            <h3>{props.text}</h3>
            <Component text = {"Фура едет по холмам"} />
            <h4>Ingredients:</h4>
            {props.Ingredients.map(el => <p>{el}</p>)}
            <Button clickText={"text for a button"}/>
        </div>
    )
}

export default Body;