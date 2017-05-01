import { connect } from 'react-redux';
import Counter from '../views/Counter';

const mapStateToProps = (state, ownProps) => {
  return {
      count:state.count
  };
}



export default connect(
  mapStateToProps
)(Counter)
