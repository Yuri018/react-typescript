import './styles.css'

interface ButtonProps {
    onClick: () => void;
}

function Button({onClick}: ButtonProps) {
    return <div>
        <button className='button-component' onClick={onClick}>Reset</button>
    </div>
    
}

export default Button;