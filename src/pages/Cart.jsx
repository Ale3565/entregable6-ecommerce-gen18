import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProduct from '../components/cart/CartProduct'
import { getProductsAllCart, setCartGlobal } from '../store/slices/cart.slice'
import getConfig from '../utils/getConfig'
import "./styles/Cart.css"

const Cart = () => {

  const [total, setTotal] = useState()

  const dispatch = useDispatch()
  const cart = useSelector(state => state.cartSlice)

  useEffect(() => {
    dispatch(getProductsAllCart())
  }, [])

  let subtotal
  if(cart) {
    subtotal = cart.products.reduce((acc, cv) => {
      return acc += Number(cv.price) * cv.productsInCart.quantity
    }, 0)
    
  } 
  

  const handlePurchase = () => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    const data = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references"
    }
    axios.post(URL, data, getConfig())
      .then(res => {
        console.log(res.data)
        dispatch(setCartGlobal(null))
      })
      .catch(err => console.log(err))

  }


  console.log(cart)


  return (

    <div className="wrap cf">
      <h1 className="projTitle">Ecommerce<span>-beep</span> Shopping Cart</h1>
      <div className="heading cf">
        <h1>My Cart</h1>
        <a href="#" className="continue">Continue Shopping</a>
      </div>
      <div className="cart">
        <ul className="tableHead">
          <li className="prodHeader">Product</li>
          <li>Quantity</li>
          <li>Total</li>
          <li>Remove</li>
        </ul>
        <ul className="cartWrap">
                {
                  cart?.products.map(product => (
                    <CartProduct
                      product={product}
                      key={product.id}
                    />
                  ))
                }
          <div className="special"><div className="specialContent">Free gift with purchase!, gift wrap, etc!!</div></div>
        </ul>
      </div>

      <div className="promoCode"><label htmlFor="promo">Have A Promo Code?</label><input type="text" name="promo" placholder="Enter Code" />
        <a href="#" className="btn"></a></div>

      <div className="subtotal cf">
        <ul>
          <li className="totalRow"><span className="label">Subtotal</span><span className="value">${subtotal}</span></li>

          <li className="totalRow"><span className="label">Shipping</span><span className="value">$45.00</span></li>

          <li className="totalRow"><span className="label">Tax</span><span className="value">$14.00</span></li>
          <li className="totalRow final"><span className="label">Total</span><span className="value">${subtotal && subtotal + 14 + 45}</span></li>
          <li onClick={handlePurchase} className="totalRow"><a href="#" className="btn continue">Checkout</a></li>
        </ul>
      </div>
    </div>










  )
}

export default Cart