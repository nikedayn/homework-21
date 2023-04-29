import './button.scss';

const Button = (props) => {
    return(
        <button ref={props.btnRef} className={props.btnClass}>{props.btnText}</button>
    )
};

export default Button ;