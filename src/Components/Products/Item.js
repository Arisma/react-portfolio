import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../helper";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-10 mx-auto col-sm-10 col-md-3 col-lg-3 my-3">
        <div className="product-grid justify-content-end">
          <ProductConsumer>
            {value => {
              return (
                <div
                  className="product-image2 p-5"
                  onClick={() => value.handleDetail(id)}
                >
                  <Link to="/details">
                    <img src={img} alt="" className="img-fluid pic-1" />
                  </Link>
                  <button
                    className="add-to-cart"
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? (
                      <p className="text-capitalize mb-0" disabled>
                        in cart
                      </p>
                    ) : (
                      <i className="fas fa-cart-plus"> 
                      <span className="buylabel"> Buy </span>
                      </i>
                    )}
                  </button>
                </div>
              );
            }}
          </ProductConsumer>
          <div className="product-content d-flex justify-content-center">
            <p className="title align-self-center mb-0">{title}</p>
            <h3 className="price font-weight-bold mb-0">
              <span className="mx-1">$</span>
              {price}
            </h3>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

const ProductWrapper = styled.div`
  .product-grid {
    font-family:'Roboto',sans-serif;
    position:relative;
    border:2px solid #ddd;
    border-radius:8px
  }
  
  .product-grid .product-image2 {
    overflow:hidden;
    position:relative
  }

  .product-grid .product-image2 a { display:block }
  
  .product-grid .product-image2 img {
    width:100%;
    height:165px;
    background-size: cover
  }

  .product-image2 .pic-1 {
    opacity:1;
    transition:all .5s
  }

  .product-grid:hover .product-image2 .pic-1{opacity:0.5}
  
  .product-grid .add-to-cart {
    color:#fff;
    background-color:#404040;
    font-size:15px;
    text-align:center;
    width:100%;
    padding:10px 0;
    display:block;
    position:absolute;
    left:0;
    bottom:-100%;
    transition:all .3s
  }

  .product-grid .add-to-cart:hover{
    background-color:#3498db;
    text-decoration:none
  }

  .product-grid:hover .add-to-cart{bottom:0}

  .product-grid .product-content{
    padding:20px 10px;
    text-align:center
  }

  .product-grid .title { 
    font-size:15px;
    margin:0 0 7px 
  }
  .product-grid .title { color:var(--mainWhite) }
  .product-grid .title:hover { color:var(--mainWhite) }
  
  .product-grid .price {
    color:var(--mainWhite);
    font-size:17px
  }
  
`;
