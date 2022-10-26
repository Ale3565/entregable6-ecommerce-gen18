import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getProductsAllCart } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'
import "../cart/CartProduct.css"

const CartProduct = ({ product }) => {

  const dispatch = useDispatch()

  const handleDelete = e => {
    e.preventDefault()
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`
    axios.delete(URL, getConfig())
      .then(res => {
        console.log(res.data)
        dispatch(getProductsAllCart())
      })
      .catch(err => console.log(err))
  }

  const total = (a,b) => a * b;
  

  return (
    <li className="items even">
      <div className="infoWrap">
        <div className="cartSection">
          <p className="itemNumber">#QUE-007544-002</p>
          <h3>{product.title}</h3>
          <p><input type="text" className="qty" placeholder={product.productsInCart.quantity} />{`x ${product.price}`}</p>
          <p className="stockStatus"> In Stock</p>
        </div>
        <div className="prodTotal cartSection">
          <p>{total(product.productsInCart.quantity, product.price)}</p>
        </div>
        <div className="cartSection removeWrap">
          <a onClick={handleDelete} href="#" className="remove">x</a>
        </div>
      </div>
    </li>
  )
}

export default CartProduct