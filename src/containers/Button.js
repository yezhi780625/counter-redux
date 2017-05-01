import { connect } from 'react-redux';
import Actions from '../data/Actions';
import Button from '../views/Button';

const mapStateToProps = (state, ownProps) => {
  return state;
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onBtnClick: () => {
        return ownProps.text==="+"?dispatch(Actions.increment(1)):dispatch(Actions.decrement(1));
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)
