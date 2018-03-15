import { connect } from "react-redux";
import ProductTable from '../components/product-table'

const mapStateToProps = (state) => {
  const { filterProducts } = state.Reducer;
  return {
    products: filterProducts,
  }
}

const ProductTableWithRedux = connect(mapStateToProps)(ProductTable);

export default ProductTableWithRedux;