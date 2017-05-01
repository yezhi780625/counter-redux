import React from 'react';
import PropTypes from 'prop-types';
import Button from '../containers/Button';

const Counter =({count})=>{
    return (
      <div>
        <Button text={"+"} />{count}<Button text={"-"} />
      </div>
    );
  }
Counter.propTypes ={
    count:PropTypes.number.isRequired
}

export default Counter;
