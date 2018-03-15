import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { changeTextInput, showProductsStock} from '../actions/actions'
import SearchBar from '../components/search-bar'

const mapStateToProps = (state) => {
  const {
    textInput,
    checked
  } = state.Reducer;

  return {
    text: textInput,
    checkbox: checked
  }
};

const mapDispatchToProps = (dispatch) => {
  return  bindActionCreators({ 
    setTextInput : changeTextInput,
    setProductsStock : showProductsStock
  }, dispatch)
};

const SearchBarWithRedux = connect(mapStateToProps,mapDispatchToProps)(SearchBar);

export default SearchBarWithRedux;