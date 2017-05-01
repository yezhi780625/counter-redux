import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, onBtnClick }) =>
    (
        <button onClick={onBtnClick}>
            {text}
        </button>
    )
Button.propTypes ={
    text:PropTypes.string.isRequired,
    onBtnClick:PropTypes.func.isRequired
}
export default Button;