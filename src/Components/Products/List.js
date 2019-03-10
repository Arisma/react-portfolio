import React, { Component } from "react";
import styled from "styled-components";

import Product from "./Item";

import { storeProducts } from "../../data";
import { ProductConsumer } from "../../helper";

export default class ProductList extends Component {
  state = {
    products: storeProducts
  };
  render() {
    return (
      <React.Fragment>
        <div className="container mt-5">
                  <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-capitalize">
                      <h1>List Menu</h1>
                    </div>
                  </div>
                </div>
        <ProductWrapper className="py-5">
          <div className="container">
            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </ProductWrapper>
      </React.Fragment>
    );
  }
}

const ProductWrapper = styled.section``;
