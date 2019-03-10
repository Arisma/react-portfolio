import React, { Component } from "react";
import CartColumns from "./Column";
import CartList from "./List";
import CartTotals from "./Totals";
import { ProductConsumer } from "../../helper";

export default class Store extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} history={this.props.history} />
                </React.Fragment>
              );
            } else {
              return (
                <div className="container mt-5">
                  <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-capitalize">
                      <h1>your cart is currently empty</h1>
                    </div>
                  </div>
                </div>
              );
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
