import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';

import classes from './SearchView.css';
import ProductList from '../components/Products/ProductList';

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

export default class SearchView extends Component {

  state = {
    products: [],
  };

  productSelected(product, dataSource) {
    console.log(product, dataSource);
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
