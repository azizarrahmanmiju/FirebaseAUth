import "./Utiles.css"

// eslint-disable-next-line react/prop-types
const Button = ({ children, onClick, type }) => {
    return (
        <div>
            <button type={type} onClick={onClick} className='button'>{children}</button>
        </div>
    );
};

export default Button;