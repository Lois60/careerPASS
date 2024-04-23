
import './Button.css'
export const Button = ({children, onClick = () => {}}) =>{
    return (
      <div className="custom-bottom">
        <button
          onClick={() => (window.location.href = "/RegisterForm")}
          className="customhead-bottom"
        >
          {children}
        </button>
      </div>
    );
};

