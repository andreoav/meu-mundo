import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import { connect } from 'react-redux;'

import classes from './SearchView.css';
import ProductList from '../components/Products/ProductList';
import * as actions from '../store/actions/actionCreators';

const availableProducts = [
  {
    id: 1,
    name: 'Arroz',
  },
];

const dataSourceConfig = {
  text: 'name',
  value: 'id',
}

class SearchView extends Component {

  state = {
    products: [],
  };

  productSelected(product, dataSource) {
    this.props.onProductSearch(product);
  }

  render() {
    return (
      <div>
        <AutoComplete
          floatingLabelText="Informe o nome do produto"
          fullWidth={true}
          dataSource={availableProducts}
          dataSourceConfig={dataSourceConfig}
          onNewRequest={this.productSelected}/>
        {this.state.products.length > 0 && <ProductList className={classes.Products} />}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onProductSearch: (query) => dispatch(actions.searchProduct(query)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchView);;
