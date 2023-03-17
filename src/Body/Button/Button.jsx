import classes from './button.module.css';

const Button = ({clickText}) =>{
    return(
        <div>
            <button>
                {clickText}
            </button>            
        </div>
    );
};

export default Button;