import React from 'react';
import PropTypes from 'prop-types';
import Button from '../containers/Button';

const style = {
  margin:"20px"
};
const Counter =({count})=>{
    return (
      <div>
        <Button text={"-"} /><span style={style}>{count}</span><Button text={"+"} />
      </div>
    );
  }
Counter.propTypes ={
    count:PropTypes.number.isRequired
}

export default Counter;
