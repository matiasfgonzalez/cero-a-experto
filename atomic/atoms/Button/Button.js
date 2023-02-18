import Proptypes from "prop-types";
import "./Button.css";
import classNames from "classnames";

const Button = ({ type, children }) => (
    <button
        className={classNames("button", {
            [`type-${type}`]: type
        })}
    >
        {children}
    </button>
);

Button.propTypes = {
    children: Proptypes.node.isRequired,
    type: Proptypes.oneOf[("primary", "secondary")]
};

Button.defaultProps = {
    type: "primary"
};

export default Button;
