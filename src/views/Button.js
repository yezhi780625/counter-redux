import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';

const Button = ({ text, onBtnClick }) =>
    (
        <MuiThemeProvider>
            <FloatingActionButton
                mini={true}
                onClick={onBtnClick}>
                <FontIcon className="material-icons">{text}</FontIcon>
            </FloatingActionButton>
        </MuiThemeProvider>
    )
Button.propTypes = {
    text: PropTypes.string.isRequired,
    onBtnClick: PropTypes.func.isRequired
}
export default Button;